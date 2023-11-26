//https://qiita.com/uhyo/items/e4f54ef3b87afdd65546
// この問題を解いていく

type IsPositiveFunc = (arg:number) => boolean

const isPositive: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive(5);

// // エラー例
// isPositive('foo');
// const res: number = isPositive(123);




interface AddEventListenerOptionsObject {
	capture?: boolean;
	once?: boolean;
	passive?: boolean;
  }
  declare function addEventListener(
	type: string,
	handler: () => void,
	options?: boolean | AddEventListenerOptionsObject
  ): void;

addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
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




function giveId<T>(obj:T):T & {id:string} {
	const id = "本当はランダムがいいけどここではただの文字列";
	return {
	  ...obj,
	  id
	};
}
  

  // 使用例
  const obj1: {
	id: string;
	foo: number;
  } = giveId({ foo: 123 });

  const obj2: {
	id: string;
	num: number;
	hoge: boolean;
  } = giveId({
	num: 0,
	hoge: true
  });




//usestate

// declare function foo(arg: number): number;

declare function useState<T>(arg:T):[
	T,
	(T) => T
]
// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);

// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState<number | null>(null);
setAnotherState(100);

// エラー例
setNumState('foobar');

// function mapFromArray<T,P extends keyof T>(arr:T[], key:P):Map<T,T[P]> {




function mapFromArray<T,K extends keyof T>(arr:T[], key:K){
	const result = new Map();
	for (const obj of arr) {
	  result.set(obj[key], obj);
	}
	return result;
  }
  


type actiontype = {
	type:"increment";
	amount:number;
}|{
	type:"decrement";
	amount:number
}|{
	type:"reset";
	value:number
}

const reducer = (state:number, action:actiontype) => {
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
//   reducer(0,{
// 	  type: 'increment',
// 	  value: 100,
//   });


// type Func<A, R> = (arg: A) => R;
type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R;


// 使用例
const f1: Func<number, number> = num => num + 10;
const v1: number = f1(10);

const f2: Func<undefined, number> = () => 0;
const v2: number = f2();
const v3: number = f2(undefined);

const f3: Func<number | undefined, number> = num => (num || 0) + 10;
const v4: number = f3(123);
const v5: number = f3();

// エラー例
// const v6: number = f1();



function getFoo<K>(obj) {
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


declare function addEventListener(arg:string,func:() => {},arg3?:boolean|{})

// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// エラー例
addEventListener("foobar", () => {}, "string");
addEventListener("hoge", () => {}, {
  capture: true,
  once: false,
  excess: true
});


declare function useState<T>(ini:T):[T,(T)=>void]
// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState4, setNumState4] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState(state => state + 10);

// 型引数を明示することも可能
const [anotherState4, setAnotherState_a] = useState<number | null>(null);
setAnotherState(100);

// エラー例
setNumState('foobar');




function mapFromArray5<T, K extends keyof T>(arr: T[], key: K): Map<T[K], T> {
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
  /*
  dataMapは
  Map {
	1 => { id: 1, name: 'John Smith' },
	2 => { id: 2, name: 'Mary Sue' },
	100 => { id: 100, name: 'Taro Yamada' }
  }
  というMapになる
  */
  
  // エラー例


  // 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
type MyPartial<T> = {[K in keyof T]?:T[K]}
type T1 = MyPartial<{
	foo: number;
	bar: string;
  }>;
  /*
   * T2は { hoge?: { piyo: number; } } となる
   */
  type T2 = MyPartial<{
	hoge: {
	  piyo: number;
	};
  }>;



  type MyPick<T,K extends keyof T> = {
	  T:T[K]

  }
  interface Todo {
	title: string
	description: string
	completed: boolean
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
	  title: 'Clean room',
	  completed: false,
  }
