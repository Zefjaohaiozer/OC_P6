import logoKasa from '../../resources/kasa.png';

export function BannerImage() {
	return (
		<div className="divLogo">
			<a href="/">
				<img
					className="logoAvif"
					src={logoKasa}
					alt="logo de la société Kasa"
				/>
			</a>
		</div>
	);
}
