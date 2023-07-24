class father{
    public fatherName: string;
    private personaldetails:string;
}
//extends keyword used for inheritance
class son extends father{
    public sonname: string;
}
let objOfSon= new son();
objOfSon.fatherName="Father";
objOfSon.sonname="son";
console.log(objOfSon);