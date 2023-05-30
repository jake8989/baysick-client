import { useState, useEffect } from 'react';
// import { env } from '@/next.config';
const usePayment = () => {
	// const [paystatus, setpaystatus] = useState(null);
	// const [loading, setLoading] = useState(false);
	// const [rzpPaymentId, setrzpPaymentId] = useState(null);
	const handleOpenRazorpay = (data, router) => {
		const options = {
			key: process.env.RAZORPAY_KEY_ID,
			amount: data.amount,
			currency: 'INR',
			name: 'BaySick',
			description: 'Transaction for t-shirts',
			order_id: data.id,
			handler: function (response) {
				console.log(response, 'usePay');
				// setrzpPaymentId(response.razorpay_payment_id);
				localStorage.removeItem('cart');
				router.push('/service/ordercompleted');
			},
			notes: {
				address: 'BaySick Corporate Office Kota',
			},
			theme: {
				color: '#334257',
			},
		};
		const rzp = new window.Razorpay(options);
		rzp.open();
	};
	const initiatePayment = async (amount, router, toast) => {
		if (amount == NaN || amount <= 0) {
			toast.error('No Products selected', {
				position: 'bottom-left',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
			router.push('/');
		}
		try {
			// setLoading(true);
			const tpId = '9090';
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND}/api/payment/orders`,
				{
					method: 'POST',
					// mode: 'no-cors',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ amount, tpId }),
				}
			);
			const data = await response.json();
			// setProducts(data);
			// console.log(data.data, 'At payment');
			handleOpenRazorpay(data.data, router);
			if (response.ok) {
				// setLoading(false);
				// console.log(' Further step');
			}
		} catch (error) {
			// setLoading(false);
			console.error('Error fetching products:', error);
		}
	};

	// initiatePayment(amount);
	return { initiatePayment };
};

export default usePayment;
