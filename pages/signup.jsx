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

var emailValidator = require('email-validator');
import { useRouter } from 'next/router';
import { useSignup } from '@/hooks/useSignup';
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

export default function SignUp() {
	const router = useRouter();
	const [visible, setVisible] = React.useState(false);
	let { signup, isLoading, error, setError, success, setSuccess } = useSignup();
	const handleShowPassword = () => {
		setVisible(!visible);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		const data = new FormData(document.getElementById('form-data'));

		let name = data.get('name');
		let email = data.get('email');
		let password = data.get('password');
		let confirmpassword = data.get('confirmpassword');
		let phone = data.get('phone');
		const validator = (name, email, password, phone) => {
			if (
				name === '' ||
				email === '' ||
				password === '' ||
				phone === '' ||
				confirmpassword === ''
			) {
				alert('please provide valid input fields');
				return 0;
			}
			if (password !== confirmpassword) {
				alert('password and confirm password does not matches');
				return 0;
			}
			if (!email.includes('@')) {
				alert('please provide valid email field');
				return 0;
			}
			if (!emailValidator.validate(email)) {
				alert('Email Provided by you is not validate');
				return 0;
			}
			if (phone === NaN || phone.length !== 10) {
				alert('please provide valid phone field');
				return 0;
			}
			console.log(email);
			return 1;
		};
		if (!validator(name, email, password, phone)) {
			return;
		}
		await signup(name, email, phone, password, router);
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
				<Avatar sx={{ background: '#334257' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>

				<Box component="form" id="form-data" sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="name"
								label="Full Name"
								name="name"
								// autoComplete="email"
							/>
						</Grid>

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
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="confirmpassword"
								label="Confirm Password"
								type="password"
								id="confirmpassword"

								// autoComplete="new-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="Remember Me"
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
						Sign Up
					</Button>
					{success && (
						<Snackbar open={open} autoHideDuration={2000}>
							<Alert severity="success" sx={{ width: '100%' }}>
								Account Created Succesfully
							</Alert>
						</Snackbar>
					)}
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button
								onClick={() => {
									router.push('/login');
								}}
								variant="body2"
							>
								Already have an account? Sign in
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
}
