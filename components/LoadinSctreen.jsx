import React from 'react';
// import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Typography } from '@mui/material';
// import logoCh from 'chimera-x logo black.png';
const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		zIndex: theme.zIndex.modal,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	load: {
		marginTop: theme.spacing(2),
	},
}));
const LoadinSctreen = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				direction="column"
			>
				<Grid item>
					<CircularProgress thickness={4} size={60} />
				</Grid>
				<Grid item className={classes.load}>
					<Typography variant="h3" align="center">
						Loading...
					</Typography>
				</Grid>
			</Grid>
		</section>
	);
};

export default LoadinSctreen;
