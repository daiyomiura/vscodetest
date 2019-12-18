'use strict';

function showAd(message = 'Ad') { // 仮引数
    console.log('----------');
    console.log(`--- ${message} ---`);
    console.log('----------');

}

showAd('Header Ad');
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');