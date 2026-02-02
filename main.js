//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//TIP:
//per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

//100km, 10 anni => prezzo corretto:  €16.80
//100km, 70 anni => prezzo corretto: €12.60


const kilometers = Number (prompt("Type kilometers"))
const age = parseInt (prompt("Type your age. ie. 35"))
console.log(kilometers.toFixed(2));
const price = (kilometers * 0.21)
let discountPrice = 0
let message



if (age < 18) {
    discountPrice = .20
} else if (age >= 65 && age < 120) {
    discountPrice = .40
} else if (age >= 120){
    alert("Error...try again")
} else {
    discountPrice = 0
}

const total = (price - (price * discountPrice))
console.log(total.toFixed(2));