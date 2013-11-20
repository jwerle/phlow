
module.exports = phlow;
function phlow (obj) {
  if (!(this instanceof phlow)) {
    return new phlow(obj);
  }

  this.filters = [];
  this.target = obj;
}

phlow.prototype.use = use;
function use (fn) {
  if ('function' == typeof fn) {
    this.filters.push(fn);
  }
  return this;
}

phlow.prototype.end = end;
function end (done) {
  var fns = this.filters.slice();
  var self = this;

  ~function next (err, target) {
    var fn = fns.shift();
    if (null != fn) {
      fn(target || self.target, next);
    } else {
      done(err || null, target || self.target);
    }
  }();

  return this;
}
