type Students = {
    name: string,
    age: number
}

let Student1: Students = {
    name: "Adeel",
    age: 18
}
console.log(Student1.name);


let Student2: Students = {
    name: "Haseeb",
    age: 17
}
console.log(Student2["age"]);



// Interface Method
interface Teacher {
    name: string,
    subject?: string
}

// Adding ? changes the property to optional

let teacher1: Teacher = {
    name: "Asharib Ali"
}