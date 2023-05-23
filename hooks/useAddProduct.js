import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Password } from '@mui/icons-material';
// import { useAuthContext } from './useAuthContext';
// const env = require('dotenv').config();
import { useContext } from 'react';
// import { AuthContext } from '@/context/AuthContext';
export const useAddProduct = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const user = useContext(AuthContext);
	const token = user.user.token;
	const addproduct = async (
		product_id,
		type,
		img_url,
		title,
		price,
		sizes,
		offer,
		product_color,
		discription,
		manufacturer,
		views_img,
		rating
	) => {
		setLoading(true);
		setError(null);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND}/api/products/add-product`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					product_id,
					type,
					img_url,
					title,
					price,
					sizes,
					offer,
					product_color,
					discription,
					manufacturer,
					views_img,
					rating,
				}),
			}
		);
		const json = await response.json();
		console.log(json);
		if (!response.ok) {
			setLoading(false);
			console.log(json.message);
			setError(json.message);
		}
		if (response.ok) {
			localStorage.setItem('user', JSON.stringify(json));
			setLoading(false);
			setSuccess('ok');
			// router.push('/');
		}
	};
	return { addproduct, loading, error, setError, success, setSuccess };
};
