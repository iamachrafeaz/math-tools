let func6 = () => {
    let nbr_1 = document.querySelector("#nbr_1");
    let nbr_2 = document.querySelector("#nbr_2");

    nbr_1 = Number(nbr_1.value);
    nbr_2 = Number(nbr_2.value);

    let selectedRadio = document.querySelector('input[name="operator"]:checked');
    let results = document.querySelector('#results');


    if (!selectedRadio || nbr_1 == '' || nbr_2 == '' || !nbr_1 || !nbr_2) {
        alert(`1) Enter Numbers 
            2) Choose an operator 
            `);
            return
    }

    switch (selectedRadio.value) {
        case '+':
            results.innerText = nbr_1 + selectedRadio.value + nbr_2 + " = " + (nbr_1 + nbr_2);
            break;
        case '-':
            results.innerText = nbr_1 + selectedRadio.value + nbr_2 + " = " + (nbr_1 - nbr_2);
            break;
        case '*':
            results.innerText = nbr_1 + selectedRadio.value + nbr_2 + " = " + (nbr_1 * nbr_2);
            break;
        case '/':
            results.innerText = nbr_1 + selectedRadio.value + nbr_2 + " = " + (nbr_1 / nbr_2);
            break;

    }

}