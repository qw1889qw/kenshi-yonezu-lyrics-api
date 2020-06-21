const sanitize = require('./sanitize');

const decodeTitle = urlPart => {
  // check if song part of URL entered before trying to decode; undefined !== ''
  if (urlPart) {
    // if jp characters in URL, need to undo percent encoding to test cases
    const urlPartDecoded = decodeURIComponent(urlPart);
    // only sanitize() input if there's actually some input
    if (urlPartDecoded !== '') {
      return sanitize(urlPartDecoded);
    }
    return 'empty';
  }
  return 'empty';
};

module.exports = decodeTitle;
