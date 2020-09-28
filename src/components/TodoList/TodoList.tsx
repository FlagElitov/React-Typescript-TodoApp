import React from 'react'
import { ITodo } from '../../interface/interface'
type todoListProps = {
	todo: ITodo[],
	onToggle: (id: number) => void,
	onRemove: (id: number) => void,

}

const TodoList: React.FC<todoListProps> = ({ todo, onToggle, onRemove }) => {

	const removeHandler = (event: React.MouseEvent, id: number) => {
		event.preventDefault()
		onRemove(id)
	}

	if (todo.length === 0) {
		return <p className='center'>Пока дел нет</p>
	}
	return (
		<ul>
			{todo.map(todo => {
				const classes = ['todo']
				if (todo.completed === true) {
					classes.push('completed')
				}
				return (

					<li key={todo.id}
						className={classes.join(' ')}
						onClick={() => onToggle(todo.id)}>
						<label htmlFor="">
							<input type="checkbox"
								checked={todo.completed}
							/>
							<span>{todo.title}</span>
							<i className="material-icons red-text"
								onClick={event => removeHandler(event, todo.id)}>delete</i>
						</label>
					</li>
				)

			})}

		</ul>
	)
}

export default TodoList

