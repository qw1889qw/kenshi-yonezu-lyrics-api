const http = require('http');
const fs = require('fs');

const decodeTitle = require('./helpers/decode');

const handleErr = err => {
  if (err) throw err;
};

const getLyrics = (song, version, stream) => {
  // either lyrics-jp.txt or lyrics-ro.txt
  const file = `assets/lyrics-${version}.txt`;
  fs.readFile(file, (err, data) => {
    handleErr(err);
    // where do song lyrics start
    const start = data.indexOf(`${song} - start\n`);
    if (start === -1) {
      stream.end('not found');
    } else {
      // where do song lyrics end
      const end = data.indexOf(`\n${song} - end`);
      const offset = Buffer.from(`${song} - start\n`).length;
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
    const titleDecoded = decodeTitle(urlParts[2]);
    // routing
    getLyrics(titleDecoded, 'jp', res);
    /* switch (titleDecoded) {
      case '街':
        getLyrics('街', 'jp', res);
        break;
      case 'ゴーゴー幽霊船':
        getLyrics('ゴーゴー幽霊船', 'jp', res);
        break;
      case '駄菓子屋商売':
        getLyrics('駄菓子屋商売', 'jp', res);
        break;
      case 'caribou':
        getLyrics('caribou', 'jp', res);
        break;
      case 'あめふり婦人':
        getLyrics('あめふり婦人', 'jp', res);
        break;
      case 'ディスコバルーン':
        getLyrics('ディスコバルーン', 'jp', res);
        break;
      case 'vivi':
        getLyrics('vivi', 'jp', res);
        break;
      case 'トイパトリオット':
        getLyrics('トイパトリオット', 'jp', res);
        break;
      case '恋と病熱':
        getLyrics('恋と病熱', 'jp', res);
        break;
      case 'Black Sheep':
      case 'Black_Sheep': // in case it feels awkward typing a space in a URL
        getLyrics('Black Sheep', 'jp', res);
        break;
      case '乾涸びたバスひとつ':
        getLyrics('乾涸びたバスひとつ', 'jp', res);
        break;
      case '首なし閑古鳥':
        getLyrics('首なし閑古鳥', 'jp', res);
        break;
      case '心像放映':
        getLyrics('心像放映', 'jp', res);
        break;
      case '抄本':
        getLyrics('抄本', 'jp', res);
        break;
      default:
        res.end('song not found');
        break;
    } */
  }
}).listen(3000);
