export function ListFriend({ friends, onShowBillProfile }) {
  

  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friends friend={friend} onShowBillProfile={onShowBillProfile} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

function Friends({ friend, onShowBillProfile }) {



  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      //creating three instances sceniro
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
      <Button className="button" onClick={onShowBillProfile}>Select</Button>
    </li>
  );
}

export function Button({ children }) {
  return <button cl