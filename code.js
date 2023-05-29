function operation(op) {
    let dis = document.querySelector('.screen');
    dis.value += op;
}

function numclick(numval) {
    let dis = document.querySelector('.screen');
    dis.value += numval;
}

function clearscreen() {
    let dis = document.querySelector('.screen');
    console.log(dis.value)
    dis.value = "";
}

function calculate() {
    let dis = document.querySelector('.screen');
    let ans = eval(dis.value);
    dis.value = ans;
}

