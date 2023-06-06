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
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
// import { useSignup } from '@/hooks/useLogin';
import { useLogin } from '@/hooks/useLogin';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
var emailValidator = require('email-validator');
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export default function Login() {
	const router = useRouter();
	const [visible, setVisible] = React.useState(false);
	const { login, loading, error, setError, success, setSuccess } = useLogin();
	const handleShowPassword = () => {
		setVisible(!visible);
	};
	console.log(loading);
	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = new FormData(document.getElementById('form-data'));

		let email = data.get('email');
		let password = data.get('password');

		let phone = data.get('phone');
		const validator = (email, password, phone) => {
			if (email === '' || password === '' || phone === '') {
				alert('please provide valid input fields');
				return 0;
			}

			if (!email.includes('@')) {
				alert('please provide valid email field');
				return 0;
			}
			if (!emailValidator.validate(email)) {
				alert('Email Provided by you is not validate');
			}
			if (phone === NaN || phone.length !== 10) {
				alert('please provide valid phone field');
				return 0;
			}
			return 1;
		};
		if (!validator(email, password, phone)) {
			return;
		}
		await login(email, password, router, toast);
	};

	return (
		<Container component="main" maxWidth="xs">
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
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ background: '#334257' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<Box component="form" id="form-data" sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								// autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="phone"
								label="phone"
								name="phone"
								// autoComplete="Phone"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type={visible ? 'text' : 'password'}
								id="password"
								// autoComplete="new-password"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleShowPassword}
												edge="end"
											>
												{visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleSubmit}
						disabled={loading}
					>
						{loading ? 'Loading...' : 'Login'}
					</Button>
					{success && (
						<Snackbar open={open} autoHideDuration={2000}>
							<Alert severity="success" sx={{ width: '100%' }}>
								Logged in Succesfully
							</Alert>
						</Snackbar>
					)}
					{error && (
						<Snackbar open={open} autoHideDuration={6000}>
							<Alert severity="error" sx={{ width: '100%' }}>
								{error}{' '}
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
					<Button
						onClick={() => {
							router.push('/');
						}}
					>
						Back to Home
					</Button>
					<Button
						onClick={() => {
							router.push('/signup');
						}}
					>
						Back to Signup
					</Button>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
}
