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
