//Interfaces are similar to type aliases, except they only apply to object types.
interface developer{
    skill: string,
    age: number
}
const developerVar:developer={
    skill:"Typescript",
    age:28
}
console.log(developerVar);
//extending
//Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface begginerDeveloper{
    name: string,
    age: number,
    qualification: string

}
interface seniorDeveloper extends begginerDeveloper{
    skills:string,
    certifications: string
}
const developerUpdated: seniorDeveloper={
    name:"Muhammad Usman",
    age: 28,
    qualification:"BSCS",
    skills: "Typescript",
    certifications:"Full Stack Certified"
}
  console.log(developerUpdated);