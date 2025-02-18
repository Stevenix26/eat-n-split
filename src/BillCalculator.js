import { useState } from "react";

export function BillCalculator({ selectedProfile }) {

  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [person, setPerson] = useState("user");

  const billing = bill - expense;

  function handleSubmit(e) {
    e.preventDefault();
    const newBill = { bill, expense, billing, person };
    console.log(newBill);
    setBill(0);
    setExpense(0);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A Bill withs {selectedProfile.name} </h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧔‍♂️Your Expenses</label>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(Number(e.target.value))}
      />


      <label>🧑‍🤝‍👩🏻{selectedProfile.name}'s Expenses</label>
      <input type="text" disabled value={Math.abs(billing)} />

      <label>🤑 Who is paying the Bill</label>
      <select
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      >
        <option value="user">You</option>
        <option value={selectedProfile.name}>{selectedProfile.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}
