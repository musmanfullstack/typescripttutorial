//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
//Generics makes it easier to write reusable code.
//funcitons generics
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
//classes generics
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
var wrappedValue = { value: 10 };
//Default value generics
var NamedValueNew = /** @class */ (function () {
    function NamedValueNew(name) {
        this.name = name;
    }
    NamedValueNew.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValueNew.prototype.getValue = function () {
        return this._value;
    };
    NamedValueNew.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValueNew;
}());
var valuenew = new NamedValue('myNumber');
valuenew.setValue('myValue');
console.log(valuenew.toString()); // myNumber: myValue
//extends
function createLoggedPair(v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
}
