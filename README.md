# Math-tools
Ce site web fournit différents outils mathématiques:

[1. Table de multiplication d'un nombre donné.](#Table-de-multiplication-d'un-nombre-donné)

[2. Le pgcd de deux entiers.](#Le-pgcd-de-deux-entiers)

[3. La somme des chiffres dans un entier donné.](#La-somme-des-chiffres-dans-un-entier-donné)

[4. Convertir un nombre décimal en binaire](#Convertir-un-nombre-décimal-en-binaire)

![Preview](/assets/mainWindow.png)
---

### Table de multiplication d'un nombre donné.

1. Au début, on demande à l'utilisateur de saisir un nombre en utilisant prompt(). Si la valeur saisie est vide, on affiche une alert() et quitte la fonction.
```javascript
let value = prompt("Donner la valeur ");
   if(value == ''){
      alert("Enter un nombre !");
      return;
  }
```
2. Mise à jour de l'interface :

La valeur entrée est insérée dans un élément HTML avec l'ID multiplicateur pour l'afficher sur la page.

```javascript
let multiplicateur = document.querySelector("#multiplicateur");
multiplicateur.innerHTML = value;
```

3. Génération et affichage de la table de multiplication :

La fonction sélectionne un conteneur HTML avec l'ID container1.

Ensuite, une boucle `for` itère de 1 à 10, et pour chaque itération :

Un nouvel élément `<p>` est créé.

Son contenu est défini sous la forme `index x valeur = résultat`.

L'élément `<p>` est ajouté dans `#container1` pour afficher la ligne correspondante de la table de multiplication.

```javascript
let container = document.querySelector("#container1");
let content;
    for (let index = 1; index <= 10; index++) {
        content = document.createElement("p");
        content.textContent = index + " x " + value + " = " + value * index;
        container.appendChild(content);
    }
```

### Le pgcd de deux entiers.
### La somme des chiffres dans un entier donné.
### Convertir un nombre décimal en binaire
