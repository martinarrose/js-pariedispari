//Ciao classe,
//Esercizio di oggi:
//nome repo: js-paliedispari

//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//Consigli del giorno
//Scriviamo sempre in italiano i passaggi che vogliamo fare
//Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//Domande da  farsi quando si crea una funzione:
//Come dovrebbe chiamarsi?
//Ho bisogno di parametri?
//Devo restituire un valore?
// Se sì, di che tipo?

//Parola palindroma
let parola = prompt("inserisci la parola");
function isPalindrome(parola) {
  let invertedWord = parola.split("").reverse("").join("");
  if (parola === invertedWord) {
    return true;
  } else {
    return false;
  }
}
let result = isPalindrome(parola);

if (result) {
  console.log("La parola è palindroma");
} else {
  console.log("la parola NON è palindroma");
}

//pari e dispari
const sceltaUtente = prompt("scegli pari o dispari");
const numeroUtente = parseInt(prompt("scegli un mumero da 1 a 5"));

if (numeroUtente > 5) {
  alert("segli un numero inferiore a 5!");
}
console.log(numeroUtente);

const numeroRandom = Math.floor(math.random() * 5) + 1;
