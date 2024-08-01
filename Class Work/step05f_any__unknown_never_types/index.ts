// Any
let MyVal: any
MyVal = "Typescript"
MyVal = 6
MyVal = true
MyVal = []
MyVal = {}
MyVal = Math.random
MyVal = null
MyVal = undefined
MyVal = () => {console.log('Hello Typescript');}


// Unknown
let Value: unknown
Value = "Typescript"
Value = 6
Value = true
Value = []
Value = {}
Value = Math.random
Value = null
Value = undefined
Value = () => {console.log('Hello Typescript');}

// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
// const val3: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error


// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
  }
   
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
   
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }