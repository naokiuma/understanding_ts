interface Admin {
	name:string;
	privileges:string[];
}

interface Employee {
	name:string;
	startDate:Date;
}

//交差型
type ElevateEmploee = Admin & Employee
const e1:ElevateEmploee = {
	name:'max',
	privileges:['creatr-server'],
	startDate:new Date()
}



type Cominable = string | number;
// 関数オーバーロード。同じ関数名で設定できる。こうすることで、それぞれの返り値を指定できる！
function Combinable(a:number,b:number):number;
function Combinable(a:string,b:string):string;


function Combinable (a:Cominable,b:Cominable){
	//型ガードその1
	if(typeof a === 'string' || typeof b === 'string'){
		return a.toString() + b.toString();
	}
	return a + b;
}
// その他、Classでだけ使える、instanceofも型ガードに利用可能。84より

const result = Combinable('hellow','ts');
const result2 = Combinable(1,3)


//型ガードその2
type UnknownEmployee = Employee | Admin;
function printEmployeeInmterface(emp:UnknownEmployee){
	console.log(emp.name)//nameは両方に存在するので、問題なし。

	//このconsole.logは実行できない。ifで囲って判定しようとしても、typeofはjsの関数であり、「Admin」はts上で定義した型なので、エラーになる。
	// if(typeof emp === 'Admin'){
	// 	console.log(emp.privileges)
	// }
	// なのでinを使い、こうする。inはjsでも利用可能。
	if('privileges' in emp){
		console.log(emp.privileges)
	}
}
// 実際に試す。
let test:Admin = {
	name:'kevin',
	privileges:['creatr-server']
}
printEmployeeInmterface(test)




//判別可能なunion型((ディスクリミテッドunion)
//このように、umion型を型ガードする方法その3でもある。
//その1の方法だと、プロパティが増えるごとに修正コードが増えてしまう。
//こういう場合、下記のように共通のプロパティ、typeを持つ。
type Animal = Bird|Horse

interface Bird {
	type:'bird',
	flyingSpeed:number
}
interface Horse {
	type:'horse'
	runningSpeed:number
}
function moveAnimal(animal:Animal){
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log('移動速度：' + speed)
}

moveAnimal({type:'bird',flyingSpeed:200})



// 型キャストについて。asと！。
// typescirptはdomを取得する際、それがどのような構造か？まではわからない。
// なので、この場合「!」と、<HTMLInputElement>を記載してあげる、
//なお<HTMLInputElement>はglobalに使えるhtmlの型。

// これでok。
// const userInputElement = <HTMLInputElement>document.getElementById('totototo')!;
// userInputElement.value = 'こんにちは';

// なお。reactではjsxと衝突するので、こう書く。-----------qiitaに追記してもいいかも。
const userInputElement = document.getElementById('totototo')! as HTMLInputElement;
userInputElement.value = 'こんにちは';



// インデックス型--------------
// interfaceで、どんなプロパティが入るかわからない場合に使える！

/**
 * {email:'正しいメールアドレスではありません',usename:'メールアドレスの形式ではありません}
 * のように、いろんなformの値を受け取りたい。でも、特定の名前に依存したくない場合に使う。
 */
interface ErrorContainer{
	//プロパティ名はstring、その値もstringということ
	[prop:string]:string
}

// こんな感じで、複数のプロパティを指定できる。なんと指定しないということもできる。
const erroBag:ErrorContainer = {
	email:'正しいメールアドレスではありません。',
	usename:'メールアドレスの形式ではありません'
}






