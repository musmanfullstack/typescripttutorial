//classes are blue prints;The members of a class (properties & methods) are typed using type annotations, similar to variables.
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var obj = new person();
obj.name = "Muhammad Usman";
var obj2 = new person();
obj2.name = "Muhammad Usman Akbar";
console.log(obj, obj2);
/*Members: Visibility
Class members also be given special modifiers which affect visibility.

There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below */
var student = /** @class */ (function () {
    function student(namenew) {
        this.name = namenew;
    }
    student.prototype.getName = function () {
        return this.name;
    };
    return student;
}());
var studentObj = new student("Muhammad Usman Developer");
console.log(studentObj);
console.log(studentObj.getName());
var sampleClass = /** @class */ (function () {
    function sampleClass() {
    }
    sampleClass.prototype.getdetails = function () {
        return 8 * 9;
    };
    ;
    return sampleClass;
}());
var objSampleClass = new sampleClass();
console.log(objSampleClass.getdetails());
