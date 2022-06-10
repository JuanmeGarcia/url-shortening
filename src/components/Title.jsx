import React from 'react'
import landingImage from '../assets/image/illustration-working.svg'
import Button from './Button'

function Title() {
	return (
		<section className="landing">
			<article className="landing-title__info">
				<div className="landing-title__wrapper">
					<h1 className="landing-title__title">
						More than just shorter links
					</h1>
					<p className="landing-title__subtitle">
						Build your brand's recognition and get detailed insights
						on how your links are performing.
					</p>
				</div>

                <Button />
			</article>
			<figure className="landing__image">
				<img src={landingImage} alt="" />
			</figure>
		</section>
	)
}

export default Title
