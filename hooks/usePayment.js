import { useState, useEffect } from 'react';
// import { env } from '@/next.config';
const usePayment = () => {
	// const [paystatus, setpaystatus] = useState(null);
	const [err, seterr] = useState(null);
	// const [rzpPaymentId, setrzpPaymentId] = useState(null);

	const handleOpenRazorpay = (data, router) => {
		const options = {
			key: process.env.RAZORPAY_KEY_ID,
			amount: data.amount,
			currency: 'INR',
			name: 'BaySick',
			description: 'Transaction for t-shirts',
			order_id: data.id,
			handler: async function (response) {
				console.log(response, 'usePay');
				// setrzpPaymentId(response.razorpay_payment_id);
				localStorage.removeItem('cart');

				////////////////////////////
				const paymentId = response.razorpay_payment_id;
				const orderId = response.razorpay_order_id;
				const signature = response.razorpay_signature;
				try {
					const response_paid = await fetch(
						`${process.env.NEXT_PUBLIC_BACKEND}/api/payment/set-payment-id`,
						{
							method: 'POST',
							// mode: 'no-cors',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ paymentId, orderId, signature }),
						}
					);
					const json = await response_paid.json();
					if (!response_paid.ok) {
						alert('An Error Occurred!');
					}
					if (response_paid.ok) {
						router.push(`/service/ordercompleted/${paymentId}`);
					}
				} catch (error) {
					alert('An Error Occurred!');
				}

				/////////////////////////////
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
			alert('An error occurred!');
			console.error('Error fetching products:', error);
		}
	};

	return { initiatePayment };
};

export default usePayment;
