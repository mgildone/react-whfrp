export const curry = fn => (...args) => fn.bind(null, ...args);

export const tap = curry((fn, x) => {
  fn(x);
  return x;
});

export const trace = label => {
  return tap(x => console.log(`== ${label}:  ${x}`));
};

export const map = curry((fn, arr) => arr.map(fn));

export const join = curry((str, arr) => arr.join(str));

export const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
