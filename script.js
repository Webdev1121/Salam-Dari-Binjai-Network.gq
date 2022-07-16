
var getName = prompt("Siapa nama mu ? ");


if (getName === null || !isNaN(getName)){
    while (getName !== null || isNaN(getName)){
        alert("Invalid , please try again");
        getName = prompt("Siapa namamu ? ");
        console.log(getName)
       if (getName !== null || !isNaN(getName)){
           break;
       }
    }
}else {
    alert("Maaf kalo grafik nya BURIK");
    alert("Tujuan : Dapetin Score TerBANYAK (hati2 kalo di refresh, ya ilang score nya) ");
    alert("HINT! KLIK PISANG BUAT MAININ GAME NYA");
}
