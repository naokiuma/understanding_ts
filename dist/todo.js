var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        //trimeを使うため、tostringで文字にする。
        isValid = isValid && validatableInput.value.toString().trim().length > 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    return isValid;
}
/*デコレーター*/
function FormAutobind(target, methodName, descriptor) {
    console.log('メソッドデコレーター、FormAutobind:開始');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    const originalMethod = descriptor.value;
    console.log(originalMethod);
    const adjDescriptor = {
        get() {
            console.log('this');
            console.log(this);
            //ここでのthisはFormAutobind
            const bindedMethod = originalMethod.bind(this);
            return bindedMethod;
        }
    };
    return adjDescriptor;
}
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        //form要素。content(指定の一つ下を)importする。第二引数はディープコピーするかどうか
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.attach();
        this.renderContent();
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type === 'active' ? '実行中プロジェクト' : '完了プロジェクト';
    }
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
/**
 * クラスのインスタンスが作成されたときに、
 * form要素を表示する
 */
class ProjectInput {
    constructor() {
        console.log('コンストラクタ');
        //取得したdomがTSはなんなのかわからないので、指定。asでも、最初に<xxxx...>でも良い
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        //form要素。content(指定の一つ下を)importする。第二引数はディープコピーするかどうか
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        //formにidを付与
        this.element.id = 'user-input';
        //各種値を取得
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.mandayInputElement = this.element.querySelector('#manday');
        this.configure();
        this.attach();
    }
    /**
     * イベントのオブジェクトを受け取る
     */
    submitHandler(event) {
        console.log(this);
        event.preventDefault();
        // console.log(this.titleInputElement.value)
        // console.log(this.descriptionInputElement.value)
        // console.log(this.mandayInputElement.value)
        //インプットデータを取得
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            console.log('配列か');
            console.log(userInput);
        }
    }
    /**
     * イベントリスナーを追加
     */
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    /**
     * 要素を追加
     */
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
    /**
     * フォームの値を取得
     * 戻り値の値で、undefinedを使うべきではない。それであればvoidをかえそう！
     */
    gatherUserInput() {
        const enterdTitle = this.titleInputElement.value;
        const enterdDescription = this.descriptionInputElement.value;
        const enterdaManday = this.mandayInputElement.value;
        if (validate({ value: enterdTitle, required: true, minLength: 5 }) &&
            validate({ value: enterdDescription, required: true, minLength: 5 }) &&
            validate({ value: enterdaManday, required: true, minLength: 5 })
        // enterdTitle.trim().length === 0 ||
        // enterdDescription.trim().length === 0 ||
        // enterdDescription.trim().length === 0
        ) {
            alert('入力値が正しくありません。再度お試しください。');
            return;
        }
        else {
            return [
                enterdTitle, enterdDescription, +enterdaManday
            ];
        }
    }
}
__decorate([
    FormAutobind
], ProjectInput.prototype, "submitHandler", null);
const newploject = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
//# sourceMappingURL=todo.js.map