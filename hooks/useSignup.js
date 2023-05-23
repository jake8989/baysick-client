import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Password } from '@mui/icons-material';
import { useAuthContext } from './useAuthContext';
import { responsiveFontSizes } from '@mui/material';
import useLogin from './useLogin';
// const env = require('dotenv').config();
export const useSignup = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [success, setSuccess] = useState(null);
	const { dispatch } = useAuthContext();
	const signup = async (name, email, phone, password, router) => {
		setLoading(true);
		setError(null);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND}/api/users/signup`,
			{
				method: 'POST',
				// mode: 'no-cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, phone, password }),
			}
		);
		// console.log(response);
		// if (!response.ok) {
		// 	setError('Cannot do this action');
		// 	// return;
		// }
		const json = await response.json();

		console.log(json);
		if (!response.ok) {
			setLoading(true);
			console.log(json.message);
			setError(json.message);
		}
		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
			setLoading(false);
			setSuccess('ok');
			router.push('/');
		}
	};
	return { signup, loading, error, setError, success, setSuccess };
};
// export default useLogin;
