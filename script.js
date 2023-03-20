const compteur = document.getElementById("compteur");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const bt1 = document.getElementById("bt1");



// console.log(inc);
inc.onclick = () =>{
    compteur.innerText = parseInt(compteur.innerText) + 1;
};
dec.onclick = () =>{
    if(compteur.innerText !== "0") {
    compteur.innerText = parseInt(compteur.innerText) - 1;
    }
};
// bt1.onclick = () =>{
//     console.log("valider avec succes !")
// };
