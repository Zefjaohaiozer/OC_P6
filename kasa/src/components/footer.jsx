import logoFooter from '../resources/logoFooter.png';

import '../styles/footer.css';
export function Footer() {
	return (
		<footer>
			<img
				className="footerImg"
				src={logoFooter}
				alt="logo Kasa"
			></img>
			<h3 className="footerText">© 2020 Kasa. All rights reserved</h3>
		</footer>
	);
}
