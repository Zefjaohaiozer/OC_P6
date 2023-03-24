import React, { useState } from 'react';

export function Collapse(i, j, k) {
	const [open, setOpen] = useState(false);

	let classFa;
	if (open === false) {
		classFa = 'fa fa-solid fa-chevron-down';
	} else {
		classFa = 'fa fa-solid fa-chevron-up';
	}
	return (
		<div
			key={k}
			className={`collapsibleDiv collapse${i}`}
		>
			<button
				className="collapseBtn"
				onClick={() => setOpen(!open)}
			>
				<h2 className="h2 collapseTitle">{i}</h2>
				<i className={classFa}></i>
			</button>

			{open && <div className="collapseContent">{j}</div>}
		</div>
	);
}
