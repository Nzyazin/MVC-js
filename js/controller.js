export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.onTodoListChanged(this.model.todos)
    }

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
    }
}
