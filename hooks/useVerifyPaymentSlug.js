import { useState, useEffect } from 'react';

const useVerifyPaymentSlug = () => {
	const [errorSlug, seterrorSlug] = useState(true);
	const verifyPaymentId = async (paymentId) => {
		try {
			// setLoading(true);
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND}/api/payment/verify-payment-id`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ paymentId }),
				}
			); // Replace with your backend API endpoint
			const data = await response.json();
			if (response.ok) {
				seterrorSlug(false);
			}
			if (!response.ok) {
				seterrorSlug(true);
			}
		} catch (error) {
			// errorSlug = 'notok';
			seterrorSlug(true);
			console.error('Error fetching products:', error);
		}
	};

	return { verifyPaymentId, errorSlug };
};

export default useVerifyPaymentSlug;
