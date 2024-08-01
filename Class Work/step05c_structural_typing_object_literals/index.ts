interface Ball {
    diameter: number
}
interface Sphere {
    diameter: number
}

// Creating two Objects using the above structure.
let ball: Ball = {
    diameter: 10
}
let sphere: Sphere = {
    diameter: 20
}

/* if we try to assign the value of ball to sphere or vice versa so it is possible because ball is structurally same as sphere; both contains property diameter */
sphere = ball;
console.log(ball);

ball = sphere
console.log(sphere);


// two different structures
interface Tube {
    diameter: number,
    length: number
}

let tube: Tube = {
    diameter: 15,
    length: 10
}

/* If we try to assign the value of tube to a ball it will show error because tube is not structurally same as ball,
but we if we try to assign the value of ball to the ball it will not show error because tube contains all the properties the ball have.*/

// tube = ball; error

ball = tube
console.log(tube);

// ----------------------------------------------------------------------------------------------------------------------

/* The below code demonstrates the concept of fresh and stale object literals in TypeScript, particularly focusing on the rules around assigning object literals to variables and how TypeScript handles excess or misspelled properties. Let's break down each section: */

// Fresh Object Literals

// Case 1
                    let myType = { name: "Zia", id: 1 };
                    myType = { id: 2,  name: "Tom" };

// This is valid because the object literal being assigned has exactly the same properties as myType.


/* Case 2a
                    myType = { id: 2,  name_person: "Tom" };

This results in an error because the property name_person does not exist in the type of myType. */


// Case 2b

                    var x: { id: number, [x: string]: any };
                    x = { id: 1, fullname: "Zia" };

// This is valid. The index signature [x: string]: any allows x to have additional properties, so fullname is permitted.


// Case 3
                    // myType = { id: 2,  name: "Tom", age: 22 };

// This results in an error because age is an excess property that does not exist in the type of myType.



// Stale Object Literals

// Case 1

                    let myType2 = { id: 2,  name: "Tom" };
                    myType = myType2;

// This is valid because myType2 has the same properties as myType.


/* Case 2a

                    let myType3 = { id: 2,  name_person: "Tom" };
                    myType = myType3;

This results in an error because name_person does not exist in the type of myType. */


// Case 2b

                    var x: { id: number, [x: string]: any };
                    var y = { id: 1, fullname: "Zia" };
                    x = y;

// This is valid. The index signature [x: string]: any allows x to have additional properties, so fullname is permitted.


// Case 3

                    var myType4 = { id: 2,  name: "Tom", age: 22 };
                    myType = myType4;

/* This is valid because myType4 is a stale object literal. When assigning a variable that holds an object to another variable, TypeScript does not enforce excess property checks, which is different from the behavior with fresh object literals. */