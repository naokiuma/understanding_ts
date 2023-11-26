// 使用例
// number型のステートを宣言 (numStateはnumber型)
var _a = useState(0), numState2 = _a[0], setNumState2 = _a[1];
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(function (state) { return state + 10; });
// 型引数を明示することも可能
var _b = useState(null), anotherState3 = _b[0], setAnotherState4 = _b[1];
setAnotherState(100);
// エラー例
// setNumState('foobar');
