function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ")
}

let Names:string = buildName("Muhammad Shariq", "Adeel", "Haseeb")
console.log(Names);
