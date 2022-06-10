import React from 'react'
import image1 from '../assets/image/icon-brand-recognition.svg'
import image2 from '../assets/image/icon-detailed-records.svg'
import image3 from '../assets/image/icon-fully-customizable.svg'

function Card(props) {
	let image
	let className = ''
    console.log(props.id)
	if (props.id === 1) {
		image = <img src={image1} alt={props.alt} />
		className = 'first'
	}
	if (props.id === 2) {
		image = <img src={image2} alt={props.alt} />
		className='second'
	}
	if (props.id === 3) {
		image = <img src={image3} alt={props.alt} />
		className='third'
	}

	return (
		<article className={`card ${className}`}>
			<figure className={`card-icon `}>{image}</figure>

			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</article>
	)
}

export default Card
