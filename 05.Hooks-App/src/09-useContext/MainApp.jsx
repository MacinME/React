import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { ContactsPage } from './ContactsPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Home Page</h1>
        <Navbar />
        <hr />

        <Routes >
          <Route path="/" element={ <LoginPage /> }  />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="contacts" element={ <ContactsPage /> } />

          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    </UserProvider>
  )
}
