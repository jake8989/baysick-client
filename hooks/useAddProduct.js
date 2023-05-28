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
	// const token = user.user.token;
	const token = 'not able to solve this err at this moment';
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
			setLoading(false);
			setSuccess('ok');
			// router.push('/');
		}
	};
	return { addproduct, loading, error, setError, success, setSuccess };
};
export const useDeleteProduct = () => {
	// console.log('user');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const user = useContext(AuthContext);
	// const token = user.user.token;
	const token = 'not able to solve this err at this moment';
	const deleteproduct = async (product_id) => {
		setLoading(true);
		setError(null);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND}/api/products/delete-product`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					product_id,
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
			setLoading(false);
			setSuccess('ok');
		}
	};
	return { deleteproduct, loading, error, setError, success, setSuccess };
};
export const useUpdateProduct = () => {
	// console.log('user');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const user = useContext(AuthContext);
	// const token = user.user.token;
	const token = 'not able to solve this err at this moment';
	const updateproduct = async (
		product_id,
		type,
		img_url,
		title,
		price,
		sizes,
		offer,
		product_color,
		discription,
		views_img
	) => {
		setLoading(true);
		setError(null);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND}/api/products/update-product`,
			{
				method: 'PUT',
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
					views_img,
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
			setLoading(false);
			setSuccess('ok');
		}
	};
	return { updateproduct, loading, error, setError, success, setSuccess };
};
export const useGetProducts = () => {
	// console.log('user');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	const user = useContext(AuthContext);
	// const token = user.user.token;
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
		console.log(json);
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
	return { getproducts, loading, error, setError, success, setSuccess };
};
