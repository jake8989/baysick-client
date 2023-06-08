// import React from 'react';
import Nav1 from '@/components/Navbar';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
	Box,
	Container,
	Paper,
	TableContainer,
	TableBody,
	Table,
	TableRow,
	TableHead,
	TableCell,
	Button,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import usePayment from '@/hooks/usePayment';
import { loadRazorpayScript } from '../../utils/loadScript';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
const Checkout = ({ cart, subTotal }) => {
	const router = useRouter();
	const user = useContext(AuthContext);
	console.log(user, 'user');

	useEffect(() => {
		if (Object.keys(cart).length === 0) {
			router.push('/products/cart');
		}
		const loadScript = async () => {
			try {
				await loadRazorpayScript();
				console.log('Razorpay script loaded');
			} catch (error) {
				console.error('Error loading Razorpay script:', error);
			}
		};

		loadScript();
	}, []);
	// const router = useRouter();

	const [furtherStep, setfurtherStep] = useState(false);
	const [button, setbutton] = useState(false);
	const { initiatePayment, loading } = usePayment();
	let subt = 0;
	let keys = Object.keys(cart);
	for (let i = 0; i < keys.length; i++) {
		subt += cart[keys[i]].price * cart[keys[i]].qty;
	}
	console.log(cart);
	console.log(subt);
	function validateIndianZIPCode(zipCode) {
		const zipCodePattern = /^\d{6}$/; // Regular expression pattern for a 6-digit numeric ZIP code

		return zipCodePattern.test(zipCode);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(document.getElementById('form-data'));
		let firstName = data.get('firstName');
		let lastName = data.get('lastName');
		let userAddress = data.get('address1');
		let house = data.get('house');
		let area = data.get('area');
		let city = data.get('city');
		let state = data.get('state');
		let zip = data.get('zip');
		if (
			firstName == '' ||
			lastName == '' ||
			userAddress == '' ||
			house == '' ||
			area == '' ||
			city == '' ||
			state == '' ||
			zip == ''
		) {
			alert('Input field is missing');
			return;
		}
		if (!validateIndianZIPCode(Number(zip))) {
			alert('Zip code is not valid');
			return;
		}
		setfurtherStep(true);
		setbutton(true);
	};
	const handleRazorpay = async (paymentAmount) => {
		console.log('payment intiated for ', paymentAmount);
		await initiatePayment(paymentAmount, router, toast);
	};
	return (
		<div>
			<ToastContainer />
			<Nav1></Nav1>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper
					variant="outlined"
					sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
				>
					<Typography variant="h6" gutterBottom>
						1.Shipping address
					</Typography>
					<Box component="form" id="form-data">
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="firstName"
									name="firstName"
									label="First name"
									fullWidth
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="lastName"
									name="lastName"
									label="Last name"
									fullWidth
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									id="address1"
									name="address1"
									label="Address line 1"
									fullWidth
									// autoComplete="shipping address-line1"
									variant="standard"
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="house"
									name="house"
									label="House No."
									fullWidth
									// autoComplete="shipping address-level2"
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="area"
									name="area"
									label="Area"
									fullWidth
									// autoComplete="shipping address-level2"
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="city"
									name="city"
									label="City"
									fullWidth
									// autoComplete="shipping address-level2"
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									id="state"
									name="state"
									label="State/Province/Region"
									fullWidth
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="zip"
									name="zip"
									label="Zip / Postal code"
									fullWidth
									// autoComplete="shipping postal-code"
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									id="country"
									name="country"
									label="Country"
									fullWidth
									// autoComplete="shipping country"
									variant="standard"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											color="secondary"
											name="saveAddress"
											value="yes"
										/>
									}
									label="Use this address for payment details"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									disabled={button}
									variant="contained"
									onClick={handleSubmit}
								>
									Continue
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Paper>
				{furtherStep && (
					<Box>
						<Paper
							variant="outlined"
							sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
						>
							{' '}
							<Typography variant="h6" gutterBottom>
								2.Review Cart Items
							</Typography>
							<TableContainer>
								<Table>
									<TableBody>
										{Object.keys(cart).map((k) => {
											return (
												<TableRow key={k}>
													<TableCell>{cart[k].title}</TableCell>
													<TableCell>Price: {cart[k].price}</TableCell>
													<TableCell> Quantity: {cart[k].qty}</TableCell>
													<TableCell>
														{' '}
														Total Price: {cart[k].qty * cart[k].price}
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Box>
				)}
				{furtherStep && (
					<Box>
						<Paper
							variant="outlined"
							sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
						>
							<Typography variant="h6" gutterBottom>
								3.Payment
							</Typography>
							<Typography color={'green'}>
								Delivery Charges: 0 Rupees
								<br />
								Amount To Pay: {subt} Rupees
							</Typography>
							<Button
								variant="contained"
								onClick={() => {
									handleRazorpay(subt);
								}}
							>
								Pay {subt}
							</Button>
							<Typography fontSize={'10px'}>
								*Payment is Secured By RAZORPAY
							</Typography>
						</Paper>
					</Box>
				)}
			</Container>
		</div>
	);
};

export default Checkout;
