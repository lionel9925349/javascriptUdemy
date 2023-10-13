// // function maFonction() {
// //     alert('Bonjour !');
// // }

// // maFonction();   // Appel de la fonction

// // function maFonctionDeux() {
// //     alert('Bonjour  le Monde!');
// // }

// maFonctionDeux();   // Appel de la fonction

// function addition(a, b) {
//     return a + b;
// }


// let resultat = addition(1, 2);

// alert(resultat); // 3


// function cuisiner( nombreDeGateaux, minuteDePreparation = 10, minutesDeCuisson = 15) {
//     // Code de la fonction
//     // ...
//     return nombreDeGateaux * (minuteDePreparation + minutesDeCuisson);
// }
// //console.log(cuisiner(5)); // 100

// function demanderAge() {
//     let age = prompt("Quel est votre âge ?", 18);
//     alert(`Vous avez ${age} ans !`);
// }

// demanderAge();

function abracadabra(){
    let prenom = prompt("Quel est votre prénom ?");
    let nom = prompt("Quel est votre nom ?");
    let age = prompt("Quel est votre âge ?");
    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, " + prenom + " !");
    alert("Euh... Je veux dire... Monsieur le grand magicien " + nom + " !");
    alert("Cela fait déjà " + age + " ans que vous faites rayonner notre contrée !");
}

abracadabra();