// # Exercice 10 - DOM
// ## JS
//     - Créer un evenement qui à chaque clic incrémenter un compteur et affiche le compteur dans un span

let span = document.querySelector("span")
span.value = 0
span.innerHTML = `tu as cliqué ${span.value} fois sur le bouton`
span.style.fontSize ="20px"
let button = document.querySelector("button")
button.style.padding = "20px"
button.style.fontSize = "15px"
button.style.backgroundColor ="blue"
button.style.borderRadius ="5px"
button.style.border ="none"
button.addEventListener("click", function(){
    span.value++
    span.innerHTML = `tu as cliqué ${span.value} fois sur le bouton`
    console.log(span.value);
})