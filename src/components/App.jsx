import data from '../user';
import Profile from './Profile/Profile';

export default function App(data) {
  console.log(data);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile userProfile={data} />
    </div>
  );
}
