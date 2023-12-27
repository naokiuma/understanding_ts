//オブジェクトには
// objtct、Object、{}がある




//objectはプリミティブ以外の全ての情報をセットできる。
let a__: object;
a__ = { x: 1 }; // OK
a__ = [1, 2, 3]; // OK。配列はオブジェクト
a__ = /a-z/; // OK。正規表現はオブジェクト





// ObjectはvalueOfなどのプロパティを持つ値なら何でも代入できます。したがって、Object型にはnullやundefinedを除くあらゆるプリミティブ型も代入できます。
// ただしts的にはなんでも入れることができるので使うな公式ドキュメントに書かれている

let __a: Object;
__a = {}; // OK
 
// ボックス化可能なプリミティブ型OK
__a = 1; // OK
__a = true; // OK
__a = "string"; // OK
 

// したの二つはエラー
// nullとundefinedはNG
// __a = null;
// Type 'null' is not assignable to type 'Object'.

// __a = undefined;
// Type 'undefined' is not assignable to type 'Object'.