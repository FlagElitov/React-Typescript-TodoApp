import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPages = () => {

	const history = useHistory()
	return (
		<div className='center'>
			<h1 className=' mt1'>Немного про меня</h1>
			<p className=' mt1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, odit at! Eos deserunt soluta consequatur sunt dicta odit quisquam veniam.</p>
			<button className='btn btn-large mt1' onClick={() => history.push('/')}> Обратно к списку дел</button>
		</div>
	)
}

export default AboutPages
