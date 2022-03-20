import { Container } from 'react-bootstrap'
import indexImage from '../mockup/Banner.png'
import mainPageCss from './MainPage.module.css'

function MainPage() {
	const { mainPage, 
					cover, 
					imageCover,
					titleList } = mainPageCss
	return (
		<div className={mainPage}>
			<div>
					<div className={cover}>
						<img src={indexImage} className={imageCover}/>
					</div>
				<div className={titleList}>
					<h2>List Book</h2>
				</div>
			</div>
		</div>
	)
}

export default MainPage;