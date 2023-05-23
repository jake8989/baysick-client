import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import LoadinSctreen from '@/components/LoadinSctreen';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const Orders = () => {
	return (
		<Paper>
			<Typography>Admin Dashboard - Orders</Typography>;
		</Paper>
	);
};
export default Orders;
