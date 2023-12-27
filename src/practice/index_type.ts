// インデックス型(index signature)
// こんな感じで書くことで、stringのkey、numberのプロパティのオブジェクトを作ることができる。
let obj:{
	[K:string]:number
}

obj = {'a':1}//これはok
// obj = {'b':'b'}//これはだめ

// recordを使っても対応可能
// 同じ形。Recordとは、プロパティのキーがkeys、値がtypeであるオブジェクト。
// https://typescriptbook.jp/reference/type-reuse/utility-types/record

let obj_2:Record<string,number>
