function affiche(){
    return Number(prompt("cette page indique \n\n que souhaitez vous faire \n\n 1-Addition \n \n 2-Soustraction \n\n  3-Multiplication \n\n 4-Division \n  5-Modulo \n  6-Quitter"));
}

function addition(){
    let a = Number(prompt("choisissez un nombre"));
    let b = Number(prompt("choisissez un autre nombre"));
    alert(a + b);
}

function soustraction(){
    let a = Number(prompt("choisissez un nombre"));
    let b = Number(prompt("choisissez un autre nombre"));
    alert(a - b);
}

function multiplication(){
    let a = Number(prompt("choisissez un nombre"));
    let b = Number(prompt("choisissez un autre nombre"));
    alert(a * b);
}

function division(){
    let a = Number(prompt("choisissez un nombre"));
    let b = Number(prompt("choisissez un autre nombre"));
    alert(a / b);
}

function modulo(){
    let a = Number(prompt("choisissez un nombre"));
    let b = Number(prompt("choisissez un autre nombre"));
    alert(a % b);
}

function quitter(){
    alert("Au revoir");
}



let choix = affiche();
try{
while(choix != 6){
    switch(choix){
        case "1":
            addition();
            break;
        case "2":
            soustraction();
            break;
        case "3":
            multiplication();
            break;
        case "4":
            division();
            break;
        case "5":
            modulo();
            break;
        default:
            alert("choix invalide");
    }
    choix = affiche();
}
}
catch(e){
    alert("Au revoir");
}

