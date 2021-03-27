// 1- seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


let count = "";
let n = 5;
let count2 = "";

for (let i = 0; i < n; i += 1) {
    count += "*";
}

for (let i = 0; i < n; i += 1) {
    console.log(count);
}    

// for (let i = 0; i < n; i += 1) {
//     console.log(count += "*");
// }

// for (let i = 0; i < n-1; i += 1) {
//     count += i
// }

// for (let i = 0; i < n; i += 1) {
//     count2 += "*";
//     console.log(count.substr(i) + count2);
// }


// for (let i = 0; i <n ; i += 1) {
//     count += " ";
// }

// count2 = "*"
// for (let i = 0; i < n; i += 1) {
//     console.log(count.substr(i + 1) + count2);
//     if (i % 2 === 0 ) {
//         count2 += "**";
//     }
    
// }

