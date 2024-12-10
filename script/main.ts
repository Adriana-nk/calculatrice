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

const btn: any = document.querySelectorAll('.btt');
let afficher = document.querySelector('.affiche')as HTMLElement
let repondre = document.querySelector('.reponse')as HTMLElement
let egalite = document.querySelector('.bttadd');
let suppression = document.querySelector('.bttadri');
let Sin = document.querySelector('.can');
let Cos = document.querySelector('.dy');
let Tan = document.querySelector('.adri');
let Sqrt = document.querySelector('.ana');
let log = document.querySelector('.anae');
let puis = document.querySelector('.anaee');
let facto = document.querySelector('.cous');




function affichage(value: string):string{
    let message: string = afficher.innerText
    afficher.innerText = message+value;
    return afficher.innerText


}
function delSaisie(): void{
    repondre.innerText = "";
    
}
function delResultat(){
    afficher.innerText = "";
    
}

egalite.addEventListener('click', () => {
    const cste = eval(afficher.innerText);
    repondre.innerText = cste ;
 });
 Sin.addEventListener('click',() =>{
    const ce : any = afficher.innerText
    let s : any = " "
    if(typeof ce == 'number')
        console.log(ce)
    repondre.innerText = Math.sin(ce).toString();
 })
Cos.addEventListener('click',() =>{
    const ce : any = afficher.innerText
    let s : any = " "
    if(typeof ce == 'number')
        console.log(ce)
    repondre.innerText = Math.cos(ce).toString();
})
Tan.addEventListener('click',() =>{
    const ce : any = afficher.innerText
    let s : any = " "
    if(typeof ce == 'number')
        console.log(ce)
    repondre.innerText = Math.tan(ce).toString();
})
Sqrt.addEventListener('click',() =>{
    const ce : any = afficher.innerText
    let s : any = " "
    if(typeof ce == 'number')
        console.log(ce)
    repondre.innerText = Math.sqrt(ce).toString();
})

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
log.addEventListener('click',() =>{
    const ce : any = afficher.innerText
    let s : any = " "
    if(typeof ce == 'number')
        console.log(ce)
    repondre.innerText = Math.log(ce).toString();
})
puis.addEventListener('click',() =>{
    const ce : any = afficher.innerText
    const y : any = afficher.innerText
    let s : any = " "
    console.log(ce)
    repondre.innerText = Math.pow(ce,y).toString();
})
    
// facto.addEventListener('click',() =>{
//     const ce : any = afficher.innerText
//     let s : any = " "
//     if(ce instanceof Number)

// })




for(let i = 0; i < btn.length;i++){
    btn[i].addEventListener('click',() => {
        affichage(btn[i].innerText)
        
    });
} suppression.addEventListener('click',()  =>{
   delSaisie ();
   delResultat ();
} )