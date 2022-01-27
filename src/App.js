import { useContext } from 'react';
import Navigation from './components/Navigation'
import AuthContext from './store/auth-context';
import LoginForm from './components/LoginForm';

function App() {
  const auth = useContext(AuthContext)

  return (
    <>
      <Navigation />
      {!auth.isLoggedIn && <LoginForm />}
      {auth.isLoggedIn &&
        <div style={{fontSize: "20px", textAlign:"center", margin:"50px"}}>
          Chào mừng {auth.userInfo} quay trở lại.
        </div>
      }
    </>
    
  );
}

export default App;
