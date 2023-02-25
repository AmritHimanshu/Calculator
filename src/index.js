console.log("Calculator");

let screen = document.getElementById("screen");
let screenValue = "";
let count = 0;
let buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screenValue = eval(screenValue);
            // console.log(typeof (screenValue));
            if (typeof (screenValue) === 'number') {
                screenValue = screenValue.toString();
                screen.value = screenValue;
                count = 1;
            }
            else {
                // if (!screenValue) {
                //     // console.log(screenValue);
                //     console.log('hii')
                // }
                // screenValue = 'Malformed Expression';
                // screen.value = screenValue;
            }
            
        }
        else if (buttonText == "Del") {
            // console.log(typeof (screenValue));
            screenValue = screenValue.split('');
            // console.log(typeof (screenValue));
            screenValue.splice(screenValue.length - 1, 1);
            // screenValue.pop();
            screenValue = screenValue.join('');
            // console.log(typeof (screenValue));
            screen.value = screenValue;
            count = 0;
        }
        else {
            if (buttonText == '+' || buttonText == '-' || buttonText == '/' || buttonText == '.') {
                count = 0;
            }
            if (count != 1) {
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else {
                screenValue = "";
                screenValue += buttonText;
                screen.value = screenValue;
                count = 0;
            }
        }
    })
}
