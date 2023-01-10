import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Components/auth_context';
import Navbar from './Components/Layout/Navbar';
import RegisterUser from './Components/User/RegisterUser';
import UserList from './Components/User/UserList';
import UserLogin from './Components/User/UserLogin';
import VehicleList from './Components/Vehicles/VehicleList';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route
              path='/'
              element={<VehicleList />}
            />
            <Route
              path='/users'
              element={<UserList />}
            />
            <Route
              path='/adduser'
              element={<RegisterUser />}
            />
            <Route
              path='/login'
              element={<UserLogin />}
            />
          </Routes>
        </main>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
