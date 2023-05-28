import '@/styles/globals.css';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { AuthContextProvider } from '@/context/AuthContext';
const theme = createTheme({
	palette: {
		background: {
			default: '#EEEEEE',
			paper: '#EEEEEE',
		},
		primary: {
			main: '#334257',
		},
		secondary: {
			main: '#476072',
			light: '#EEEEEE',
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.primary.main,
	},
}));

export default function App({ Component, pageProps }) {
	const [cart, setCart] = React.useState({});
	const [subTotal, setsubTotal] = React.useState(0);
	const saveCartInLocal = (myCart) => {
		localStorage.setItem('cart', JSON.stringify(myCart));
		let subt = 0;
		let keys = Object.keys(cart);
		for (let i = 0; i < keys.length; i++) {
			subt += cart[keys[i]].price * cart[keys[i]].qty;
		}
		setsubTotal(subt);
		console.log(subt);
	};
	React.useEffect(() => {
		console.log('Hey i am from _app.js');
		try {
			if (localStorage.getItem('cart')) {
				setCart(JSON.parse(localStorage.getItem('cart')));
			}
		} catch (error) {
			console.log(error);
			localStorage.removeItem('cart');
		}
	}, []);
	const addToCart = (
		productId,
		price,
		img,
		title,
		size,
		qty,
		color,
		variant,
		var1,
		var2,
		var3
	) => {
		console.log('Added to cart');
		let newCart = cart;
		if (productId in cart) {
			newCart[productId].qty = cart[productId].qty + qty;
		} else {
			newCart[productId] = {
				qty: 1,
				price,
				img,
				title,
				size,
				color,
				variant,
				var1,
				var2,
				var3,
			};
		}
		console.log(newCart);
		setCart(newCart);
		saveCartInLocal(newCart);
	};
	const removeFromCart = (
		productId,
		price,
		img,
		title,
		size,
		qty,
		color,
		variant,
		var1,
		var2,
		var3
	) => {
		let newCart = cart;
		if (productId in cart) {
			newCart[productId].qty = cart[productId].qty - qty;
		}
		if (newCart[productId].qty <= 0) {
			delete newCart[productId];
		}
		setCart(newCart);
		saveCartInLocal(newCart);
	};
	const clearCart = () => {
		setCart({});
		saveCartInLocal({});
		console.log('cart has been cleared');
	};
	const removeItemFromCart = (productId) => {
		console.log('Item Deleted');
		let newCart = cart;
		delete newCart[productId];
		setCart(newCart);
		saveCartInLocal(newCart);
	};
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<Component
					cart={cart}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
					clearCart={clearCart}
					subTotal={subTotal}
					removeItemFromCart={removeItemFromCart}
					{...pageProps}
				/>
			</AuthContextProvider>
		</ThemeProvider>
	);
}
