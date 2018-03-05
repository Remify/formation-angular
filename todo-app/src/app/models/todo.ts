export class Todo {
    completed: Boolean;
    title: string;
    
	constructor(title: String) {
		this.completed = false;
		this.title = title.trim();
	}
}
