'use strict';

const signal = 'pink';

// if (signal === 'red') {
//     console.log('Stop!');
// } else if (signal === 'yellow') {
//     console.log('Caution!');
// } else if (sinal === 'blue') {
//     console.log('Go!');
//}

switch(signal) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Stop!');
        break;
    case 'blue':
    case 'green':
       console.log('Go!');
        break;
    default:
        console.log('Wrong signal!');
        break;
}