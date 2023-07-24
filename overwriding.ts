//same name differenct signature
class parentClass{
    public newFun(){
        console.log("this is parrent class");
    }
}
class childClass extends parentClass{
    public newFun(){
        console.log("this is chlid class");
    }
}

let objofchildclass=new childClass();
objofchildclass.newFun();
