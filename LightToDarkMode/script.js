const luckyNumbers = [
    Math.ceil(Math.random() * 60),
    Math.ceil(Math.random() * 60),
    Math.ceil(Math.random() * 60),
    Math.ceil(Math.random() * 60),
    Math.ceil(Math.random() * 60),
    Math.ceil(Math.random() * 60)
];

const myNumbers = [3, 7, 16, 28, 45, 51]

let count = 0;


const lottoLand = (numbers, lucky) => {
    for (let i = 0; i <= lucky.length; i += 1) {
        if (numbers[i] === lucky[i]) {
            count += 1;
        }
    }
    return console.log(count + ' Acertos')
    
}

lottoLand(myNumbers, luckyNumbers);


// const row = 5;
// const col = 5;
// let count =""
// const pyramid = (row, col) => {
//     for (let i = 0; i < row; i += 1) {
//         for (let i = 0; i < col; i +=1) {
//             count += "*"
//         }
//         console.log(count);
//         count = "";
//     }
// }

// pyramid(row, col);

