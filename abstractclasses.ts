//Abstract Classes: Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
abstract class abstractClass{
    //public abstract getArea(): number;
    public abstract getName(): string;
    
}
class childClassNew extends abstractClass{
    public getName():string{
        return "Muhammad Usman";
    }
}
let objofChildClass=new childClassNew();
console.log(objofChildClass.getName());