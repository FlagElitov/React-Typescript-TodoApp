import React from 'react'
import { ITodo } from '../../interface/interface'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

declare var confirm: (question: string) => boolean

const TodoPages: React.FC = () => {

	const [todo, setTodo] = React.useState<ITodo[]>([])

	React.useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todo') || '[]') as ITodo[]
		setTodo(saved)
	}, [])

	React.useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))
	}, [todo])

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title,
			id: Date.now(),
			completed: false
		}
		// setTodos([newTodo, ...todos]);
		setTodo(prev => [newTodo, ...prev])
	}

	const toggleHandler = (id: number) => {
		setTodo(prev =>
			prev.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo
			}))
	}

	const removeHandler = (id: number) => {
		const shouldRemove = confirm('Ви точно хотите удалить ?')
		if (shouldRemove) {
			setTodo(prev => prev.filter(todo => todo.id !== id))
		}
	}
	return (
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList todo={todo} onToggle={toggleHandler} onRemove={removeHandler} />
		</>
	)
}

export default TodoPages
