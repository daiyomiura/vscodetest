'use strict';

{
 const a = document.querySelector('a');
 const span = document.querySelector('span');

// 最初のページに戻るのでうまくいかない
// a.addEventListener('click', () => {
//   a.classList.add('hidden');
//   span.classList.remove('hidden');
// });
a.addEventListener('click', e => {
  e.preventDefault(); // 要素の規定の動作をキャンセルする
  a.classList.add('hidden');
  span.classList.remove('hidden');
});

}
