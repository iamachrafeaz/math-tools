/*
Ecrire une fonction pour calculer la somme des chiffres dans un entier donné.
*/

function func3() {
    let x = prompt("donner le nombre ");
    if(x == '' ){
        alert("Enter un nombre !");
        return;
    }
    let somme = document.querySelector("#somme");
    
    let sum = 0;
    
    x = x.toString();
    
    for (let index = 0; index < x.length; index++) {
        sum += parseInt(x[index]);
    }
    
    somme.innerText = "La somme des chiffres de " + x + " : " + sum  ;
}
