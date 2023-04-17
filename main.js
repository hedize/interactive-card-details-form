const form = document.querySelector('form')
form.addEventListener('submit', validate);

function validate(event) {
    const card = document.getElementById('Cardholder')
    const number = document.getElementById('CardNumber')
    const exp = document.getElementById('expYear')

    // -----Error--
    const cardError = document.getElementById('HolderEror')
    const Numbererror = document.getElementById('NumberEror')
    const ExpEror = document.getElementById('ExpEror')
    const CvcError = document.getElementById('CvcEror')
    cardError.textContent = '';
    Numbererror.textContent = '';
    ExpEror.textContent = '';
    CvcError.textContent = '';

    if (!/^[+-]?\d+$/.test(number.value)) {
        Numbererror.textContent = "Wrong format, numbers only";
        number.style.border = "1px solid hsl(0, 100%, 66%)";
        event.preventDefault();
    }



    if (expYear.value == "" && cvc.value == "") {
        ExpEror.innerHTML = "Can’t be blank";
        CvcError.innerHTML = "Can’t be blank";
        cvc.style.border = " 1px solid hsl(0, 100%, 66%)";
        expYear.style.border = " 1px solid hsl(0, 100%, 66%)";
        return false;
    }

    else if (exp.value != "" && cvc.value == "") {

        ExpEror.innerHTML = "";
        CvcError.innerHTML = "Can’t be blank";
        cvc.style.border = " 1px solid hsl(0, 100%, 66%)"

        return false;
    }

    else if (exp.value == "" && cvc.value != "") {
        exp.style.border = " 1px solid hsl(0, 100%, 66%)"
        ExpEror.innerHTML = "Can’t be blank";
        CvcError.innerHTML = "";
        return false;
    }

    else {
        window.open("index-completed.html");

    }

}

function myFunction() {

    var cardname = document.getElementById('Cardholder').value
    document.getElementById('cardName').innerHTML = cardname

    var cardnumber = document.getElementById('CardNumber').value
    document.getElementById('cardNumber').innerHTML = cardnumber


    var carddate = document.getElementById('exp').value
    document.getElementById('cardDate').innerHTML = carddate

    var carddateyear = document.getElementById('expYear').value
    document.getElementById('cardDyear').innerHTML = "/" + carddateyear

    var carddateyear = document.getElementById('cvc').value
    document.getElementById('cvcnumber').innerHTML = carddateyear

}











