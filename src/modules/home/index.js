import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";
import axios from 'axios';

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0.0);
  const [income, updateIncome] = useState(0.0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "व्यय"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };

//   useEffect(() => calculateBalance(), [transactions]);
  useEffect(() => {
    const url = 'https://sheetdb.io/api/v1/6bl4if0p4iyhl--';
    const data = {
        id: 1,
        narration: 'this is sample transaction 22',
        amount:100
      };
    
      const config = {
        headers: {
          'Authorization': 'Bearer c3uamxebj27a7lqdchkgjetubgcz482plsn0eh30',
          'Content-Type': 'application/json',
        },
      };
    
      axios.post(url, data, config)
        .then((response) => {
          // Handle the response data here
          console.log('API response:', response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error('API error:', error);
        });
  }, [transactions]);
  
  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  return (
    <Container>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions?.length ? (
        <TransactionsComponent transactions={transactions} />
      ) : (
        "कोई खर्च नहीं 🤗"
      )}
    </Container>
  );
};

export default HomeComponent;
