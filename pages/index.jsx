import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav1 from '@/components/Navbar';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/styles';
import { Height } from '@mui/icons-material';
const useStyles = makeStyles((theme) => ({
	section: {
		height: '100vh',
		// width: '100vw',
		background: 'black',
	},
}));
export default function Home() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<main>
			<Nav1></Nav1>
			<section className={classes.section}></section>
		</main>
	);
}
