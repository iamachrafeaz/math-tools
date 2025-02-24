/**
 * Made by Achraf(👨‍💻)
 */

/**
 * Saisir la taille des matrice
 */

let n = 3;

/**
 * Saisir la 1ere matrice 
 */

let mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

/**
 * Saisir la 2eme matrice 
 */

let mat2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

/**
 * Fonction pour additionner 2 matrices
 */

let addition = (mat1 , mat2) => {
    let mat_add = [];
    for( i = 0 ; i < n; i++ ){
        mat_add[i] = [];
        for( j = 0; j < n ; j++){
            mat_add[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    console.log(mat_add);
}

/**
 * Fonction pour soustraire 2 matrices
 */

let soustraction = (mat1 , mat2) => {
    let mat_sous = [];
    for( i = 0 ; i < n; i++ ){
        mat_sous[i] = [];
        for( j = 0; j < n ; j++){
            mat_sous[i][j] = mat1[i][j] - mat2[i][j];
        }
    }
    console.log(mat_sous);
}

/**
 * Fonction pour multiplier 2 matrices
 */

let multiplication = (mat1 , mat2) => {
    let mat_mult = [];
    for( i = 0 ; i < n; i++ ){
        mat_mult[i] = [];
        for( j = 0; j < n ; j++){
        mat_mult[i][j] = 0;
            for(k = 0; k < n ; k++) {
                mat_mult[i][j]  += mat1[i][k] * mat2[k][j];
            }
        }
    }
    console.log(mat_mult);
}

/**
 * Fonction pour avoir la transposé d'une matrice
 */

let transpose = (mat1) => {
    let mat_trans = []; 

    for (let i = 0; i < n; i++) {
        mat_trans[i] = [];
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            mat_trans[j][i] = mat1[i][j];
        }
    }
    console.log(mat1);
    console.log(mat_trans);
}


/**
 * Changer les deux matrices et enlever les comments d'un des fonctions suivantes 
 */

// addition(mat1,mat2);
// soustraction(mat1,mat2);
// multiplication(mat1,mat2);
// transpose(mat1);

/**
 * Vérifier la console! 
 */