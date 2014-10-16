var through = require('through')

module.exports = function (done) {
  return through(
    function write(data) {
      if (typeof this.__stringValue === 'undefined') {
        this.__stringValue = '';
      }
      this.__stringValue += data;
      this.emit('data', data)
    },
    function end () {
      done(this.__stringValue);
      this.emit('end')
    }
  );
};

