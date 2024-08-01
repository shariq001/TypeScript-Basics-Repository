let myAge: string | number 
myAge = 17
console.log(myAge);
myAge = "Seventeen"
console.log(myAge);


// Specific Values

type Color = "Red" | "Green" | "Blue"

let color: Color
color = "Blue";
color = "Red";
// color = "Yellow"; Error