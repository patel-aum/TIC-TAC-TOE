import Board from './Board';
import Info from "./Info";
import "./css/app.css";

import { useState } from 'react';

function App() {

	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState('');
	const resetBoard = () => {
		setReset(true);
	}

	return (
		<div className="App">
            <h1>Tick Tac Toe Game</h1>
			<div className={`winner ${winner !== '' ? '' : 'shrink'}`}>				
				<div className='winner-text'>{winner}</div>		
				<button onClick={() => resetBoard()}>Reset Game</button>
			</div>
						<Board reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			<Info />
		</div>
	);
}

export default App;
