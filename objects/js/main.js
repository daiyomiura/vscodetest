'use strict';

{
  // const a = 'hello';
  const a = 5;
  // console.log(a.toUpperCase()); // このままだとエラーで落ちる

  try {
    console.log(a.toUpperCase());
  } catch (e) {
    // console.log(e.message);
    console.error(e.message); // エラーの場合は、こちらの方が良いかも
  }

  console.log('Finish!');
}
