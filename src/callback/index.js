function sum (num1, num2) {
    return num1 + num2;
}

function cal (num1, num2, callback) {
    return callback(num1, num2);
}

console.log(cal(3, 3, sum))

function date (callback){
    console.log(new Date);
    setTimeout (() => {
        const date = new Date;
        callback(date);
    }, 3000);
}

function printDate (date) {
    console.log(date);
}

date(printDate);
