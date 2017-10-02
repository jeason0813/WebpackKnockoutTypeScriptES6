webpackJsonp([2],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _knockout = __webpack_require__(1);

var ko = _interopRequireWildcard(_knockout);

__webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
/// <reference path="../../node_modules/@types/lodash/index.d.ts" />
var HelloViewModel = /** @class */function () {
    function HelloViewModel() {
        this.greeting = ko.observable('Hello sacha');
        console.log("in the HelloViewModel");
    }
    return HelloViewModel;
}();
ko.applyBindings(new HelloViewModel(), document.getElementById('HelloElement'));

/***/ })

},[2]);
//# sourceMappingURL=index.bundle.js.map