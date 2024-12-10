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
var Sin = document.querySelector('.can');
var Cos = document.querySelector('.dy');
var Tan = document.querySelector('.adri');
var Sqrt = document.querySelector('.ana');
var log = document.querySelector('.anae');
var puis = document.querySelector('.anaee');
var facto = document.querySelector('.cous');
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
Sin.addEventListener('click', function () {
    var ce = afficher.innerText;
    var s = " ";
    if (typeof ce == 'number')
        console.log(ce);
    repondre.innerText = Math.sin(ce).toString();
});
Cos.addEventListener('click', function () {
    var ce = afficher.innerText;
    var s = " ";
    if (typeof ce == 'number')
        console.log(ce);
    repondre.innerText = Math.cos(ce).toString();
});
Tan.addEventListener('click', function () {
    var ce = afficher.innerText;
    var s = " ";
    if (typeof ce == 'number')
        console.log(ce);
    repondre.innerText = Math.tan(ce).toString();
});
Sqrt.addEventListener('click', function () {
    var ce = afficher.innerText;
    var s = " ";
    if (typeof ce == 'number')
        console.log(ce);
    repondre.innerText = Math.sqrt(ce).toString();
});
// Bin.addEventListener('click',() =>{
//     const ce : any = afficher.innerText
//     let s : any = " "
//     if(ce instanceof Number)
// })
// hex.addEventListener('click',() =>{
//     const ce : any = afficher.innerText
//     let s : any = " "
//     if(ce instanceof Number)
// })
// mod.addEventListener('click',() =>{
//     const ce : any = afficher.innerText
//     let s : any = " "
//     if(ce instanceof Number)
// })
// Deci.addEventListener('click',() =>{
//     const ce : any = afficher.innerText
//     let s : any = " "
//     if(ce instanceof Number)
// })
log.addEventListener('click', function () {
    var ce = afficher.innerText;
    var s = " ";
    if (typeof ce == 'number')
        console.log(ce);
    repondre.innerText = Math.log(ce).toString();
});
puis.addEventListener('click', function () {
    var ce = afficher.innerText;
    var y = afficher.innerText;
    var s = " ";
    console.log(ce);
    repondre.innerText = Math.pow(ce, y).toString();
});
var _loop_1 = function (i) {
    btn[i].addEventListener('click', function () {
        affichage(btn[i].innerText);
    });
};
// facto.addEventListener('click',() =>{
//     const ce : any = afficher.innerText
//     let s : any = " "
//     if(ce instanceof Number)
// })
for (var i = 0; i < btn.length; i++) {
    _loop_1(i);
}
suppression.addEventListener('click', function () {
    delSaisie();
    delResultat();
});
