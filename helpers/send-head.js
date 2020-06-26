const sendHead = (stream, code) => {
  stream.writeHead(code, {
    'Content-Type': 'text/plain;charset=utf-8'
  });
  // this part doesn't exactly fit the function name unfortunately
  if (code === 404) {
    stream.end('not found/見つかりませんでした');
  } else if (code === 500) {
    stream.write("something's wrong with the server\n");
    stream.write('サーバーにエラーが発生しました');
    stream.end();
  }
};

module.exports = sendHead;
