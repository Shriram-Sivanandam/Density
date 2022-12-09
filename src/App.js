import { React, useState, useRef } from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from './components/card/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const theme = createTheme({
	palette: {
		primary: {
			main: '#00BD84',
		},
		secondary: {
			main: '#EBFF24',
		},
		typography: {
			fontFamily: 'Overpass',
			fontWeightLight: 400,
			fontWeightRegular: 500,
		},
	},
});

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	height: '100%',
	border: '2px solid #000',
	p: 4,
};

function App() {
	const [bcPrice, setBcPrice] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
	const printRef = useRef();

	// ws.onmessage = (event) => {
	// 	let dataObject = JSON.parse(event.data);
	// 	try {
	// 		if ((dataObject.event = 'data')) {
	// 			setBcPrice(dataObject.p);
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	const handleDownloadImageJPG = async () => {
		const element = printRef.current;
		const canvas = await html2canvas(element);

		const data = canvas.toDataURL('image/jpg');
		const link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = data;
			link.download = 'Bitcoin_Card.jpg';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	};

	const handleDownloadImagePNG = async () => {
		const element = printRef.current;
		const canvas = await html2canvas(element);

		const data = canvas.toDataURL('image/png');
		const link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = data;
			link.download = 'Bitcoin_Card.png';

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(data);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Button
					variant="outlined"
					onClick={() => {
						setShowModal(true);
					}}
				>
					Open Modal
				</Button>
				{showModal && (
					<div>
						<Modal open={showModal} onClose={() => setShowModal(false)} sx={style}>
							<div>
								<div ref={printRef}>
									<Card price={parseFloat(bcPrice).toFixed(2)} />
								</div>
								<Button
									variant="contained"
									onClick={() => {
										setShowModal(false);
									}}
								>
									Close Modal
								</Button>
								<Button
									variant="contained"
									onClick={() => {
										handleDownloadImagePNG();
									}}
								>
									Download as png
								</Button>
								<Button
									variant="contained"
									onClick={() => {
										handleDownloadImageJPG();
									}}
								>
									Download as jpg
								</Button>
								{/* <button type="button" onClick={handleDownloadImage}>
									Download as png
								</button> */}
							</div>
						</Modal>
					</div>
				)}
			</div>
		</ThemeProvider>
	);
}

export default App;

{
	/* <Card price={parseFloat(bcPrice).toFixed(2)} /> */
}
