import React from 'react';
import './Card.css';
import logo from '../../images/logo.svg';
import arrow from '../../images/arrow.svg';
import rocket from '../../images/rocket.svg';
import coins from '../../images/coins.svg';
import qrcode from '../../images/qrcode.svg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

function Card(props) {
	// const Item = styled(Paper)(({ theme }) => ({
	// 	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	// 	...theme.typography.body2,
	// 	padding: theme.spacing(1),
	// 	textAlign: 'center',
	// 	color: theme.palette.text.secondary,
	// }));
	const currentPrice = props.price;
	const matches = useMediaQuery('(min-width:900px)');
	const mobile = useMediaQuery('(max-width:600px)');

	return (
		<div className="card_mainContainer">
			<Grid container justifyContent="space-between" rowSpacing={0.8}>
				<Grid item xs={12} direction="row" container justifyContent="flex-start" alignItems="center">
					<Box
						component="img"
						sx={{
							height: 50,
							width: 300,
							// maxHeight: { xs: 233, md: 167 },
							// maxWidth: { xs: 350, md: 250 },
							color: 'primary',
						}}
						alt="logo"
						src={logo}
					/>
				</Grid>
				<Grid item xs={3} direction="row" container justifyContent="center" alignItems="flex-end">
					<Box
						component="img"
						sx={{
							// height: 200,
							width: '11vw',
							// maxHeight: { xs: 233, md: 167 },
							// maxWidth: { xs: 350, md: 250 },
							color: 'primary',
						}}
						alt="rocket"
						src={rocket}
					/>
				</Grid>
				<Grid item xs={6} direction="row" justifyContent="flex-start" alignItems="center">
					<Grid item xs={12} direction="row" container justifyContent="center" alignItems="center">
						<Typography variant="h3" color="#ffffff">
							BTCUSDT
						</Typography>
					</Grid>
					<Grid item xs={12} direction="row" container justifyContent="center" alignItems="center">
						<Box
							component="img"
							sx={{
								height: 50,
								width: 50,
								maxHeight: { xs: 233, md: 167 },
								maxWidth: { xs: 350, md: 250 },
								color: 'primary',
							}}
							alt="arrow-up"
							src={arrow}
						/>
						<Typography variant={mobile ? 'h3' : 'h1'} color="primary">
							+144.57%
						</Typography>
					</Grid>
					<Grid item xs={12} direction="row" container justifyContent="center" alignItems="center">
						<Typography variant="h6" color="primary">
							LONG <span className="verticalLine" /> 20x
						</Typography>
					</Grid>
					<Grid item xs={12} direction="row" container justifyContent="center" alignItems="center">
						<Grid item xs={12} direction="row" container justifyContent="center" alignItems="center">
							<Typography variant={mobile ? 'p' : 'h6'} color="#ffffff">
								Last Price <span className="verticalLine" /> Mark Price
							</Typography>
						</Grid>
						<Grid item xs={12} direction="row" container justifyContent="center" alignItems="center">
							<Typography variant={mobile ? 'p' : 'h6'} color="secondary">
								${currentPrice} <span className="verticalLine" /> $16500.00
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={3} direction="row" container justifyContent="center" alignItems="center">
					{matches && (
						<Box
							component="img"
							sx={{
								// height: 300,
								width: '20vw',
								// maxHeight: { xs: 233, md: 167 },
								// maxWidth: { xs: 350, md: 250 },
								color: 'primary',
							}}
							alt="coins"
							src={coins}
						/>
					)}
				</Grid>

				<Grid item xs={12} direction="row" container justifyContent="flex-start" alignItems="center">
					<Grid
						item
						xs={12}
						direction="row"
						container
						justifyContent={matches ? 'flex-end' : 'center'}
						alignItems="center"
					>
						<Typography variant="p" color="#ffffff">
							Scan QR code to know more about
						</Typography>
						<Typography variant="p" color="secondary">
							DENSITY.
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						direction="row"
						container
						justifyContent={matches ? 'flex-end' : 'center'}
						alignItems="center"
					>
						<Box
							component="img"
							sx={{
								height: 200,
								width: 300,
								// maxHeight: { xs: 233, md: 167 },
								// maxWidth: { xs: 350, md: 250 },
								color: 'primary',
							}}
							alt="qr code"
							src={qrcode}
						/>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Card;
