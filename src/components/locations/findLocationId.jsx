import { useLocation } from 'react-router-dom';

export function FindLocation(i, j) {
	const location = useLocation();
	const locationPath = location.pathname;
	const locationID = locationPath.replace('/location/id=', '');
	return (i = j.find((obj) => {
		return obj.id === locationID;
	}));
}
