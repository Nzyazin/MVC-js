export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindToggleTodo(this.handleToggleTodo)
        this.view.bindAddTodo(this.handleAddTodo)


        this.onTodoListChanged(this.model.todos)
        this.model.bindTodoListChanged(this.onTodoListChanged)

        this.view.bindEditTodo(this.handleEditTodo)
    }

    

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
    }    

    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText)
    }

    handleEditTodo = (id, todoText) => {
        this.model.editTodo(id, todoText)
    }

    handleToggleTodo = (id) => {
        this.model.toggleTodo(id)
    }

    
}
