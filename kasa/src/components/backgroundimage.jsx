import backgroundImg from './../resources/background.jpg';
import '../styles/backgroundimage.css';

export function BackgroundImg() {
	return (
		<div className="bgImg">
			<img
				src={backgroundImg}
				alt="l'océan s'abat sur les falaises"
			/>
			<h1 className="h1 title">Chez vous, partout et ailleurs</h1>
		</div>
	);
}
