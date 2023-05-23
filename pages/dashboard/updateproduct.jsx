import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
	InputAdornment,
	IconButton,
	Theme,
	Snackbar,
	Alert,
} from '@mui/material';
// import { useAddProduct } from '@/hooks/useAddProduct';
import { useUpdateProduct } from '@/hooks/useAddProduct';
import { useRouter } from 'next/router';
function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Baysick
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

export default function UpdateProduct() {
	const router = useRouter();
	const [visible, setVisible] = React.useState(false);
	let { updateproduct, isLoading, error, setError, success, setSuccess } =
		useUpdateProduct();
	const handleShowPassword = () => {
		setVisible(!visible);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = new FormData(document.getElementById('form-data'));

		let product_id = data.get('product_id');
		let type = data.get('type');
		let img_url = data.get('img_url');
		let title = data.get('title');
		let price = data.get('price');
		let sizes = data.get('sizes').split(',');
		let offer = data.get('offer');
		let product_color = data.get('product_color').split(',');
		let discription = data.get('discription');
		let views_img = data.get('views_img').split(',');
		console.log(
			product_id,
			type,
			img_url,
			title,
			price,
			sizes,
			offer,
			product_color,
			discription,
			views_img
		);
		await updateproduct(
			product_id,
			type,
			img_url,
			title,
			price,
			sizes,
			offer,
			product_color,
			discription,
			views_img
		);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					CRUD Product's
				</Typography>

				<Box component="form" id="form-data" sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="product_id"
								label="Product Id"
								name="product_id"
								// autoComplete="email"
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="type"
								label="Type"
								name="type"
								// autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="img_url"
								label="Image URL"
								name="img_url"
								// autoComplete="Phone"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="title"
								label="title"
								id="title"
								// autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="price"
								label="Price"
								id="price"

								// autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="sizes"
								label="Size Available"
								id="sizes"

								// autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="offer"
								label="Offer Available"
								id="offer"

								// autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="product_color"
								label="Colors Available"
								id="product_color"

								// autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="discription"
								label="Discription"
								id="discription"

								// autoComplete="new-password"
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="views_img"
								label="Show Case IMG:S LINKS"
								id="views_img"

								// autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleSubmit}
					>
						Update Product
					</Button>
					{success && (
						<Snackbar open={open} autoHideDuration={2000}>
							<Alert severity="success" sx={{ width: '100%' }}>
								Product Added Succesfully
								<Button
									onClick={() => {
										setSuccess(null);
									}}
								>
									X
								</Button>
							</Alert>
						</Snackbar>
					)}
					{error && (
						<Snackbar open={open} autoHideDuration={2000}>
							<Alert severity="error" sx={{ width: '100%' }}>
								{error}
								<Button
									onClick={() => {
										setError(null);
									}}
								>
									X
								</Button>
							</Alert>
						</Snackbar>
					)}

					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button
								onClick={() => {
									router.push('/l');
								}}
								variant="body2"
							>
								Go to Home Page
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
}
