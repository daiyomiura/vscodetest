'use strict';

{
  // オブジェクト

  const player = {
    name: 'taguchi',
    score: 32,
  };

  // console.log(player.name);
  // console.log(player['name']);

  // player.score = 100;
  // console.log(player);
  // 要素を付け加えられる！
  // player.email = 'taguchi@gmail.com';
  // console.log(player);

  delete player.score;
  console.log(player);

 }
