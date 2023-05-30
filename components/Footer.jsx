import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
	return (
		<section>
			<footer>
				<Paper>
					<Box
						display="flex"
						width="100vw"
						flexDirection={'column'}
						flexWrap={'wrap'}
					>
						<Typography
							width={'100vw'}
							textAlign={'center'}
							variant="h4"
							fontFamily={'cursive'}
						>
							BaySick T-Shirts
						</Typography>
						<Box display={'flex'} width={'100vw'} justifyContent={'center'}>
							<Box padding={'3rem'}>
								<Image
									src="/next.svg"
									height={100}
									width={200}
									alt="Logo_img"
								></Image>
							</Box>
							<Box padding={'3rem'}>
								<Typography>Home</Typography>
								<Typography>Products</Typography>
								<Typography>Links</Typography>
								<Typography>Live</Typography>
								<Typography>Studio</Typography>
							</Box>
							<Box padding={'3rem'}>
								<Typography>Profile</Typography>
								<Typography>Cart</Typography>
								<Typography>Profile</Typography>
							</Box>
							<Box padding={'3rem'}>
								<Typography>Contact</Typography>
								<Typography>BaySick T-Shirt's Corp. </Typography>
								<Typography>Phone: 9999999999</Typography>
								<Typography>Address</Typography>
								<Typography>Kota Rajasthan 326519</Typography>
							</Box>
							<Box>
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
								</Box>
							</Box>
						</Box>
					</Box>
				</Paper>
			</footer>
		</section>
	);
};

export default Footer;
