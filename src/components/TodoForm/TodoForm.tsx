import React from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
	const [title, setTitle] = React.useState<string>('')
	const [error, setError] = React.useState<boolean>(false)



	const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {

		setTitle(event.target.value)

	}
	const onKeyHandle = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			if (title.length !== 0) {
				props.onAdd(title)
				setTitle('')
				setError(false)
			} else {
				setError(true)
				setTimeout(() => setError(false), 10000)
			}
		}
	}

	return (<>

		{ error && <div className="center">

			<a className="btn-floating btn-large cyan pulse  ">
				<i className="material-icons butonSCSS">edit</i></a>
		</div>}
		<div className='input-field'>
			<input type="text"
				onChange={changeHandle}
				value={title}
				id='title'
				placeholder='Уведи текст'
				onKeyPress={onKeyHandle} />
			<label htmlFor="title" className='active'>Уведи текст</label>
		</div>
	</>
	)
}

export default TodoForm
