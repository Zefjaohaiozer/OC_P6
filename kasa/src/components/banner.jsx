import { Nav } from './Banner/nav';
import { BannerImage } from './Banner/bannerimage';
import '../styles/Banner.css';
export function Banner() {
	return (
		<header className="header">
			<BannerImage />
			<Nav />
		</header>
	);
}
