import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Password } from '@mui/icons-material';
import { useAuthContext } from './useAuthContext';
// const env = require('dotenv').config();
export const useSignup = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const { dispatch } = useAuthContext();
	const signup = async (name, email, phone, password, router) => {
		setLoading(true);
		setError(null);
		const response = await fetch('/api/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, phone, password }),
		});
		const json = await response.json();
		console.log(json);
		if (!response.ok) {
			setLoading(false);
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
