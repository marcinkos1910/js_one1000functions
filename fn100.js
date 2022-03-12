// // palindrome
// function isPalindrome(text){
//     // return text.split('').reverse().join('') === text.toLowerCase();
//     return text
//     .split('')
//     .reverse()
//     .join('') === text.toLowerCase();
// }

// console.log(isPalindrome('Ala'))

// const isPalindrome2 = function (text){
//     return text
//     .split('')
//     .reverse()
//     .join('') === text.toLowerCase();
// }

// const isPalindrome3 = text
//     .split('')
//     .reverse()
//     .join('') === text.toLowerCase();

// const lessOrEqualToTen = (digit) => digit <= 10;
// const lessOrEqualToTen2 = (digit) => {
//     return digit <= 0;
// }

// const max = (...digits) => {
//     let max = digits[0];
//     for (let i = 1; i < digits.length; i++) {
//         if (digits[i] > max) {
//             max = digits[i];
//         }
//     }
// }


// const max2 = (...digits) => {
//     let max = digits[0];

//     digits.forEach((digit, idx, array) => {
//         if (digit > max) {
//             max = digit
//         }
//     })
// }

// function range (start, stop, step=1){
//     if (stop === undefined){
//         stop = start;
//         start = 0;
//     }
//     const temp = [];

//     while (temp.length < (stop - start) / step) {
//         temp.push(start + temp.length * step)
//     }
//     return temp;
// }


// // Exchange rate
// async function getExchangeRate(url, currencyCode) {
//     const response = await fetch(`${url}${currencyCode}?format=json`);
//     return await response.json();
// }

// getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a/', 'EUR').then(data => {
//     console.log(data.rates[0].mid);
//     console.log(data);
// })


// async function getExchangeRate(url, currencyCode) {
//     const response = await fetch(`${url}${currencyCode}?format=json`);
//     return await response.json();
// }

// getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a/', 'USD').then(data => {
//     console.log(data.rates[0].mid);
//     console.log(data);
// })

// Check weather

// function getWeather(url){
//     return fetch(url).then(response => response.json())
// }

// function getWeatherData(promise, weatherParams){
//     promise.then(data => {
//         // const newData = data.map(item => item[weatherParams]);
//         const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
//         console.log(newData)
//     })
// }

// const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/")
// getWeatherData(result, 'temperatura')

// Sum two arrays
// const sumArrayItems = (arr1, arr2) => {
//     const t = []

//     for (let i=0; i < (arr1.lenght ? arr1.lenght : arr2.lenght); i++){
//         t.push((arr1[i] || 0) + (arr2[i] || 0))
//     }
    
//     return t
// };

// console.log(sumArrayItems([1, 2, 3], [4, 5]));  // [5, 7, 3]

// const sumArrayItems = (arr1, arr2) => (arr1.length > arr2.length ? arr1 : arr2)
//     .map((item, i) => (arr1[i] || 0) + (arr2[i] || 0))

// console.log(sumArrayItems([1, 2, 3], [4, 5]));  // [5, 7, 3]


// Return max from digits
// const getMax = (digits) => `${digits}`.split('').sort((a, b) => b -a)[0]
// const getMax2 = (digits) => Math.max(...`${digits}`.split('').map((item) => parseInt(item)))

// console.log(getMax2(123456));    //6