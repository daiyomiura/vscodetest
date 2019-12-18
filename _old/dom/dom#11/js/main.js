'use strict';

{
  const text = document.querySelector('input[type="text"]');
  const textarea = document.querySelector('textarea');

  console.log(text.value);
  console.log(textarea.value);

  // text.focus();  // フォーカス
  // text.select(); // フォーカスしつつ全選択
  text.disabled = true;

}
