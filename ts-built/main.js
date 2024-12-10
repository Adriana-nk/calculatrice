// let affichage = document.getElementById('affichage') as HTMLInputElement;
// function ajouter(valeur: string): void{
//     affichage.value += valeur;
// }
// function effacer(): void{
//     affichage.value += '';
// }
// function calculer(): void{
// try{
//     affichage.value = eval(affichage.value);
// }catch{
//     affichage.value = 'erreur'
// }
// }
var btn = document.querySelectorAll('.btt');
var afficher = document.querySelector('.affiche');
var repondre = document.querySelector('.reponse');
var egalite = document.querySelector('.bttadd');
var suppression = document.querySelector('.bttadri');
function affichage(value) {
    var message = afficher.innerText;
    afficher.innerText = message + value;
    return afficher.innerText;
}
function delSaisie() {
    repondre.innerText = "";
}
function delResultat() {
    afficher.innerText = "";
}
egalite.addEventListener('click', function () {
    var cste = eval(afficher.innerText);
    repondre.innerText = cste;
});
var _loop_1 = function (i) {
    btn[i].addEventListener('click', function () {
        affichage(btn[i].innerText);
    });
};
for (var i = 0; i < btn.length; i++) {
    _loop_1(i);
}
// suppression.addEventListener('click',()  =>{
//     delSaisie (repondre);
//     delResultat (afficher);
// } )
