import React, {useContext} from 'react';
import HistoryList from './HistoryList';
import { GlobalContext } from './context/GlobalState';
import './History.css';

const History = () => {

    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    
    return (
        <div className="history">
            <h3 className="history-title">HISTORY</h3>
			<div className="list">
                {
                    transactions.map(transaction => (    
                        <HistoryList key={transaction.id} id={transaction.id} name={transaction.name} amount={transaction.amount} />
                    ))
                }
			</div>
        </div>
    )
}

export default History;
