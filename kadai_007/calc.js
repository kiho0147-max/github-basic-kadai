let num = 3;

if (num > 5) {
    console.log("5より大きい値です");
} else if (num === 5) {
    console.log("値は5です");
} else {
    console.log("5より小さい値です");
}let num = 9;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {
    console.log("3の倍数です");
} else if (num % 5 === 0) {
    console.log("5の倍数です");
} else {
    console.log(num);
}

