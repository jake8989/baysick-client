import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';
import { ReportSharp } from '@mui/icons-material';
import { validate } from 'email-validator';

export const useSignup = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(null);
	const { dispatch } = useAuthContext();
	let emailApi = '3d02646141384850ad3e7fa3010a31f3';
	let phoneAPi = '63cdba0046644504968016ab57722134';
	console.log(emailApi, phoneAPi);
	const validateEmail = (email, setError) => {
		axios
			.get(
				`https://emailvalidation.abstractapi.com/v1/?api_key=${emailApi}&email=${email}`
			)
			.then((response) => {
				console.log(response.data);
				if (response.data.deliverability == 'DELIVERABLE') {
					return true;
				}
				// return false;
			})
			.catch((error) => {
				console.log(error);
				setError('Sorry Email services are not working');
			});
	};
	const validatePhone = (phone, setError) => {
		phone = '91' + phone;
		console.log(phone);
		axios
			.get(
				`https://phonevalidation.abstractapi.com/v1/?api_key=${phoneAPi}&phone=${phone}`
			)
			.then((response) => {
				console.log(response.data);
				if (response.data.valid) {
					return true;
				}
				return false;
			})
			.catch((error) => {
				console.log(error);

				setError('Sorry Phone services are not working');

				// return false;
			});
	};

	const signup = async (name, email, phone, password, router) => {
		setLoading(true);
		const postData = {
			name,
			email,
			phone,
			password,
		};

		// return;

		// validatePhone(phone, setError);
		// setError('Phone is not correct! please provide a valid phone number');
		// if (!validateEmail(email, setError)) {
		// 	setError('Email is not correct! please provide a valid email address');
		// 	setLoading(false);
		// 	return;
		// }
		// if (!validatePhone(phone, setError)) {
		// 	setError('phone is not correct! please provide a valid phone number');
		// 	setLoading(false);
		// 	return;
		// }

		axios
			.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/users/signup`, postData)
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
					setError('Something went wrong! Server ErRor');
					setLoading(false);
					console.error(error);
				}
			});
	};
	return { signup, loading, error, setError, success, setSuccess };
};
// export default useLogin;
