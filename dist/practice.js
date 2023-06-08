//https://qiita.com/uhyo/items/e4f54ef3b87afdd65546
// この問題を解いていく
//--------1
function isPositive(num) {
    return num >= 0;
}
// 使用例
isPositive(3);
function showUserInfo(user) {
    // 省略
}
// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
});
const isPositive2 = num => num >= 0;
// 使用例
isPositive2(5);
// エラー例
// isPositive2('foo');
// const res: number = isPositive2(123);
//--------4
function sumOfPos(arr) {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}
// 使用例
const sum = sumOfPos([1, 3, -2, 0]);
function getSpeed(speed) {
    switch (speed) {
        case "slow":
            return 10;
        case "medium":
            return 50;
        case "fast":
            return 200;
    }
}
// 使用例
const slowSpeed = getSpeed("slow");
const mediumSpeed = getSpeed("medium");
const fastSpeed = getSpeed("fast");
// 使用例
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
//--------2_4
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
// setNumState('foobar');
//--------3_1
// type mapFromArrayType = {
// 	arr:object[]
// 	key:string
// }
///課題、返り値を見てみてよ
// function mapFromArray<T,K extends keyof T>(arr:T[],key:K) {
function mapFromArray(arr, key) {
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
class EventDischarger {
    emit(eventName, payload) {
        // emit<T extends keyof E>(eventName:T, payload:E[T]) {
        // 省略
    }
}
// 使用例
//   const ed = new EventDischarger<EventPayloads>();
//   ed.emit("start", {
// 	user: "user1"
//   });
//   ed.emit("stop", {
// 	user: "user1",
// 	after: 3
//   });
//   ed.emit("end", {});
//   // エラー例
//   ed.emit("start", {
// 	user: "user2",
// 	after: 0
//   });
//   ed.emit("stop", {
// 	user: "user2"
//   });
//   ed.emit("foobar", {
// 	foo: 123
//   });
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
// エラー例
reducer(0, {
    type: 'increment',
    value: 100,
});
//# sourceMappingURL=practice.js.map