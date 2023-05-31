import React from 'react';
import { Typography } from '@mui/material';
import Nav1 from '@/components/Navbar';
const Ep = () => {
	return (
		<main>
			<Nav1></Nav1>
			<Typography
				mt="5rem"
				textAlign={'center'}
				fontFamily={'cursive'}
				variant="h4"
			>
				payment id may be wrong or no payment id provided
			</Typography>
		</main>
	);
};

export default Ep;
