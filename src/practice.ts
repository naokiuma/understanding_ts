//https://qiita.com/uhyo/items/e4f54ef3b87afdd65546
// この問題を解いていく


//--------1
function isPositive(num:number):boolean {
    return num >= 0;
}

// 使用例
isPositive(3);
// // エラー例
// isPositive('123');
// const numVar: number = isPositive(-5);



//--------2

type User = {
	name: string,
    age: number,
    private: boolean,

}
function showUserInfo(user: User) {
    // 省略
}

// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
});

// エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };



//--------3

type IsPositiveFunc = (number) => boolean
const isPositive3: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive(5);

// エラー例
// isPositive3('foo');
// const res: number = isPositive(123);



//--------4

function sumOfPos(arr:number[]) {
	return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}
  
// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);
  
// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);



//--------2_1
function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
// function myFilter<T>(arr:T[], predicate:(elm:T) => boolean):T[] {
	const result = [];
	for (const elm of arr) {
		if (predicate(elm)) {
			// result.push(elm);
		}
	}
	return result;
}


  
// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);


//--------2_2

type Speed = 'slow' | 'medium' |'fast';
function getSpeed(speed: Speed): number {
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

// エラー例
// getSpeed("veryfast");



//--------2_3

declare function addEventListener(
	text:string,
	func:()=>void,
	options?:boolean | {
		capture?:boolean,
		once?:boolean,
		passive?:boolean
	}
):void
	


// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// // エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });


//--------2_4

function giveId<T>(obj:T):{id:string} & T {
// function giveId(T):{id:string,obj:{T extends obj}} {
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
  
  // エラー例
//   const obj3: {
// 	id: string;
// 	piyo: string;
//   } = giveId({
// 	foo: "bar"
//   });


//--------2_5

//自分の回答
declare function useState2<T>(first:T):[T,(T)=> T]

//正しい回答例
type UseStateUpdateArgument<T> = T | ((oldValue: T) => T);
declare function useState<T>(
  initialValue: T
): [T, (updator: UseStateUpdateArgument<T>) => void];


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
// mapFromArray(data2, "age");



//--------3_2

// PartialはTypeScriptの標準ライブラリに定義されている型で、
// オブジェクトの型を渡されると、その各プロパティを全部省略可能にするものです。
// MyPartialという名前でこれを実装してください。

// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */

//これ　が回答。mapped type。
// type MyPartial<T> = { [K in keyof T]: T[K] };

// type T1 = MyPartial<{
// 	foo?: number;
// 	bar?: string;
// }>;
// /*
// * T2は { hoge?: { piyo: number; } } となる
// */
// type T2 = MyPartial<{
// 	hoge: {
// 		piyo: number;
// 	};
// }>;



//--------3_2
// 一瞬理解できた！！！

// 問題文がややこしい割に、やることは単純です。
// 今回のように、引数に渡された文字列に応じて型の挙動を変えたい場合はその文字列をリテラル型として取得するのが定番です。
// これは3-1でもやりましたね。今回は型引数Evを第1引数の型としました。
// 例えばed.emit("start", { ... })の場合、Evには"start"型が入ります。さらに、Ev extends keyof Eとすることによって、Eに定義されていないイベント名を拒否しています。ed.emit("foobar", { ... })のような呼び出しはこれによって型エラーとなります。

// イベント名が型Evとして得られているので、第2引数の型はEから適切なものを取得します。
// Eがイベント名: データの型という形のオブジェクトなので、目的の型はE[Ev]で得られます。

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
	//下の方に回答！
	
	emit(eventName, payload) {
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
//  emit<Ev extends keyof E>(eventName: Ev, payload: E[Ev]) {

  // エラー例
  ed.emit("start", {
	user: "user2",
	after: 0
  });
  ed.emit("stop", {
	user: "user2"
  });
  ed.emit("foobar", {
	foo: 123
  });
  