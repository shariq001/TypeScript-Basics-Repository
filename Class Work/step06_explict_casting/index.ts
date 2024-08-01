let myname: unknown = "Muhammad Shariq";
console.log((myname as string).length);
console.log((<string> myname).length)