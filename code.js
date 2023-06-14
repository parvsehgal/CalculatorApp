let buttonDiv = document.querySelector('.buttons');
let dis = document.querySelector('.screen');

buttonDiv.addEventListener("click", (event) => {
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.id != '=' && event.target.id != 'C') {
            dis.value += event.target.id;
        }
        else if (event.target.id == "=") {
            dis.value = eval(dis.value);
        }
        else dis.value = "";
    }
    else return;
})
