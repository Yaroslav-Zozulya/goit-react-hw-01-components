import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.online : s.offline}></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
