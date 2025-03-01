

export function ListFriend({ friends, onShowBillProfile, selectedProfile }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friends
            selectedProfile={selectedProfile}
            friend={friend}
            onShowBillProfile={onShowBillProfile}
            key={friend.id} /> //prop drilling
        ))}
      </ul>
    </div>
  );
}

function Friends({ friend, selectedProfile, onShowBillProfile }) {

  const isSelected =  selectedProfile?.id === friend.id;
  
  return (
    <li className= {isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* creating three instances sceniro */}

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owns you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <button className="button" onClick={() => onShowBillProfile(friend)}
      >{isSelected ? "Close" : "Select"}</button>
    </li>
  );
}


