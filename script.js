// QUESTO SARA' IL NOSTRO CODICE JS ESTERNO
// console.log è una funzionalità che ci permette di avere un output nella console del browser
// molto utile per vedere il risultato di un'operazione
console.log("Ciao Epicoders!");

// il lavoro del developer si focalizza sulla RISOLUZIONE di problemi per raggiungere un obiettivo.
// lo sviluppo sequenziale e definito e numerato di passaggi che portano al risultato, si definisce anche come ALGORITMO.
// è simile all'esecuzione di una ricetta, quindi passo dopo passo seguendo le istruzioni in un'ordine ben definito.

// i contenitori come nelle ricette sono fondamentali anche nella creazione di un algoritmo.
// i contenitori nel caso di JS si chiamano VARIABILI.
// una variabile (contenitore) è un'allocazione di memoria col fine di salvare un dato per essere utilizzato durante l'esecuzione del programma.
// le variabili vengono salvate nella memoria a BREVE termine (RAM)
// le variabili hanno un nome col quale riusciremo a riferirci per estrarre il valore che contengono.

// CREAZIONE VARIABILI
// var var = "" // non possiamo usare var come nome di dichiarazione di variabile perché var è una parola riservata (keyword)
var myVar; // ho creato un contenitore VUOTO
// var sarebbe meglio non usarlo mai, è il vecchio metodo per creare una variabile. Oggi è stato sostituito con "let"

// le variabili vanno create con notazione camelCase (prima parola minuscola, ogni successiva parola la prima lettera maiuscola)
// in questo caso si crea il contenitore e si assegna il valore successivamente con l'=
let teacher;
teacher = "Stefano"; // string

// qui sto creando il contenitore e contemporaneamente gli ASSEGNO (=) un valore. PIU' PRATICO.
let teacher2 = "Stefano";

// è possibile manipolare le stringhe andando a concatenarle assieme per creare frasi o parole composte da caratteri diversi
let genericErrorMessage = "Epicode we have a problem!!!";
let status404 = "404 Not Found";

console.log("CONCATENAZIONE DI STRINGHE: ", genericErrorMessage + "\n " + status404);

console.log("TEACHER:", teacher); // "Stefano"

teacher = 30; // number, !!!WARNING!!! assolutamente sconsigliato cambiare completamente il tipo di valore in una variabile

console.log("TEACHER:", teacher); // 30
console.log("TEACHER2:", teacher2);

let realNumber = 10; // number
let falseNumber = "10"; // string

// il console.log() è una direttiva di output e serve a controllare il corretto risultato di un'operazione
console.log("False sum", realNumber - falseNumber);

// let resultFalseSum = realNumber + falseNumber;
// console.log("False sum2", resultFalseSum);

// null e undefined rappresentano l'assenza di valore, null è intenzionale (applicato da un developer)
// mentre undefined rappresenta un valore inesistente o contenitore vuoto.
let randomVar = null;
console.log(randomVar);

let numero1 = 10;
let numero2 = 30;

let height = 179;
let eyeColor = "green";
let hairColor = "black";

// console.log(numero1 > numero2); // false
// console.log(numero2 > numero1); // true

// OPERATORI LOGICI - aiutano a controllare il flusso del programma, la direzione da intraprendere data una certa condizione più strutturata
// console.log(numero2 < 10 && eyeColor === "green");

console.log(height > 170 && hairColor === "black" && eyeColor === "green");
//           true       &&            true         &&           true          => true
console.log(height > 170 && hairColor === "brown" && eyeColor === "green");
//           true       &&            false        &&           true          => false

// con l'operatore AND (&&) TUTTE le condizioni devono verificarsi perché la comparazione ritorni true
// true && true --> true
// true && false --> false
// false && true --> false
// false && false --> false

console.log(height > 170 || hairColor === "brown" || eyeColor === "green");
//           true       ||            false        ||           true          => true
// con l'operatore AND (||) ALMENO una condizione deve verificarsi perché la comparazione ritorni true
// true || true --> true
// true || false --> true
// false || true --> true
// false || false --> false

!true; // => false
!false; // => true

console.log("--------------------------------------------------------------------------------------");

console.log(realNumber == falseNumber); // uguali per VALORE (UTILIZZO ALTAMENTE SCONSIGLIATO!!!)
console.log(realNumber === falseNumber); // uguali per VALORE e TIPO (strict)
// usate sempre la triple equality (===) perché vi darà meno risultati inaspettati

console.log(height != "179"); // false, i valori risultano identici, quindi non diversi.
// dovrebbe essere true perché 179 è diverso da "179" come tipo
console.log(height !== "179"); // true, vengono correttamente visti come valori diversi perché il tipo viene considerato nella comparazione

// CONST VS LET
const randNum = 30;
// con const il valore contenuto nella variabile NON POTRA' essere mutato, rimarrà costante nel tempo.
// randNum = "40"; // errore di assegnazione a costante

console.log("messaggio dopo errore");

// Creazione di un flusso che risponda all'input dinamico dell'utente

const userInput = window.prompt("inserisci la tua età");

window.alert(userInput >= 18 ? "tu puoi entrare" : "torna tra qualche anno");
// ternary operator: condizione ? se true : se false;

// >= significa maggiore e uguale, quindi si ammette 18 e tutti i valori superiori.
// avessimo usato > 18 si consideravano i valori dal 19 in poi.
// esiste chiaramente anche <=
// es. <= 0 tutti i numeri dallo 0(compreso), -1, -2.. ecc

const sensorValue = 21.2;

console.log(sensorValue >= 20 ? "si accende condizionatore" : null);

console.log(typeof sensorValue); // "number"
// l'operatore typeof vi torna una stringa che rappresenta il tipo di valore contenuto nella variabile
// molto comodo in casi in cui non siete sicuri del valore/i con cui avete a che fare
