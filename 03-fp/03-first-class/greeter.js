// オリジナル
// function greeter(target) {
//     const sayHello = () => {
//         console.log(`Hi, ${target}!`);
//     };
    
//     return sayHello;
// }

// 書き換え１
// function greeter(target) {
//     return () => {
//         console.log(`Hi, ${target}!`);
//     };
// }

// 書き換え２
const greeter = (target) => () => { console.log(`Hi, ${target}!`); };

const greet = greeter('Step Jun');
greet(); // Hi, Step Jun!