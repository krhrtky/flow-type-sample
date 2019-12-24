// @flow

function foo(x: ?number): string {
  if (x) {
    return x.toString();
  }
  return 'default string.';
}

function concat(a: string, b: string): string {
  return a + b
}

concat('foo', 'bar') // work.
// concat(1, 2)  // does'nt work.
