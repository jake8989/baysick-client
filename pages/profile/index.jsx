import React from 'react';
import { Paper } from '@mui/material';
import { useLogout } from '@/hooks/useLogout';
import { useRouter } from 'next/router';
import {
	InputAdornment,
	IconButton,
	Theme,
	Snackbar,
	Button,
	Alert,
} from '@mui/material';
const index = () => {
	const router = useRouter();
	const { logout, isLoggedout } = useLogout();
	const logoutF = () => {
		logout(router);
	};
	return (
		<Paper>
			<h1>{'Profile Page'}</h1>
			<Button onClick={logoutF}>Logout</Button>
			{isLoggedout && (
				<Snackbar open={open} autoHideDuration={2000}>
					<Alert severity="success" sx={{ width: '100%' }}>
						Loggedout Succesfully
					</Alert>
				</Snackbar>
			)}
		</Paper>
	);
};

export default index;
