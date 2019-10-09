export const getUser = () => {
	return localStorage.getItem('user');
};
export const setCurrentUser = (data: any) => {
	localStorage.setItem('user', JSON.stringify(data));
};
export const getToken = () => {
	let token = '';
	if (getUser() != null && getUser() != 'null') {
		token = JSON.parse(localStorage.getItem('user') as string).token;
	}
	return token;
};
