import React from 'react';
import { Paper, Box, Typography, Link, Button } from '@mui/material';
import Nav1 from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useGetProducts } from '@/hooks/useGetProducts';
import useGetProduct from '@/hooks/useGetProducts';
import LoadinSctreen from '@/components/LoadinSctreen';
const Him = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
	const { productsForMen, productsForWomen, loading } = useGetProduct();
	// console.log(products);
	const [disabledButtons, setDisabledButtons] = useState([]);

	const handleClick = (index) => {
		setDisabledButtons([...disabledButtons, index]);
	};
	// const [disable, setDisable] = React.useState(false);
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
				{/* <Box>Filters</Box> */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
						paddingTop: '3rem',
					}}
				>
					{productsForMen.map((item, index) => (
						// <li>{item.title}</li>
						<Paper sx={{ padding: '10px', margin: '1rem' }}>
							<Box
								sx={{
									height: '440px',
									width: '270px',
									// border: '2px solid black',
									margin: '1rem',
								}}
							>
								<img
									src={`${item.img_url}`}
									height={280}
									width={240}
									alt="product_image"
								></img>
								<Typography fontFamily={'cursive'} fontSize={'12px'}>
									{item.product_id}
								</Typography>
								<Typography variant="h6" fontFamily={'cursive'}>
									{item.title}
								</Typography>
								<Typography fontFamily={'cursive'}>
									Cotton Oversized Tshirt
								</Typography>
								<Typography fontSize={'12px'} fontFamily={'cursive'}>
									Sizes Available: S,M,XL
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
									disabled={disabledButtons.includes(index)}
									onClick={() => {
										handleClick(index);

										// console.log('clicked');
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
										addToCart(
											index,
											item.price,
											item.img_url,
											item.title,
											item.sizes,
											1,
											item.colors,
											'NO',
											'NO',
											'NO',
											'NO'
										);
									}}
								>
									{disabledButtons.includes(index) && 'Added'}
									{!disabledButtons.includes(index) && 'Add to Cart'}
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
