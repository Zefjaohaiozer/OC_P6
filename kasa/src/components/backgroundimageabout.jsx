import BackgroundImgAboutImg from '../resources/montagnes.jpg';
import '../styles/backgroundimage.css';

export function BackgroundImgAbout() {
	return (
		<div className="bgImg bgImgAbout">
			<img
				src={BackgroundImgAboutImg}
				alt="De très jolies montagnes"
			/>
		</div>
	);
}
