//Named function
function add(x: number, y: number): number {
    return x+y;
}
console.log(add(10, 5))

//Anonymous function
let myAdd1 = function(x: number, y: number): number { 
    return x+y; 
};
console.log(myAdd1(20, 5));


//Anonymous function with explict type
let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};
console.log(myAdd2(30, 5));


//type names dont matter
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
    return x+y; 
};
console.log(myAdd3(40, 5));


//Lambda functions															
let myAdd4 = (a : number, b : number) => a + b;
console.log(myAdd4(50, 5));

//output will be: var myAdd4 = function(a : number, b : number) {return a + b};


// Arrow Function
let Add = (x: number, y: number): number => {
    return x + y;
  };
  
console.log(Add(60, 5));
