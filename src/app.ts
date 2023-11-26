


type UseStateUpdateArgument<T> = T | ((oldValue: T) => T);

declare function useState<T>(
  initialValue: T
): [T, (updator: UseStateUpdateArgument<T>) => void];

// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState2, setNumState2] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);

// 型引数を明示することも可能
const [anotherState3, setAnotherState4] = useState<number | null>(null);
setAnotherState(100);

// エラー例
// setNumState('foobar');