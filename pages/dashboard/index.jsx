import React, { useEffect } from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';
import LoadinSctreen from '@/components/LoadinSctreen';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
const Index = () => {
	const router = useRouter();
	const user = useContext(AuthContext);
	console.log(user.user);
	// console.log(user.user.user.role);
	useEffect(() => {
		if (!user.user) {
			router.push('/');
		}
	}, []);

	return (
		<Paper sx={{ minHeight: '100vh' }}>
			<h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>
			<Box>
				<Button
					onClick={() => {
						router.push('/dashboard/addproduct');
					}}
				>
					Products
				</Button>
				<Button
					onClick={() => {
						router.push('/dashboard/orders');
					}}
				>
					Orders
				</Button>
			</Box>
		</Paper>
	);
};
export default Index;
