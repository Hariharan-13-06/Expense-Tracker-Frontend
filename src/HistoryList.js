import React,{ useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import './HistoryList.css';

const HistoryList = ({id, name, amount}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = amount < 0 ? '-' : '+';

    return (
        <div className="list-data">
			<h3 className="name">{name}</h3>
			<p className={amount < 0 ? 'minus' : 'plus'}>{sign}₹{Math.abs(amount).toFixed(2)}</p>
            <button className='delete-btn' onClick={() => deleteTransaction(id)}>X</button>
		</div>
    )
}

export default HistoryList;
