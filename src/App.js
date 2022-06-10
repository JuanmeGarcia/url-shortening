import Navbar from './components/Navbar'
import Title from './components/Title'
import ShorterInput from './components/ShorterInput'
import Stats from './components/Stats'
import CardsContainer from './components/CardsContainer'
import Card from './components/Card'
import './sass/main.scss'
import { data } from './data'
import CTA from './components/CTA'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Title />
			<ShorterInput />
			<Stats />
			<CardsContainer>
				<Card
					key={data[0].id}
					id={data[0].id}
					title={data[0].title}
					text={data[0].text}
				/>
				<Card
					key={data[1].id}
					id={data[1].id}
					title={data[1].title}
					text={data[1].text}
				/>
				<Card
					key={data[2].id}
					id={data[2].id}
					title={data[2].title}
					text={data[2].text}
				/>
			</CardsContainer>
			<CTA />
		</div>
	)
}

export default App
