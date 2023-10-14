import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const BalanceBox = styled.div`
border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: "black";
    font-weight: bold;
    font-size: 20px;
  }
`;

const AddTransaction = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  display: flex;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  flex-direction: row;
  border-radius: 4px;
  font-weight: bold;
`;

const AddTransactionContainer = styled.div`
  font-size: 15px;
  display: ${(props) => (props.isAddTxnVisible ? "flex" : "none")};
  color: #0d1d2c;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  margin: 10px 20px;
  gap: 10px;
  & input {
    width: 90%;
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 10px 0;
  & input {
    width: unset;
    margin: 0 10px;
  }
`;

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("व्यय");

  return (
    <AddTransactionContainer isAddTxnVisible={props.isAddTxnVisible}>
      <input
        placeholder="मात्रा"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="विवरण"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="व्यय"
          name="type"
          value="व्यय"
          checked={type === "व्यय"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="व्यय">व्यय</label>
        <input
          type="radio"
          id="आय"
          name="type"
          value="आय"
          checked={type === "आय"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="आय">आय</label>
      </RadioBox>

      <AddTransaction
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        लेन-देन जोड़ें
      </AddTransaction>
    </AddTransactionContainer>
  );
};

const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        <AddTransaction onClick={() => toggleAddTXn((isVisible) => !isVisible)}>
          {isAddTxnVisible ? "रद्द करना" : "लेन-देन जोड़ें"}
        </AddTransaction>
      </BalanceBox>

      {isAddTxnVisible && (
        <AddTransactionView
          isAddTxnVisible={isAddTxnVisible}
          addTransaction={(payload) => {
            props.addTransaction(payload);
            toggleAddTXn((isVisible) => !isVisible);
          }}
        />
      )}

      <ExpenseContainer>
        <ExpenseBox isIncome={true}>
        आय<span>₹{props.income}</span>
        </ExpenseBox>
        <ExpenseBox>
        व्यय<span>₹{props.expense}</span>
        </ExpenseBox>
        <BalanceBox>
        बैलेंस्ड<span>₹{props.income - props.expense}</span>
        </BalanceBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverViewComponent;
