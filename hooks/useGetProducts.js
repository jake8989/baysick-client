import { useState, useEffect } from 'react';

const useGetProduct = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND}/api/products/products`
				);
				const data = await response.json();
				setProducts(data);
				if (response.ok) {
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);

	return { products, loading };
};

export default useGetProduct;
