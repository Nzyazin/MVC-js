export default class View {
    constructor() {
        this.app = this.getElement('#root')

        this.title = this.createElement('h1')
        this.title.textContent = 'Todos'

        this.background = document.body.style.backgroundImage

        this.form = this.createElement('form')

        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add todo'
        this.input.name = 'todo'

        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Submit'

        this.todoList = this.createElement('ul', 'todo-list')

        this.form.append(this.input, this.submitButton)

        this.bodyStyle = this.createStyleForBackground('../image/background.jpg')
        this.app.append(this.title, this.form, this.todoList, this.bodyStyle)
    }

    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    displayTodos(todos) {
        while(this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        if (todos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to do Add a task?'
            this.todoList.append(p)
        } else {
            todos.forEach(todo => {
                const li = this.createElement('li')
                li.id = todo.id

                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete

                const span = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                if (todo.complete) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.text
                    span.append(strike)
                } else {
                    span.textContent = todo.text
                }

                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'Delete'
                li.append(checkbox, span, deleteButton)

                this.todoList.append(li)
            })
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    createStyleForBackground(img) {
        var backgroundImage = new Image()
        backgroundImage.src = img
        backgroundImage.onload = function() {
            document.body.style.backgroundImage = `url('${img}')`;
            document.body.style.backgroundRepeat = "no-repeat";
        }
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }
}