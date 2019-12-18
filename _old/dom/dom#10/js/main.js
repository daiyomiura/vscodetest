'use strict';

{
  const h1 = document.createElement('h1');
  h1.textContent = 'title';
  document.body.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Hello, hello, hello...';
  document.body.appendChild(p);

  const h2 = document.createElement('h2');
  h2.textContent = 'Sub title';
  document.body.insertBefore(h2, p);  // insertAfterはない。insertBeforeで間に合う

  // const copy = p.cloneNode(true);　// 子要素も含める
  const copy = p.cloneNode(false);　// 空タグにする
  document.body.insertBefore(copy, h2);

  document.body.removeChild(h2);
}
