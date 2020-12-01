let carColor = "kirmizi"; //or "siyah"
let carBrand = "bmw"; //or "audi", "vw"
let carModel = 2016; //or between 2001 und 2020
let customerMoreFiveYears = false; //or false


if (customerMoreFiveYears) {
    console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
} else if ((carBrand == "bmw") && ((carColor == "kirmizi") && ((carModel > 2010) && (carModel < 2019))) || ((carColor == "siyah") && (carModel == 2020))) {
    console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
} else if ((carBrand == "audi") && (((carModel > 2005) && (carModel < 2010)) || (carModel > 2014) && (carModel < 2020))) {
    console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
} else if ((carBrand == "vw") && (carColor == "siyah") && ((carModel > 2001) && (carModel < 2018))) {
    console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
} else {
    console.log("UNEXPECTED CAR");
}

/* Alternatif Cözüm
if (customerMoreFiveYears) {
    console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
} else {
    if ((carColor == "kirmizi") || (carColor == "siyah")) {
        if ((carBrand == "bmw") || (carBrand == "audi") || (carBrand == "vw")) {
            if ((carBrand == "bmw") && ((carColor == "kirmizi") && ((carModel > 2010) && (carModel < 2019))) || ((carColor == "siyah") && (carModel == 2020))) {
                console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
            } else if ((carBrand == "audi") && (((carModel > 2005) && (carModel < 2010)) || (carModel > 2014) && (carModel < 2020))) {
                console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
            } else if ((carBrand == "vw") && (carColor == "siyah") && ((carModel > 2001) && (carModel < 2018))) {
                console.log(`${carModel} model ${carColor} ${carBrand} is repaired`);
            } else {
                console.log("UNEXPECTED CAR");
            }
        } else {
            console.log("UNEXPECTED CAR");
        }
    }
}
*/