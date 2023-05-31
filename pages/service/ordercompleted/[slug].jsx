import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import Nav1 from '@/components/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useContext } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import LoadinSctreen from '@/components/LoadinSctreen';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { LocalParking } from '@mui/icons-material';
// import usePayment from '@/hooks/usePayment';
import useVerifyPaymentSlug from '@/hooks/useVerifyPaymentSlug';
const Ordercompleted = () => {
	const router = useRouter();

	const user = useContext(AuthContext);
	console.log(user);
	// const { verifySlugAndEmailRoutes, err } = usePayment();
	// useEffect(() => {
	// 	if (localStorage.getItem('payee')) {
	// 		localStorage.removeItem('payee');
	// 	} else {
	// 		router.push('/cart');
	// 	}
	// }, []);
	const { slug } = router.query;
	console.log(slug);
	const { verifyPaymentId, errorSlug } = useVerifyPaymentSlug();
	useEffect(() => {
		verifyPaymentId(slug);
		console.log(errorSlug);
	}, [router.query]);

	if (!user.user) {
		return (
			<main>
				<Nav1></Nav1>
				<Typography
					textAlign={'center'}
					marginTop={'4rem'}
					variant="h5"
					fontFamily={'cursive'}
				>
					User is not Logged In Please Login to Continue
				</Typography>
				{/* <Button></Button> */}
				<Box
					display={'flex'}
					marginTop={'4rem'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Button>
						<FacebookIcon></FacebookIcon>
					</Button>
					<Button>
						<InstagramIcon></InstagramIcon>
					</Button>
					<Button>
						<TwitterIcon></TwitterIcon>
					</Button>
					<Button>
						<LinkedInIcon></LinkedInIcon>
					</Button>
					<Button>
						<YouTubeIcon></YouTubeIcon>
					</Button>
				</Box>
			</main>
		);
	}
	if (errorSlug) {
		return (
			<main>
				<Nav1></Nav1>
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
					No Order and Payment found for this order id {slug}
				</Typography>
			</main>
		);
	}
	return (
		<main>
			{/* <Paper> */}
			<Nav1></Nav1>

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
				Order and Payment has been done for order id {slug}
			</Typography>
			<Typography
				letterSpacing={4}
				fontFamily={'cursive'}
				// variant="h6"
				marginTop={'3rem'}
				fontWeight={'500'}
				color={'#334257'}
				textAlign={'center'}
				sx={{
					userSelect: 'none',
					'@media(max-width:452px)': {
						fontSize: '13px',
					},
				}}
			>
				An Email has been sent to you with billing details
			</Typography>
			<Typography
				letterSpacing={4}
				fontFamily={'cursive'}
				// variant="h6"
				marginTop={'3rem'}
				fontWeight={'500'}
				color={'#334257'}
				textAlign={'center'}
				sx={{
					userSelect: 'none',
					'@media(max-width:452px)': {
						fontSize: '13px',
					},
				}}
			>
				Keep Shopping!
			</Typography>
			{/* </Paper> */}
			<Box
				display={'flex'}
				marginTop={'4rem'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Button>
					<FacebookIcon></FacebookIcon>
				</Button>
				<Button>
					<InstagramIcon></InstagramIcon>
				</Button>
				<Button>
					<TwitterIcon></TwitterIcon>
				</Button>
				<Button>
					<LinkedInIcon></LinkedInIcon>
				</Button>
				<Button>
					<YouTubeIcon></YouTubeIcon>
				</Button>
			</Box>
		</main>
	);
};

export default Ordercompleted;
