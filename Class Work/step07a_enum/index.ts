// Numeric Enums
enum Color {Red, Green, Blue};//starts with 0
let c: Color = Color.Green;
console.log(c);


enum Color1 {Red = 1, Green, Blue};
let colorName: string = Color1[2];
console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex);


// String Enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  
  // Using the enum
  let dir: Direction = Direction.Up;
  console.log(dir); // Output: "UP"


// Heterogenous Enums
enum Mixed {
    No = 0,
    Yes = "YES"
  }
  
let answer: Mixed = Mixed.Yes;
console.log(answer); // Output: "YES"