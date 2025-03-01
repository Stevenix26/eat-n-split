import { useState } from "react";

export function BillCalculator({ selectedProfile, onSplitBill }) {

  const [bill, setBill] = useState("");
  const [expenseUser, setExpenseUser] = useState("");
  const [person, setPerson] = useState("user");


  const billingFriend = bill ? bill - expenseUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !expenseUser)   return;// return nothing when u have mothing inputed


    onSplitBill(person === 'user' ? billingFriend : - expenseUser);
    // const newBill = { bill, expenseUser, billingFriend, person };
    // console.log(newBill);
    setBill(0);//reset
    setExpenseUser(0);
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
        value={expenseUser}
        onChange={(e) => setExpenseUser(
          Number(e.target.value) > bill ? expenseUser :
            Number(e.target.value)
        )}
      />

      <label>🧑‍🤝‍👩🏻{selectedProfile.name}'s Expenses</label>
      <input type="text" disabled value={Math.abs(billingFriend)} />

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
