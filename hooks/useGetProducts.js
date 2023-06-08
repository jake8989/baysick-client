import { useState, useEffect } from 'react';

const useGetProduct = () => {
	const [productsForMen, setproductsForMen] = useState([]);
	const [productsForWomen, setproductsForWomen] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND}/api/products/products`
				);
				const data = await response.json();
				//
				let d1 = [];
				let d2 = [];
				data.forEach((element) => {
					console.log(element);
					if (element.type.includes('girl')) {
						d2.push(element);
					} else {
						d1.push(element);
					}
				});
				console.log(d1, d2);
				setproductsForMen(d1);
				setproductsForWomen(d2);
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

	return { productsForMen, productsForWomen, loading };
};

export default useGetProduct;
