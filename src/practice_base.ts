//https://qiita.com/uhyo/items/e4f54ef3b87afdd65546
// この問題を解いていく


//--------1
function isPositive_base(num) {
    return num >= 0;
}

// 使用例
isPositive_base(3);
// // エラー例
// isPositive_base('123');
// const numVar: number = isPositive(-5);



//--------2

function showUserInfo_base(user: User) {
    // 省略
}

// 使用例
showUserInfo_base({
    name: 'John Smith',
    age: 16,
    private: false,
});

// エラー例
// showUserInfo_base({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };



//--------3

const isPositive_base2: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive_base2(5);

// エラー例
// isPositive_base2('foo');
// const res: number = isPositive_base2(123);



//--------4

function sumOfPos_base(arr) {
	return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}
  
// 使用例
const sum: number = sumOfPos_base([1, 3, -2, 0]);
  
// エラー例
// sumOfPos_base(123, 456);
// sumOfPos_base([123, "foobar"]);



//--------2_1

function myFilter_base(arr, predicate) {
	const result = [];
	for (const elm of arr) {
	  if (predicate(elm)) {
		result.push(elm);
	  }
	}
	return result;
}
  
  // 使用例
  const res = myFilter_base([1, 2, 3, 4, 5], num => num % 2 === 0);
  const res2 = myFilter_base(['foo', 'hoge', 'bar'], str => str.length >= 4);
  
// エラー例
//   myFilter_base([1, 2, 3, 4, 5], str => str.length >= 4);



//--------2_2

type Speed = /* ここを入力 */;
function getSpeed_base(speed: Speed): number {
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
const slowSpeed = getSpeed_base("slow");
const mediumSpeed = getSpeed_base("medium");
const fastSpeed = getSpeed_base("fast");

// エラー例
// getSpeed_base("veryfast");



//--------2_3

	
// 使用例
addEventListener_base("foobar", () => {});
addEventListener_base("event", () => {}, true);
addEventListener_base("event2", () => {}, {});
addEventListener_base("event3", () => {}, {
  capture: true,
  once: false
});

// // エラー例
// addEventListener_base("foobar", () => {}, "string");
// addEventListener_base("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });


//--------2_4

function giveId_base(obj) {
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
  } = giveId_base({ foo: 123 });
  
  const obj2: {
	id: string;
	num: number;
	hoge: boolean;
  } = giveId_base({
	num: 0,
	hoge: true
  });
  
  // エラー例
//   const obj3: {
// 	id: string;
// 	piyo: string;
//   } = giveId_base({
// 	foo: "bar"
//   });


//--------2_5


// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState_base, setNumState_base] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState_base(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState_base(state => state + 10);

// 型引数を明示することも可能
const [anotherState_base, setAnotherState_base] = useState<number | null>(null);
setAnotherState(100);

// エラー例
// setNumState_base('foobar');



//--------3_1

function mapFromArray_base(arr, key) {
	const result = new Map();
	for (const obj of arr) {
	  result.set(obj[key], obj);
	}
	return result;
  }
  
  // 使用例
  const data_2 = [
	{ id: 1, name: "John Smith" },
	{ id: 2, name: "Mary Sue" },
	{ id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray_base(data_2, "id");
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
  mapFromArray_base(data, "age");