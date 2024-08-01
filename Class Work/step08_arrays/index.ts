let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax

let array2:Array<number> = [1, 2, 3];//alternative correct syntax
console.log(array2);


let array3 : number[] = [];//correct syntax to define an empty array
console.log(array3);


// let array4: number[] = new number[2];//error

let array5: number[] = [];
console.log(array5.push(1234));//dynamically adding