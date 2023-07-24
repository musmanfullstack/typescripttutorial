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
//Abstract Classes: Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
var abstractClass = /** @class */ (function () {
    function abstractClass() {
    }
    return abstractClass;
}());
var childClassNew = /** @class */ (function (_super) {
    __extends(childClassNew, _super);
    function childClassNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childClassNew.prototype.getName = function () {
        return "Muhammad Usman";
    };
    return childClassNew;
}(abstractClass));
var objofChildClass = new childClassNew();
console.log(objofChildClass.getName());
