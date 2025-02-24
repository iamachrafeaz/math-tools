/*Ecrire une fonction javascript qui calcule le plus grand commun diviseur (PGCD) de deux
entiers, les deux entiers doivent être saisie par l’utilisateur (Utiliser les promptes).*/

let func2 = ()=>{
    let x = prompt("donner le premier nombre ");
    let y = prompt("donner le deuxième  nombre ");
    
    let pgcd_res = document.getElementById("pgcd_res");
    
    if(x == '' || y ==  ''){
        pgcd_res.innerText = "Vous n'avez entré aucun nombre."
    }else{
        if(x<y){
            let temp = x;
            x=y;
            y=temp;    
        }

        let pgcd = (x,y) => {
        
            if(x%y == 0){
                return y;
            }
        
            return pgcd(y, x%y);
        }
        
        pgcd_res.innerText ="PGCD("+x+","+y+") = " + pgcd(x,y);
    }
} 

