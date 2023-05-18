// import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav1 from '@/components/Navbar';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/styles';
// import { Height } from '@mui/icons-material';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
const useStyles = makeStyles((theme) => ({
	sectionMain: {
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
			<Box
				display={'flex'}
				sx={{
					width: '100vw',
					'@media(max-width:990px)': {
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					},
				}}
				marginTop={'5rem'}
			>
				<Box
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}
					justifyContent={'center'}
					sx={{
						width: '50vw',
						'@media(max-width:990px)': {
							width: '100vw',
						},
					}}
				>
					<Typography
						letterSpacing={4}
						fontFamily={'cursive'}
						variant="h1"
						fontWeight={'900'}
						color={'#334257'}
						textAlign={'center'}
						sx={{
							userSelect: 'none',
							'@media(max-width:452px)': {
								fontSize: '65px',
							},
						}}
					>
						Bay<span style={{ color: '#476072' }}>Sick</span>
					</Typography>
					{/* <br /> */}
					<Typography
						letterSpacing={4}
						fontFamily={'cursive'}
						variant="h2"
						marginTop={'3rem'}
						fontWeight={'600'}
						color={'#334257'}
						textAlign={'center'}
						sx={{
							userSelect: 'none',
							'@media(max-width:452px)': {
								fontSize: '40px',
							},
						}}
					>
						Beyond The BASIC
					</Typography>
					<Typography
						letterSpacing={4}
						fontFamily={'cursive'}
						variant="h5"
						marginTop={'3rem'}
						fontWeight={'500'}
						color={'#334257'}
						textAlign={'center'}
						sx={{
							userSelect: 'none',
							'@media(max-width:452px)': {
								fontSize: '20px',
							},
						}}
					>
						Shop Now the Exclusive Products from BaySick
					</Typography>
					<Box>
						<Button
							sx={{ marginTop: '3rem', marginInline: '0.5rem', width: '150px' }}
							variant="contained"
						>
							Shop Now
						</Button>
						<Button
							sx={{ marginTop: '3rem', width: '100px', marginInline: '0.5rem' }}
							variant="contained"
						>
							Studio
						</Button>
					</Box>

					{/* <Typography></Typography> */}
				</Box>
				<Box
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					sx={{
						width: '50vw',
						'@media(max-width:990px)': {
							marginTop: '5rem',
							width: '100vw',
						},
					}}
				>
					{/* <h1></h1>
					 */}
					<Image src={'/shop.png'} height={'400'} width={'400'}></Image>
				</Box>
			</Box>
		</main>
	);
}
