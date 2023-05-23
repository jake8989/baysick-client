import React from 'react';
import { useAuthContext } from './useAuthContext';
export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const [isLoggedout, setisLoggedout] = React.useState(false);
	const logout = (router) => {
		localStorage.removeItem('user');
		dispatch({ type: 'LOGOUT' });
		setisLoggedout(true);
		router.push('/');
	};
	return { logout, isLoggedout };
};
// export default useLogout;
