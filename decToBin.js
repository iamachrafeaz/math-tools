let func5 = () => {
    let dec = prompt("Le nombre decimal : ");

    if(dec == ''){
        alert("Enter un nombre !");
        return;
    }

    let binary_box  = document.getElementById("binary");

    let bin = 0;

    let i = 0;
    
    let decToBin = (x) =>{
        
        bin = bin +  (x%2) * Math.pow(10, i++)
        
    
        if (x == 1 || x == 0){
            return bin;
        }
    
    
        return decToBin(Math.floor(x/2));
    }

    binary_box.innerText=decToBin(dec);
}
 



