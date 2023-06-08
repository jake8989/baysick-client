import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';
import { ReportSharp } from '@mui/icons-material';

export const useSignup = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const { dispatch } = useAuthContext();
	const signup = async (name, email, phone, password, router) => {
		setLoading(true);
		const postData = {
			name,
			email,
			phone,
			password,
		};
		axios
			.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/users/login`, postData)
			.then((response) => {
				// Handle successful response
				console.log(response);
				if (response.status != 200) {
					// const json = response.json();
					setLoading(false);
					setError(response.data);
					console.log('notok', response.data);
				}
				if (response.status == 200) {
					localStorage.setItem('user', JSON.stringify(response.data));
					dispatch({ type: 'LOGIN', payload: response.data });
					setLoading(false);
					setSuccess('ok');
					router.push('/');
					setError(null);
				}
				console.log(response.data);
			})
			.catch((error) => {
				// Handle error
				// console.log(error.response.status);
				if (error.response && error.response.status === 400) {
					setError(error.response.data.message);
					setLoading(false);
				} else {
					setError(
						'Something went wrong! use different mobile number to continue'
					);
					setLoading(false);
					console.error(error);
				}
			});
		// try {
		// 	const response = await fetch(
		// 		`${process.env.NEXT_PUBLIC_BACKEND}/api/users/signup`,
		// 		{
		// 			method: 'POST',
		// 			// mode: 'no-cors',
		// 			headers: { 'Content-Type': 'application/json' },
		// 			body: JSON.stringify({ name, email, phone, password }),
		// 		}
		// 	);

		// 	const json = await response.json();

		// 	console.log(json);
		// 	if (!response.ok) {
		// 		setLoading(false);
		// 		console.log(json.message);
		// 		setError(json.message);
		// 		throw Error('Server not working');
		// 	}
		// 	if (response.ok) {
		// 		localStorage.setItem('user', JSON.stringify(json));
		// 		dispatch({ type: 'LOGIN', payload: json });
		// 		setLoading(false);
		// 		setSuccess('ok');
		// 		router.push('/');
		// 	}
		// } catch (error) {
		// 	console.log(error.message);
		// 	setError(error.message);
		// 	setLoading(false);
		// }
	};
	return { signup, loading, error, setError, success, setSuccess };
};
// export default useLogin;
