$.fn.trace = function (ident) {
  var c = window.console;
  if (!c) {
    return this;
  };

  var arg = [this];
  if (ident) {
    arg.unshift(ident);
  };

  (c.debug || c.log).apply(c, arg);
  return this;
};
