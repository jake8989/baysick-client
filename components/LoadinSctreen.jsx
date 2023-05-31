import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Typography } from '@mui/material';

const LoadinSctreen = () => {
	return (
		<section
			style={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				direction="column"
			>
				<Grid item>
					<CircularProgress thickness={4} size={60} />
				</Grid>
				<Grid item sx={{ marginTop: '2rem' }}>
					<Typography fontFamily={'cursive'} variant="h3" align="center">
						Loading...
					</Typography>
				</Grid>
			</Grid>
		</section>
	);
};

export default LoadinSctreen;
