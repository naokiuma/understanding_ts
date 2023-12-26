// オブジェクトに型注釈をつけることができる。

let object_type1:{
	id:number
	name:string; 
}
object_type1 = {
	id:1,
	name:'太郎'
}

//こんな感じで、オブジェクトという注釈をつけることも。
//ただしこれは、なんの情報もないのと同様なのでおすすめはできない。
let object_type2: object;
object_type2 = { width: 1080, height: 720 };




//メソッドにも型注釈をつけることができる。
let calculator: {
	sum(x: number, y: number): number;
};

calculator = {
	sum(x, y) {
	  return x + y;
	},
};

