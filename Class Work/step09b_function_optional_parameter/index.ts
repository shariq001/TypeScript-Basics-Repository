//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //ok
console.log(result1);

// let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters

let result3 = buildName("Bob", "Adams");  //also ok
console.log(result3);



