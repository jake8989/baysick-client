import React from 'react';
import { Paper, Box, Typography, Link, Button } from '@mui/material';
import Nav1 from '@/components/Navbar';
import Image from 'next/image';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetProducts } from '@/hooks/useGetProducts';
import LoadinSctreen from '@/components/LoadinSctreen';
const Him = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
	const { getproducts, loading, error, setError, success, setSuccess, items } =
		useGetProducts();
	React.useEffect(() => {
		const getp = async () => {
			await getproducts();
		};
		getp();
	}, []);
	console.log('data', items);

	const [disable, setDisable] = React.useState(false);
	if (loading) {
		return <LoadinSctreen></LoadinSctreen>;
	}
	return (
		<main>
			<Nav1></Nav1>
			<ToastContainer
				position="bottom-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<Paper sx={{ paddingTop: '3rem' }}>
				{/* <h1>Hii</h1> */}
				{/* <Typography
					letterSpacing={4}
					fontFamily={'cursive'}
					variant="h2"
					marginTop={'3rem'}
					fontWeight={'600'}
					color={'#334257'}
					textAlign={'center'}
					sx={{
						userSelect: 'none',
						'@media(max-width:452px)': {
							fontSize: '40px',
						},
					}}
				>
					T-Shirts for men
				</Typography> */}
				<Box>Filters</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						paddingTop: '3rem',
					}}
				>
					{items.map((item) => (
						// <li>{item.title}</li>
						<Paper sx={{ padding: '0px', margin: '2rem' }}>
							<Box
								sx={{
									height: '440px',
									width: '240px',
									// border: '2px solid black',
									margin: '2rem',
								}}
							>
								<img
									src={`${item.img_url}`}
									height={280}
									width={240}
									alt="product_image"
								></img>
								<Typography variant="h6" fontFamily={'cursive'}>
									{item.title}
								</Typography>
								<Typography fontFamily={'cursive'}>
									Cotton Oversized Tshirt
								</Typography>
								<Typography fontSize={'12px'} fontFamily={'cursive'}>
									Sizes Available: S,M,XL,XXL
								</Typography>
								<Typography
									fontFamily={'cursive'}
									// textAlign={'left'}
									fontWeight={'bold'}
								>
									{item.price}
								</Typography>
								<Button
									sx={{ marginTop: '1rem' }}
									variant="contained"
									disabled={disable}
									onClick={() => {
										setDisable(true);
										toast.success('Product Added Succesfully in Cart', {
											position: 'bottom-left',
											autoClose: 3000,
											hideProgressBar: false,
											closeOnClick: true,
											pauseOnHover: true,
											draggable: true,
											progress: undefined,
											theme: 'light',
										});
									}}
								>
									{disable && 'Added'}
									{!disable && 'Add to Cart'}
								</Button>
								<Button sx={{ marginTop: '1rem' }}>
									<FavoriteTwoToneIcon></FavoriteTwoToneIcon>
								</Button>
							</Box>
						</Paper>
					))}
				</Box>
			</Paper>
		</main>
	);
};

export default Him;
