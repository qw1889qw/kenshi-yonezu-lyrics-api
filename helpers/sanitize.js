// thanks https://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
// not too useful at the moment
// however, may be useful against XSS if I end up adding more functionality to this app
const sanitize = input => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    // for songs w/ spaces, user can type in either space or _
    '_': ' ' // eslint-disable-line
  };

  return input.replace(/[&<>"'_]/g, m => map[m]);
};

module.exports = sanitize;
