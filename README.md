# Math-tools
Ce site web fournit différents outils mathématiques:

[1. Table de multiplication d'un nombre donné.](#Table-de-multiplication-d'un-nombre-donné)

[2. Le pgcd de deux entiers.](#Le-pgcd-de-deux-entiers)

[3. La somme des chiffres dans un entier donné.](#La-somme-des-chiffres-dans-un-entier-donné)

[4. Convertir un nombre décimal en binaire](#Convertir-un-nombre-décimal-en-binaire)

[5. Simple Calculatrice](#Simple-Calculatrice)

![Preview](/assets/mainWindow.png)
---

### Table de multiplication d'un nombre donné.

**1. Au début, on demande à l'utilisateur de saisir un nombre en utilisant prompt(). Si la valeur saisie est vide, on affiche une alert() et quitte la fonction.**
```javascript
let value = prompt("Donner la valeur ");
   if(value == ''){
      alert("Enter un nombre !");
      return;
  }
```
**2. Mise à jour de l'interface :**

La valeur entrée est insérée dans un élément HTML avec l'ID multiplicateur pour l'afficher sur la page.

```javascript
let multiplicateur = document.querySelector("#multiplicateur");
multiplicateur.innerHTML = value;
```

**3. Génération et affichage de la table de multiplication :**

La fonction sélectionne un conteneur HTML avec l'ID container1.

Ensuite, une boucle `for` itère de 1 à 10, et pour chaque itération :

Un nouvel élément `<p>` est créé.

Son contenu est défini sous la forme `index x valeur = résultat`.

L'élément `<p>` est ajouté dans `#container1` pour afficher la ligne correspondante de la table de multiplication.

```javascript
let container = document.querySelector("#tableMultip");
container.innerHTML='';let content;
    for (let index = 1; index <= 10; index++) {
        content = document.createElement("p");
        content.textContent = index + " x " + value + " = " + value * index;
        container.appendChild(content);
    }
```

### Le pgcd de deux entiers.

**1. Demande de l'entrée utilisateur :**

L'utilisateur entre deux nombres via `prompt()`.

```javascript
let x = prompt("donner le premier nombre ");
let y = prompt("donner le deuxième  nombre ");    
```

Si l'un des champs est vide, un message d'erreur est affiché dans l'élément `pgcd_res`.

```javascript
if(x == '' || y ==  ''){
   pgcd_res.innerText = "Vous n'avez entré aucun nombre."
}
```

**2. Calcul du PGCD :**

Les valeurs sont échangées si nécessaire pour s'assurer que `x` est supérieur à `y`.

```javascript
if(x<y){
            let temp = x;
            x=y;
            y=temp;    
        }
```

La fonction récursive `pgcd(x, y)` est utilisée :

Si `x` est divisible par `y`, `y` est retourné.

Sinon, la fonction s'appelle elle-même avec `y` et `x % y` jusqu'à trouver le PGCD.

```javascript
let pgcd = (x,y) => {
        
            if(x%y == 0){
                return y;
            }
        
            return pgcd(y, x%y);
        }
```

**3. Affichage du résultat :**

Le PGCD est affiché dans l'élément `pgcd_res` sous la forme `PGCD(x, y) = résultat`.

### La somme des chiffres dans un entier donné.

**1. Demande de l'entrée utilisateur :**

L'utilisateur entre un nombre via `prompt()`.

Si le champ est vide, une alerte est affichée et la fonction s'arrête.

```javascript
let x = prompt("donner le nombre ");
    if(x == '' ){
        alert("Enter un nombre !");
        return;
    }
```

**2.Calcul de la somme des chiffres :**

La variable sum est initialisée à `0`.

Le nombre est converti en chaîne de caractères pour parcourir chaque chiffre individuellement.

Une boucle `for` additionne chaque chiffre après l'avoir converti en entier avec `parseInt()`.

```javascript
 let sum = 0;
    x = x.toString();
    for (let index = 0; index < x.length; index++) {
        sum += parseInt(x[index]);
    }
```

**3.Affichage du résultat :**

La somme des chiffres est affichée dans un élément HTML avec l'ID somme sous la forme La somme des chiffres de `x : résultat`.

```javascript
somme.innerText = "La somme des chiffres de " + x + " : " + sum  ;
```

### Convertir un nombre décimal en binaire

**1.Demande de l'entrée utilisateur :**

L'utilisateur entre un nombre via `prompt()`.

Si le champ est vide, une alerte est affichée et la fonction s'arrête.

```javascript
 let dec = prompt("Le nombre decimal : ");
    if(dec == ''){
        alert("Enter un nombre !");
        return;
    }
```

**2. Conversion en binaire :**

Une fonction récursive `decToBin(x)` est utilisée pour convertir le nombre en binaire.

L'algorithme utilise la division par 2 et stocke le résultat sous forme de nombre.

```javascript
    let bin = 0;
    let i = 0;
    let decToBin = (x) =>{
        bin = bin +  (x%2) * Math.pow(10, i++)
        if (x == 1 || x == 0){
            return bin;
        }
        return decToBin(Math.floor(x/2));
    }
```

**3. Affichage du résultat :**

Le résultat est affiché dans un élément HTML avec l'ID binary.

### Simple Calculatrice

**1. Récupération des valeurs et de l'opérateur :**

Les valeurs des nombres sont extraites des champs `#nbr_1` et `#nbr_2`.

L'opérateur sélectionné est récupéré à l'aide des boutons radio.

**2. Vérification des entrées :**

Vérifie si les champs sont bien remplis et si un opérateur est sélectionné.

**3. Calcul et affichage du résultat :**

Effectue l'opération correspondant à l'opérateur sélectionné.

Affiche le résultat dans #results sous la forme `a + b = c`.

```javascript
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
```
