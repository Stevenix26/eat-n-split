import { useState } from "react";
import Buttons from "./Buttons";

export function FriendProfile({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault(); 

    if (!name || !image) return;

    const id = crypto.randomUUID();//creating a random UUID strings

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍👩🏻Friend name</label>
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌅 Image URL</label>
      <input
        className="input"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Buttons className="button">Add</Buttons>
    </form>
  );
}
