let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;

        } else if (buttonText == 'c') {
            screenvalue = "";
            screen.value = screenvalue;
        } else if (buttonText == '=') {
            screen.value = eval(screenvalue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}