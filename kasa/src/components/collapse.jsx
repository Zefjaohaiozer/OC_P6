import React, { useState } from 'react';
import aboutList from '../data/about.json';

function AboutCollapse(i) {
	const [open, setOpen] = useState(false);

	let classFa;
	if (open === false) {
		classFa = 'fa fa-solid fa-chevron-down';
	} else {
		classFa = 'fa fa-solid fa-chevron-up';
	}
	return (
		<div
			key={i.id}
			className="collapsibleDiv"
		>
			<button
				className="aboutBtn"
				onClick={() => setOpen(!open)}
			>
				<h2 className="h2 aboutTitle">{i.title}</h2>
				<i className={classFa}></i>
			</button>

			{open && <div className="aboutContent">{i.content}</div>}
		</div>
	);
}

export function AboutCreateContent() {
	return aboutList.map((about, index) => AboutCollapse(about));
}
