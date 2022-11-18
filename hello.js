const Q = require('inspirational-quotes');
const cowsay = require('cowsay');
// console.log(Quote.getQuote());
// console.log(Quote.getQuote({author:false}));
// console.log(Quote.getRandomQuote())

console.log(
    cowsay.say({
        text: Q.getRandomQuote(),
        e: 'e',
        T: 'T',
    })
)
