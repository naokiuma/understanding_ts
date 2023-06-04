
/*デコレーター*/
function FormAutobind(target:any,methodName,descriptor:PropertyDescriptor){
	console.log('メソッドデコレーター、FormAutobind:開始')
	console.log(target)
	console.log(methodName)
	console.log(descriptor)
	const originalMethod = descriptor.value;
	console.log(originalMethod)

	const adjDescriptor:PropertyDescriptor = {	
		get(){
			console.log('this')
			console.log(this)
			//ここでのthisはFormAutobind
			const bindedMethod = originalMethod.bind(this)
			return bindedMethod;
		}
	}

	return adjDescriptor;
}




/**
 * クラスのインスタンスが作成されたときに、
 * form要素を表示する
 */
class ProjectInput{
	//HTMLTemplateElementは、globalな型
	templateElement:HTMLTemplateElement;
	// id='app'のところ。
	hostElement:HTMLElement;
	element:HTMLFormElement;

	//各種情報
	titleInputElement:HTMLInputElement;
	descriptionInputElement:HTMLInputElement;
	mandayInputElement:HTMLInputElement;



	constructor(){
		console.log('コンストラクタ')
		//取得したdomがTSはなんなのかわからないので、指定。asでも、最初に<xxxx...>でも良い
		this.templateElement = document.getElementById('project-input')!　as HTMLTemplateElement;
		this.hostElement = <HTMLElement>document.getElementById('app');

		//form要素。content(指定の一つ下を)importする。第二引数はディープコピーするかどうか
		const importedNode = document.importNode(this.templateElement.content,true);
		this.element = importedNode.firstElementChild as HTMLFormElement;

		//formにidを付与
		this.element.id = 'user-input';

		//各種値を取得
		this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
		this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
		this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement
		this.configure();
		this.attach();
	}


	/**
	 * イベントのオブジェクトを受け取る
	 */
	@FormAutobind
	private submitHandler(event:Event){

		console.log(this)
		event.preventDefault();
		// console.log(this.titleInputElement.value)
		// console.log(this.descriptionInputElement.value)
		// console.log(this.mandayInputElement.value)

		//インプットデータを取得
		const userInput = this.gatherUserInput();
		if(Array.isArray(userInput)){
			console.log('配列か');
			console.log(userInput);
		}

	}

	/**
	 * イベントリスナーを追加
	 */
	private configure(){
		this.element.addEventListener('submit',this.submitHandler)
	}

	/**
	 * 要素を追加
	 */
	private attach(){
		this.hostElement.insertAdjacentElement('afterbegin',this.element)
	}


	/**
	 * フォームの値を取得
	 * 戻り値の値で、undefinedを使うべきではない。それであればvoidをかえそう！
	 */
	private gatherUserInput():[string,string,number] | void {
		const enterdTitle = this.titleInputElement.value;
		const enterdDescription = this.descriptionInputElement.value;
		const enterdaManday = this.mandayInputElement.value;

		if(
			enterdTitle.trim().length === 0 ||
			enterdDescription.trim().length === 0 ||
			enterdaManday.trim().length === 0
		){
			alert('入力値が正しくありません。再度お試しください。')
			return ;
		}else{	
			return [
				enterdTitle,enterdDescription,+enterdaManday
			]
		}
	}
}

const newploject = new ProjectInput();





