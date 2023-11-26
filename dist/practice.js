//https://qiita.com/uhyo/items/e4f54ef3b87afdd65546
// この問題を解いていく
const isPositive = num => num >= 0;
// 使用例
isPositive(5);
addEventListener("foobar", () => { });
addEventListener("event", () => { }, true);
addEventListener("event2", () => { }, {});
addEventListener("event3", () => { }, {
    capture: true,
    once: false
});
// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });
function giveId(obj) {
    const id = "本当はランダムがいいけどここではただの文字列";
    return Object.assign(Object.assign({}, obj), { id });
}
// 使用例
const obj1 = giveId({ foo: 123 });
const obj2 = giveId({
    num: 0,
    hoge: true
});
// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);
// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState(null);
setAnotherState(100);
// エラー例
setNumState('foobar');
// function mapFromArray<T,P extends keyof T>(arr:T[], key:P):Map<T,T[P]> {
function mapFromArray(arr, key) {
    const result = new Map();
    for (const obj of arr) {
        result.set(obj[key], obj);
    }
    return result;
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + action.amount;
        case "decrement":
            return state - action.amount;
        case "reset":
            return action.value;
    }
};
// 使用例
reducer(100, {
    type: 'increment',
    amount: 10,
}) === 110;
reducer(100, {
    type: 'decrement',
    amount: 55,
}) === 45;
reducer(500, {
    type: 'reset',
    value: 0,
}) === 0;
// 使用例
const f1 = num => num + 10;
const v1 = f1(10);
const f2 = () => 0;
const v2 = f2();
const v3 = f2(undefined);
const f3 = num => (num || 0) + 10;
const v4 = f3(123);
const v5 = f3();
// エラー例
// const v6: number = f1();
function getFoo(obj) {
    return obj.foo;
}
// 使用例
// numはnumber型
const num3 = getFoo({
    foo: 123
});
// strはstring型
const str3 = getFoo({
    foo: "hoge",
    bar: 0
});
// unkはunknown型
const unk = getFoo({
    hoge: true
});
// エラー例
getFoo(123);
getFoo(null);
// 使用例
addEventListener("foobar", () => { });
addEventListener("event", () => { }, true);
addEventListener("event2", () => { }, {});
addEventListener("event3", () => { }, {
    capture: true,
    once: false
});
// エラー例
addEventListener("foobar", () => { }, "string");
addEventListener("hoge", () => { }, {
    capture: true,
    once: false,
    excess: true
});
// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState4, setNumState4] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);
// 型引数を明示することも可能
const [anotherState4, setAnotherState_a] = useState(null);
setAnotherState(100);
// エラー例
setNumState('foobar');
function mapFromArray5(arr, key) {
    // function mapFromArray<T,K extends kyeof T>(arr:T[], key:K) {
    const result = new Map();
    for (const obj of arr) {
        result.set(obj[key], obj);
    }
    return result;
}
// 使用例
const data2 = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
];
const dataMap = mapFromArray(data2, "id");
const todo = {
    title: 'Clean room',
    completed: false,
};
//# sourceMappingURL=practice.js.map