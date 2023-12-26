//readonly

let withReadonly:{
	readonly name:string
}
withReadonly = {
	name:'kevin'
}
// withReadonly.name = 'mike'; ここで再代入はできない


//複数のプロパティをまとめて読み取り専用にしたい！！
let allpropatyWithReadonly: Readonly<{
	name:string
}>
allpropatyWithReadonly = {
	name:'tarou'
}
// allpropatyWithReadonly.name = 'hanako' やっぱり再代入はできない


// オブジェクトリテラルの末尾に、as constをつけると、readonlyと同様になります。
// 参考：understanding_ts/src/react_0611.ts


//readonlyとconstの違い
// constは変数に対して定義。
// readonlyはオジェクトのプロパティに対して代入不可にする。