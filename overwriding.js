var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//same name differenct signature
var parentClass = /** @class */ (function () {
    function parentClass() {
    }
    parentClass.prototype.newFun = function () {
        console.log("this is parrent class");
    };
    return parentClass;
}());
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childClass.prototype.newFun = function () {
        console.log("this is chlid class");
    };
    return childClass;
}(parentClass));
var objofchildclass = new childClass();
objofchildclass.newFun();
