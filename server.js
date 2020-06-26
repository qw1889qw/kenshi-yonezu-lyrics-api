const http = require('http');
const fs = require('fs');

const sanitize = require('./helpers/sanitize');
// note: decodeTitle uses sanitize
const decodeTitle = require('./helpers/decode');
const {
  convertHiragana,
  convertEnglish
} = require('./helpers/convert-hiragana');

const handleErr = err => {
  if (err) throw err;
};

const getLyrics = (song, version, stream) => {
  // either lyrics-jp.txt or lyrics-ro.txt
  const file = `assets/lyrics-${version}.txt`;
  fs.readFile(file, (err, data) => {
    handleErr(err);
    // where do song lyrics start
    const start = data.indexOf(`\n${song} - start\n`);
    if (start === -1) {
      stream.end('not found');
    } else {
      // where do song lyrics end
      // \n just in case two songs' titles end the same way & we don't get the right match
      // (no problem so far)
      const end = data.indexOf(`\n${song} - end`);
      const offset = Buffer.from(`\n${song} - start\n`).length;
      const reading = fs.createReadStream(file, {
        // + offset to exclude "[song title] - start" from output
        start: start + offset,
        end
      });
      reading.pipe(stream);
      reading.on('close', () => stream.end());
    }
  });
};

http.createServer((req, res) => {
  // don't want anything to do w/ favicon.ico
  if (req.url !== '/favicon.ico') {
    const urlParts = req.url.split('/');
    res.writeHead(200, {
      'Content-Type': 'text/plain;charset=utf-8'
    });
    const language = sanitize(urlParts[1]);
    // make sure user chooses either original lyrics or romaji
    if (!(['jp', 'ro'].includes(language))) {
      res.end('not found');
    } else {
      let titleDecoded;
      // regardless of language, replace certain characters (listed in helpers/sanitize.js)
      if (language === 'jp') {
        titleDecoded = convertHiragana(decodeTitle(urlParts[2]));
      } else {
        // all song titles in assets/lyrics-ro.txt are lowercase
        titleDecoded = convertEnglish(decodeTitle(urlParts[2]).toLowerCase());
      }
      // routing
      getLyrics(titleDecoded, language, res);
    }
  }
}).listen(3000);
