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
import { useAddProduct } from '@/hooks/useAddProduct';
import { useRouter } from 'next/router';
import { useDeleteProduct } from '@/hooks/useAddProduct';
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

export default function DeleteProduct() {
	const router = useRouter();
	const [visible, setVisible] = React.useState(false);
	let { deleteproduct, isLoading, error, setError, success, setSuccess } =
		useDeleteProduct();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = new FormData(document.getElementById('form-data'));

		let product_id = data.get('product_id');
		console.log(product_id);
		await deleteproduct(product_id);
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
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleSubmit}
					>
						Delete Product
					</Button>
					{success && (
						<Snackbar open={open} autoHideDuration={2000}>
							<Alert severity="success" sx={{ width: '100%' }}>
								Product Deleted Succesfully
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
