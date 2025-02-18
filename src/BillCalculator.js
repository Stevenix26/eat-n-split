import { Button } from "./ListFriend";
import { useState } from "react";
export function BillCalculator() {
  const [bill, setBill] = useState(0);
  const [expense, setExpense] = useState(0);
  const [person, setPerson] = useState("user");

    const billing = bill - expense;

  function handleSubmit(e) {
    e.preventDefault();    
    const newBill = { bill, expense, billing};
    console.log(newBill);
    setBill(0);
    setExpense(0);
  }
    

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A Bill with</h2>
      <label>💰Bill value</label>
      <input type="text" value={bill} onChange={(e)=> setBill(e.target.value)}/>

      <label>🧔‍♂️Your Expenses</label>
      <input type="text" value={expense} onChange={(e)=> setExpense(e.target.value)} />

      <label>🧑‍🤝‍👩🏻Expenses</label>
      <input type="text" disabled value={billing}/>

      <label>🤑 Who is paying the Bill</label>
      <select onChange={(e)=> setPerson(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
