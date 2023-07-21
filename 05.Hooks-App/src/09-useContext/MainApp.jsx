import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { ContactsPage } from './ContactsPage';

export const MainApp = () => {
  return (
    <>
        <h1>Home Page</h1>
        <hr />

        <Routes >
          <Route path="/" element={ <LoginPage /> }  />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="contacts" element={ <ContactsPage /> } />

          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    </>
  )
}
