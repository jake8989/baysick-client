import React from 'react';
import {
	Paper,
	Box,
	Typography,
	TableContainer,
	TableBody,
	Table,
	TableRow,
	TableHead,
	TableCell,
	Button,
} from '@mui/material';
import Nav1 from '@/components/Navbar';
import Image from 'next/image';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
const Cart = ({
	cart,
	addToCart,
	removeFromCart,
	clearCart,
	subTotal,
	removeItemFromCart,
}) => {
	console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
	const router = useRouter();
	return (
		<main>
			<Nav1></Nav1>

			<TableContainer
				component={Paper}
				sx={{
					paddingTop: '4rem',
					// paddingLeft: '1rem',
				}}
			>
				<Typography fontFamily={'cursive'} textAlign={'center'} variant="h3">
					Your Cart
				</Typography>
				{Object.keys(cart).length === 0 && (
					<Typography color={'red'} fontFamily={'cursive'}>
						No Items in The Cart!{' '}
					</Typography>
				)}
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product</TableCell>
							<TableCell>Product Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{Object.keys(cart).map((k) => {
							return (
								<TableRow key={k}>
									<Image
										src={cart[k].img}
										height={100}
										width={70}
										alt="product_image"
									></Image>
									<Image
										src={cart[k].img}
										height={100}
										width={70}
										alt="product_image"
									></Image>
									<TableCell>{cart[k].title}</TableCell>
									<TableCell>{cart[k].price}</TableCell>
									<TableCell>
										<Button
											onClick={() => {
												removeFromCart(
													k,
													cart[k].price,
													cart[k].img,
													cart[k].title,
													cart[k].size,
													1,
													cart[k].color,
													'NO',
													'NO',
													'NO',
													'NO'
												);
											}}
										>
											<RemoveIcon></RemoveIcon>
										</Button>

										{cart[k].qty}
										<Button
											onClick={() => {
												addToCart(
													k,
													cart[k].price,
													cart[k].img,
													cart[k].title,
													cart[k].size,
													1,
													cart[k].color,
													'NO',
													'NO',
													'NO',
													'NO'
												);
											}}
										>
											<AddIcon></AddIcon>
										</Button>
									</TableCell>
									<TableCell>
										<Button
											onClick={() => {
												removeItemFromCart(k);
											}}
										>
											<DeleteOutlineIcon></DeleteOutlineIcon>
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				<Button sx={{ margin: '3rem' }} variant="contained" onClick={clearCart}>
					Clear Cart
				</Button>
				<Button
					sx={{ margin: '3rem' }}
					variant="contained"
					onClick={() => {
						router.push('/products/checkout');
					}}
				>
					Checkout
				</Button>
			</TableContainer>
		</main>
	);
};

export default Cart;
