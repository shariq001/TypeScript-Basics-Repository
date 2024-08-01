type AboutMe = {
    name: string,
    age: number,
    Address: {
        city: string,
        zipcode: number
    }
}

let MySelf: AboutMe = {
    name: "Muhammad Shariq",
    age: 17,
    Address: {
        city: "Hyderabad",
        zipcode: 71000
    }
}

// Assessing Nested Object
console.log(MySelf.Address.city);
