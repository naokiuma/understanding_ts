var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    //クラスが定義されたときではなく、インスタンスかされた時に実行するように変更した。
    //クラスを置き換える処理 113より。
    //これはオブジェクトですが、newキーワードを使って、オブジェクトを作れるコンストラクタ関数です。ということを、newを使って伝える。
    return function (originalConstructor) {
        //クラスデコレータやメソッッデコレーターは値を返すことができる。
        //ここに書いているclassは、コンストラクタ関数のシンタックスシュガーである。
        //元のクラスの定義を引き継いで、新しいコンストラクタを返せる。
        return class extends originalConstructor {
            constructor(..._) {
                super(); //オリジナルのコンストラクタを引き継ぐ。
                console.log('ログ出力中3・・・');
                const hookEl = document.getElementById(hookId);
                // const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    // hookEl.querySelector('h1')!.textContent = this.user_name
                }
            }
        };
    };
}
//複数組み合わせることができる
let Person = class Person {
    constructor() {
        this.user_name = 'max';
        console.log('personオブジェクトを作成中5・・・');
    }
};
Person = __decorate([
    Logger('logstring'),
    WithTemplate('<hi>hellow</hi>', 'app')
], Person);
const pers = new Person();
//さまざまな場所にデコレーター------------
//プロパティデコレータ
function Log(target, propertyName) {
    console.log('Log_プロパティデコレーター開始');
    console.log(target);
    console.log('propertyName');
    console.log(propertyName);
}
//アクセスデコレータ
//PropertyDescriptorはtsの定義。
function Log2(target, name, descriptor) {
    console.log('アクセサデコレーター開始');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('メソッドデコレーター開始');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, methodname, position) {
    console.log('おパラメータデコレーター開始');
    console.log(target);
    console.log(methodname);
    console.log(position);
}
// ロガーを配置できる箇所
//配置箇所によって、使用できる引数が違う
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("不正な値です。");
        }
    }
    //関数
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
// const product = new Product('game',3000)
function Autobind(target, methodName, descriptor) {
    console.log('メソッドデコレーター、Autobind:開始');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    console.log('ここでのthis はwindowを見てしまうが');
    console.log(this);
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        //こういうふうに書くと、ここでのthisは、このメソッドが属している関数を指定してくれる。
        get() {
            //オリジナルの関数に、this、つまりこのfunction Auotobindを絞りつける。
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    console.log('メソッドデコレーター、Autobind:完了');
    //ここまでの記述をすることで、本来のメソッドの
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'クリックしました';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.getElementsByClassName('btn_area')[0];
console.log(button);
button === null || button === void 0 ? void 0 : button.addEventListener('click', p.showMessage //これだと、classでのthisがbuttonそのものになるので、bindしておく必要があル。
// こういうふうに。
// p.showMessage.bind(p) //わざわざこういうふうにbindしないといけない
);
const registeredValidators = {};
//デコレータ関数1。プロパティ向け
function Required(target, propertyName) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ['required']
    };
}
//デコレータ関数2。プロパティ向け
function PositiveNumber(target, propertyName) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ['positive']
    };
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseFrom = document.querySelector('form');
courseFrom.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value; //+をつけることでnumber型にしておける。
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
});
//# sourceMappingURL=decorator.js.map