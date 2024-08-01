interface Student {
    std_name: string,
    std_id: number
}

interface Teacher {
    tch_name: string,
    tch_id: number
}

type AboutMe = Student & Teacher

let MySelf: AboutMe = {
    std_name: "Muhammad Shariq",
    std_id: 296862,
    tch_name: "Asharib Ali",
    tch_id: 91134 
}
console.log(MySelf.std_name);
