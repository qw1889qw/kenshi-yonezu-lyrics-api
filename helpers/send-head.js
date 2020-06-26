const sendHead = (stream, worked) => {
  let statusCode;
  if (worked) {
    statusCode = 200;
  } else {
    statusCode = 404;
  }
  stream.writeHead(statusCode, {
    'Content-Type': 'text/plain;charset=utf-8'
  });
  if (statusCode === 404) {
    stream.end('not found/見つかりませんでした');
  }
};

module.exports = sendHead;
