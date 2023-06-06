// import { useState } from 'react';
// import { AuthContext } from '@/context/AuthContext';
// import { Password } from '@mui/icons-material';
// import { useAuthContext } from './useAuthContext';
// import { responsiveFontSizes } from '@mui/material';
// import useLogin from './useLogin';
// // const env = require('dotenv').config();
// export const useSignup = () => {
// 	const [user, setUser] = useState(null);
// 	const [error, setError] = useState(null);
// 	const [loading, setLoading] = useState(false);
// 	const [success, setSuccess] = useState(null);
// 	const { dispatch } = useAuthContext();
// 	const signup = async (name, email, phone, password, router) => {
// 		setLoading(true);
// 		setError(null);
// 		// phone = Number(phone);
// 		const response = await fetch(
// 			`${process.env.NEXT_PUBLIC_BACKEND}/api/users/signup`,
// 			{
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify({ name, email, phone, password }),
// 			}
// 		);
// 		// console.log(response);
// 		// if (!response.ok) {
// 		// 	setError('Cannot do this action');
// 		// 	// return;
// 		// }
// 		const json = await response.json();

// 		console.log(json);
// 		if (!response.ok) {
// 			setLoading(false);
// 			console.log(json.message);
// 			setError(json.message);
// 		}
// 		if (response.ok) {
// 			localStorage.setItem('user', JSON.stringify(json));
// 			dispatch({ type: 'LOGIN', payload: json });
// 			setLoading(false);
// 			setSuccess('ok');
// 			router.push('/');
// 		}
// 	};
// 	return { signup, loading, error, setError, success, setSuccess };
// };
// // export default useLogin;
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
export const useSignup = () => {
	// const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const { dispatch } = useAuthContext();
	const user = useContext(AuthContext);
	// let token = user.user.token;
	console.log(user);
	const signup = async (name, email, phone, password, router) => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND}/api/users/signup`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ name, email, phone, password }),
				}
			);
			const json = await response.json();
			console.log(json);
			if (!response.ok) {
				setLoading(false);
				console.log(json.message);
				setError(json.message);
				toast.error('Server Error Try To Reload The Page!', {
					position: 'bottom-left',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				});
				throw new Error('Something Wrong');
			}
			if (response.ok) {
				localStorage.setItem('user', JSON.stringify(json));
				dispatch({ type: 'LOGIN', payload: json });
				setLoading(false);
				setSuccess('ok');
				toast.success('User Created Successfully!', {
					position: 'bottom-left',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				});
				router.push('/');
			}
		} catch (error) {
			setError(error);
		}
	};
	console.log(loading);
	return { signup, loading, error, setError, success, setSuccess };
};
// export default useLogin;
