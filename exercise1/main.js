let hacker1 = prompt('')
let hacker2 = prompt('')
console.log("El nombre del driver es:", hacker1);
console.log("El nombre del navegador es:", hacker2);

console.log("La longitud de caracteres del nombre del driver es:", hacker1.length);
console.log("La longitud de caracteres del nombre del navigator es:", hacker2.length);


if (hacker1.length > hacker2.length) {
    console.log("Quien tiene la mayor cantidad de caracteres es:", hacker1, "con", hacker1.length, "caracteres");
} else if (hacker1.length < hacker2, length) {
    console.log("el nombre del", hacker2, "es quien tiene la mayor cantida de caracteres con:", hacker2.length);
} else (hacker1.length = hacker2.length); {
    console.log("el nombre de", hacker1, "y", hacker2, "tienen la misma cantidad de caracteres con:", hacker1.length);
}

console.log(hacker1.toUpperCase().split('').join(' '))

console.log(hacker2.split('').reverse().join(''))



if (hacker1.localeCompare(hacker2) <= -1) {
    console.log("el nombre que va primero es:", hacker1)
} else if (hacker1.localeCompare(hacker2) >= 1) {
    console.log("el nombre que va primero es:", hacker2)
} else {
    console.log("ambos nombres tienen el mismo orden alfabetico");
}

//----ME GUSTARIA HACERLO MAS O MENOS ASI: pero no se como hacerlo bien--
//let hackers = [hacker1, hacker2]
//hackers.sort((hacker1, hacker2) => hacker1.localeCompare(hacker2) + hacker1.localeCompare(hacker2));
//console.log("el nombre que va primero es:", hacker1.localeCompare(hacker2))







