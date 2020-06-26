const sendHead = require('./send-head');

const handleErr = (err, stream) => {
  if (err) {
    sendHead(stream, 500);
  }
};

module.exports = handleErr;
