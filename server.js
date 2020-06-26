const http = require('http');

const sanitize = require('./helpers/sanitize');
// note: decodeTitle uses sanitize
const decodeTitle = require('./helpers/decode');
const {
  convertHiragana,
  convertEnglish
} = require('./helpers/convert-hiragana');
const sendHead = require('./helpers/send-head');
const { getHelp, getLyrics } = require('./helpers/get-help-lyrics');

http.createServer((req, res) => {
  // don't want anything to do w/ favicon.ico
  if (req.url !== '/favicon.ico') {
    const urlParts = req.url.split('/');
    const language = sanitize(urlParts[1]);
    // serve help file
    if (language === 'help') {
      sendHead(res, 200);
      getHelp(res);
    } else if (!(['jp', 'ro'].includes(language))) {
      sendHead(res, 404);
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
