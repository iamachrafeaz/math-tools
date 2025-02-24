/* Ecrire une fonction javascript qui affiche la table de multiplication d’une valeur donnée en
paramètre. Avant l’appel à la fonction la valeur doit être saisie par l’intermédiaire d’une fenêtre de
dialogue. */

let func1 = () => {

    
    let value = prompt("Donner la valeur ");
    if(value == ''){
        alert("Enter un nombre !");
        return;
    }
    let multiplicateur = document.querySelector("#multiplicateur");
    multiplicateur.innerHTML = value;

    let container = document.querySelector("#container1");

    let content;

    for (let index = 1; index <= 10; index++) {
        content = document.createElement("p");
        content.textContent = index + " x " + value + " = " + value * index;

        container.appendChild(content);

    }

}
