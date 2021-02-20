
// /*コメント*/

// console.log("hello world")

// console.log("hello world again")



// /*文字列表示*/
// console.log(" it's me")

// console.log("hello\n world")

// /*数値計算*/
// console.log(2 + 10 * 3);

// console.log("111+111");


// console.log(111+111);



// /*定数 constを使用する */
// const price = "3000";

// console.log(price);


// console.log(price*3);


// /*変数 letを使用する*/
// /*変数の場合には2回定義することができる*/

// let price2 = 140;

// console.log(price2*10);

// price2= 200;


// console.log(price2*3);


// /*変数を使った計算*/


// let number = 3000;


// /*足し算*/

// number += 1000;

// console.log(number);

// /*掛け算*/

// number2 = 1000;

// number2 *= 30;

// console.log(number2);


// console.log('5' + 3);
// console.log(parseInt('5', 2) + 3);

// console.log(parseInt('hello', 10));



// /*比較演算子*/

// 'use strict'

// const price3 = 1200;


// console.log(price3 > 1000);

// console.log(price3 < 1000);


// console.log(price3 >= 1000);


// console.log(price3 <= 1000);

// console.log(price3 === 1000);


// console.log(price3 !== 1000);


// /*条件分岐*/

// // 'use strict';

// // const score = 85;

// // if (score >= 80) {
// //   console.log('Great!');
// // } else {
// //   console.log('OK...!');
// // }

// // score >= 80 ? console.log('Great!') : console.log('OK...!');


// /*論理演算子*/

// 'use strict'

// const score = 60;
// const name = 'suzuki';


// // if (score > 50 ){
// //     if(name === 'sasaki'){
// //         console.log('your score is very good');
// //     }else{
// //         console.log('your name is not correct');
// //     }
// // }



// // && かつ(AND)
// // || または(OR)
// // !　〜ではない(NOT)

// if(score >= 50 && name === 'sasaki'){
//     console.log('your score is pretty good')
// }else{
//     console.log('your name is incorrect');
// }




// /*条件分岐(switch文)*/

// const signal = 'yellow';

// switch (signal) {
//     case 'red':
//       console.log('Stop!');
//       break;
//     case 'yellow':
//       console.log('Caution!');
//       break;
//     case 'blue':
//     case 'green':
//       console.log('Go!');
//       break;
//     default:
//       console.log('Wrong signal!');
//       break;
//   }




// /*ループ処理 for*/
// 'use strict'

// for (let i = 1; i <= 10; i++) {
//     // console.log('hello');
//     // console.log('hello' + i);
//     console.log(`hello ${i}`);
// }


// /*ループ処理 while*/
// 'use strict';

// let hp = 100;

// while (hp > 10){
//   console.log('${hp} HP left!');
// }

// 
// for (let i = 1; i <= 10; i++) {
//   if (i === 4) {
//      continue;
//    }
//   // if (i === 4) {
//   //   break;
//   // }
//   console.log(i);
// }




/*関数実行*/

// 'use strict';

// function showAd(message = 'Ad') { // 仮引数
//   console.log('----------');
//   console.log(`--- ${message} ---`);
//   console.log('----------');
// }

// showAd('Header Ad'); // 実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('Ad');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');



// function sum(a,b,c)
// // {　
// //   return a+b+c;
// // }

// const sum = function(a,b,c)
// {　
//   return a+b+c;
// };


// const total = sum(1,2,10) + sum(8,4,10);

// console.log(total);



// /*アロー関数*/

// const sum = (a,b,c) =>   a+b+c;



// const total = sum(1,2,10) + sum(8,4,10);

// console.log(total);



// // const double = function(a){
// //   return a * 2;
// // }


// const double = (a) =>   a * 2;
// console.log(double(12));



/*スコープ関数*/


// 'use strict';

// const x = 2;

// function f() {
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);



/*関数実行*/

'use strict';

{
const x = 100;
console.log(x);
}


