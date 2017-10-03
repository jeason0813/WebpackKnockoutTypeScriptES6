"use strict";
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
/// <reference path="../../node_modules/@types/lodash/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
require("bootstrap/dist/css/bootstrap.css");
var HelloViewModel = (function () {
    function HelloViewModel() {
        this.greeting = ko.observable('Hello sacha');
        console.log("in the HelloViewModel");
    }
    return HelloViewModel;
}());
ko.applyBindings(new HelloViewModel(), document.getElementById('HelloElement'));
//# sourceMappingURL=HelloViewModel.js.map