var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//デコレーターを返すデコレータファクトリー
function Logger(logString) {
    console.log('ロガーデコレーターファクトリー実行1');
    return function (constructor) {
        console.log('ログ出力中4・・・');
        console.log(constructor);
        console.log(logString);
    };
}
//このように、作ったデコレーターは、ライブラリとして世の中に出すこともできる
function WithTemplate(template, hookId) {
    console.log('WithTemplateデコレーターファクトリー実行2');
    return function (constructor) {
        console.log('ログ出力中3・・・');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            // hookEl.querySelector('h1')!.textContent = p.name
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'max';
        console.log('personオブジェクトを作成中5・・・');
    }
};
Person = __decorate([
    Logger('logstring'),
    WithTemplate('<hi>hellow</hi>', 'app')
], Person);
const pers = new Person();
//さまざまな場所にデコレーター
function Log(target, propertyName) {
    console.log(target);
    console.log(propertyName);
}
// ロガーを配置できる箇所
//配置箇所によって、使用できる引数が違う
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("不正な値です。");
        }
    }
}
__decorate([
    log
], Product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map