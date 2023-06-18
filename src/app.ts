// type reduceType =
// 	{
// 		type:'increment',
// 		amount:number
// 	}|
// 	{
// 		type:'decrement',
// 		amount:number
// 	}|
// 	{
// 		type:'reset',
// 		value:number
// 	}
		



// const reducer2 = (state:number, action:reduceType) => {
// 	switch (action.type) {
// 	  case "increment":
// 		return state + action.amount;
// 	  case "decrement":
// 		return state - action.amount;
// 	  case "reset":
// 		return action.value;
// 	}
//   };
  
//   // 使用例
//   reducer(100, {
// 	  type: 'increment',
// 	  amount: 10,
//   }) === 110;
//   reducer(100, {
// 	  type: 'decrement',
// 	  amount: 55,
//   }) === 45;
//   reducer(500, {
// 	  type: 'reset',
// 	  value: 0,
//   }) === 0;
  
//   // エラー例
// //   reducer(0,{
// // 	  type: 'increment',
// // 	  value: 100,
// //   });






// type Func<A, R> = (arg: A) => R;

// // 使用例
// const f1: Func<number, number> = num => num + 10;
// const v1: number = f1(10);

// const f2: Func<undefined, number> = () => 0;
// const v2: number = f2();
// const v3: number = f2(undefined);

// const f3: Func<number | undefined, number> = num => (num || 0) + 10;
// const v4: number = f3(123);
// const v5: number = f3();

// // エラー例
// // const v6: number = f1();