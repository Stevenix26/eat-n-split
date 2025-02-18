import { ListFriend } from "./ListFriend";
import "./index.css";
import { BillCalculator } from "./BillCalculator";
import { FriendProfile } from "./FriendProfile";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;

function Main() {
  const [shows, setShows] = useState(false);
  const [friends, setFriends] = useState(initialFriends)
  const [showBillProfile, setShowBillProfile] = useState(null);


  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShows(false);
  }

  function handleShowAdd() {
    setShows((show) => !show);
  }

  function handleSelection(friend) {
    // setShowBillProfile(friend);
    setShowBillProfile((cur) => cur?.id === friend.id ? null : friend);
    setShows(false);
  }



  return (
    <>
      <div className="sidebar">
        <ListFriend
          friends={friends}
          onShowBillProfile={handleSelection}
          onFriendSelect={setFriends}
          selectedProfile={showBillProfile}
        />

        {shows && <FriendProfile onAddFriend={handleAddFriend} />}
        {shows ? (
          <button className="button" onClick={handleShowAdd}>
            close
          </button>
        ) : (
          <button className="button" onClick={handleShowAdd}>
            Add friend
          </button>
        )}
      </div>
      {showBillProfile && <BillCalculator selectedProfile={showBillProfile} />}{/*Short circuit No to show the bill*/}
    </>
  );
}
