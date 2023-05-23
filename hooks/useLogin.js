import { useState } from 'react';
// import { AuthContext } from '@/context/AuthContext';
import { Password, Troubleshoot } from '@mui/icons-material';
import { useAuthContext } from './useAuthContext';
// const env = require('dotenv').config();
// const user = useContext(AuthContext);
// console.log(user);
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useSignup } from './useSignup';
export const useLogin = () => {
	// const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const { dispatch } = useAuthContext();
	const user = useContext(AuthContext);
	// let token = user.user.token;
	console.log(user);
	const login = async (email, password, router) => {
		setLoading(true);
		setError(null);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND}/api/users/login`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${user}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			}
		);
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
	console.log(loading);
	return { login, loading, error, setError, success, setSuccess };
};
// export default useLogin;
