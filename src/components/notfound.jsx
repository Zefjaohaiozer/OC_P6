import '../styles/404.css';

export function NotFound() {
	return (
		<div className="container404">
			<h1 className="title404">404</h1>
			<p className="content404">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<a
				className="link404"
				href="/"
			>
				Retourner sur la page d'accueil
			</a>
		</div>
	);
}
