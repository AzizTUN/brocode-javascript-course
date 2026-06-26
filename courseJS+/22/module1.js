export function wellcome(){
    let nom ;
    do{
        nom = prompt("donner votre nom svp .");
    }while(nom === null || nom.trim().length <2 || !isNaN(nom))
    alert("Bnjr " + nom);
}
export const PI = 3.14 ;
export function hola(){
    return PI * 10;
}
export class People {
    static ref = "07FQi9";

    constructor (nom , age){
        this.nom = nom ;
        this.age = age ;
    }

    hi (){console.log("hi "+ this.nom)}
}


//     You can only export variables, functions, or classes