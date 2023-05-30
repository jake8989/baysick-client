import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
export const useGetProducts = () => {
	// console.log('user');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const [items, setItems] = useState(null);
	const user = useContext(AuthContext);
	// const token = user.user.token;
	let data;
	const token = 'not able to solve this err at this moment';
	const getproducts = async () => {
		setLoading(true);
		setError(null);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND}/api/products/products`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			}
		);
		const json = await response.json();
		// data = json;
		// console.log('data', data);
		setItems(json);
		if (!response.ok) {
			setLoading(false);
			console.log(json.message);
			setError(json.message);
		}
		if (response.ok) {
			setLoading(false);
			setSuccess('ok');
		}
	};
	return { getproducts, loading, error, setError, success, setSuccess, items };
};
