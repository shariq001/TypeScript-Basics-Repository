"use strict";
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let Names = buildName("Muhammad Shariq", "Adeel", "Haseeb");
console.log(Names);
