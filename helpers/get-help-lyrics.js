const fs = require('fs');

const sendHead = require('./send-head');
const handleErr = require('./handle-err');

const getHelp = stream => {
  fs.readFile('assets/help.txt', (err, data) => {
    handleErr(err, stream);
    stream.end(data.toString());
  });
};

const getLyrics = (song, version, stream) => {
  // either lyrics-jp.txt or lyrics-ro.txt
  const file = `assets/lyrics-${version}.txt`;
  fs.readFile(file, (err, data) => {
    handleErr(err, stream);
    // where do song lyrics start
    const start = data.indexOf(`\n${song} - start\n`);
    if (start === -1) {
      sendHead(stream, 404);
    } else {
      sendHead(stream, 200);
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

module.exports = {
  getHelp,
  getLyrics
};
