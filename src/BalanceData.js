import React, { useContext, useState, useEffect } from 'react';
//import firebase from './firebase';
import { GlobalContext } from './context/GlobalState';

import './BalanceData.css';

const BalanceData = () => {
    const { transactions } = useContext(GlobalContext);
    const { addTransaction } = useContext(GlobalContext);
   // const [userData, setUserData] = useState([]);

   // const ref = firebase.firestore().collection('history');
    
   {/* const getHistory = () => {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setUserData([...userData, items]);
        });
        console.log(userData);
    }

    useEffect(() => {
        getHistory();
    }, []) */}

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);  

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc+=item),0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);

    const addNewUser = () => {
        const newUserData = {
            id: Math.floor(Math.random() * 1000000000),
            name: name,
            amount: +amount
        };
        setName('');
        setAmount(0);
        addTransaction(newUserData);
       // console.log(name, amount);
       // setUserData([...userData, newUserData]);
       // console.log(userData);
    }

    return (
        <div>
            <div className="balance">
				<div className="balance-amt">
					<h3>BALANCE</h3>
					<p>₹{total}</p>
				</div>
				<div className="remaining">
					<div className="income">
						<h3>INCOME</h3>
						<p>+₹{income}</p>
					</div>
					<div className="expense">
						<h3>EXPENSE</h3>
						<p>-₹{expense}</p>
					</div>
				</div>
			</div>
			<form className="form-data">
				<input className="input" type="text" name="user" value={name} onChange={ e => setName(e.target.value)} placeholder="User" />
				<input className="input" type="text" name="amount" value={amount} onChange={ e => setAmount(e.target.value)} placeholder="Amount"  />
				<button className="btn" type="button" onClick={addNewUser}>SUBMIT</button>
			</form>
        </div>
    )
}

export default BalanceData;
