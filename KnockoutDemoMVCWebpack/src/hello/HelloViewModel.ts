/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" />
/// <reference path="../../node_modules/@types/lodash/index.d.ts" />

import * as ko from 'knockout'

import 'bootstrap/dist/css/bootstrap.css';

class HelloViewModel {
    greeting: KnockoutObservable<string>;

    constructor() {
        this.greeting = ko.observable('Hello sacha');
        console.log("in the HelloViewModel");
    }
}

ko.applyBindings(new HelloViewModel(), document.getElementById('HelloElement'))