
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

	constructor(){
		console.log('コンストラクタ')
		//取得したdomがTSはなんなのかわからないので、指定。asでも、最初に<xxxx...>でも良い
		this.templateElement = document.getElementById('project-input')!　as HTMLTemplateElement;
		this.hostElement = <HTMLElement>document.getElementById('app');

		//form要素。content(指定の一つ下を)importする。第二引数はディープコピーするかどうか
		const importedNode = document.importNode(this.templateElement.content,true);
		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.attach();
	}

	private attach(){
		this.hostElement.insertAdjacentElement('afterbegin',this.element)
	}
}

const newploject = new ProjectInput();