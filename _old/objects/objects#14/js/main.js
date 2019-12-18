'use strict';

{
  // const a = [10, 20];
  // const b = [1, 2, ...a]; // aが後に展開される(値のコピーが展開される！)
  // console.log(b);
  // a[0] = 100;
  // console.log(b);

  // const a = [10, 20];
  // const sum = (a, b) => a + b;
  // console.log(sum(...a));

  const o1 = {a: 1};
  const o2 = {...o1, b: 2};
  console.log(o2);
}
