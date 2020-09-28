import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPages = () => {

	const history = useHistory()
	return (
		<>
			<h1 className='center'>Немного про меня</h1>
			<p className='center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, odit at! Eos deserunt soluta consequatur sunt dicta odit quisquam veniam.</p>
			<button className='btn btn-large' onClick={() => history.push('/')}> Обратно к списку дел</button>
		</>
	)
}

export default AboutPages
