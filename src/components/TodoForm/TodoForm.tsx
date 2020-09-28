import React from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
	const [title, setTitle] = React.useState<string>('')

	const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}
	const onKeyHandle = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(title)
			setTitle('')
		}
	}
	return (
		<div className='input-field'>
			<input type="text"
				onChange={changeHandle}
				value={title}
				id='title'
				placeholder='Уведи текст'
				onKeyPress={onKeyHandle} />
			<label htmlFor="title" className='active'>Уведи текст</label>
		</div>
	)
}

export default TodoForm
