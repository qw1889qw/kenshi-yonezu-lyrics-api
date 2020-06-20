// thanks https://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
const sanitize = input => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return input.replace(/[&<>"']/g, m => map[m]);
};

module.exports = sanitize;
