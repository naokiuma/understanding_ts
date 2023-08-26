//https://qiita.com/uhyo/items/e4f54ef3b87afdd65546
// この問題を解いていく

type IsPositiveFunc = (arg:number) => boolean

const isPositive: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive(5);

// // エラー例
// isPositive('foo');
// const res: number = isPositive(123);


//function sumOfPos(arr: number[]): number {
function sumOfPos(arr:Array<number>):number {
	return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}
  
// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);
  
//   // エラー例
//   sumOfPos(123, 456);
//   sumOfPos([123, "foobar"]);


// function myFilter<T>(arr:T[], predicate:(elm:T)=> boolean):T[] {
// 	const result = [];
// 	for (const elm of arr) {
// 	  if (predicate(elm)) {
// 		result.push(elm);
// 	  }
// 	}
// 	return result;
// }

function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
	const result:T[] = [];
	for (const elm of arr) {
	  if (predicate(elm)) {
		result.push(elm);
	  }
	}
	return result;
  }

  
// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);
  
// エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

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



type returnrsult = {
	id:string,
}

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
  
  // 使用例
  const datalin = [
	{ id: 1, name: "John Smith" },
	{ id: 2, name: "Mary Sue" },
	{ id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray(datalin, "id");
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
//   mapFromArray(datalin, "age");


// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */
type MyPartial<T> = {
	[P in keyof T]?:T[P]
}

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
  



interface EventPayloads {
	start: {
		user: string;
	};
	stop: {
		user: string;
		after: number;
	};
	end: {};
}
  
  class EventDischarger<E> {
	emit<Ev extends keyof E>(eventName:Ev, payload:E[Ev]) {
	  // 省略
	}
  }
  
  // 使用例
  const ed = new EventDischarger<EventPayloads>();
  ed.emit("start", {
	user: "user1"
  });
  ed.emit("stop", {
	user: "user1",
	after: 3
  });
  ed.emit("end", {});
  
  // エラー例
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
  reducer(0,{
	  type: 'increment',
	  value: 100,
  });