import Profile from './Profile/Profile';
// import data from '../user.json';

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
