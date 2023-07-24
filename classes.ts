//classes are blue prints;The members of a class (properties & methods) are typed using type annotations, similar to variables.

class person{
    name: string
}
const obj=new person();
obj.name="Muhammad Usman";
let obj2=new person();
obj2.name="Muhammad Usman Akbar";
console.log(obj,obj2);

/*Members: Visibility
Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below */

class student{
    private name: string;
    public constructor(namenew:string){
        this.name=namenew;
    }
    public getName(): string{
        return this.name;
    }
}
  let studentObj = new student("Muhammad Usman Developer");
console.log(studentObj);
console.log(studentObj.getName());

//Iterfaces can be used to define the type a class must follow through the implements keyword.
interface sampleInterface{
    getdetails:() => number;
}
class sampleClass implements sampleInterface
{
    public getdetails (): number {
        return 8*9;
    };
}
let objSampleClass=new sampleClass();
console.log(objSampleClass.getdetails());