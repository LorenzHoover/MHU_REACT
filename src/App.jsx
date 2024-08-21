import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0, Auth0Provider } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import ClassListings from './components/ClassListings';
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';
import LoginPage from './components/LoginPage';

const App = () => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={isAuthenticated} onLogout={() => logout({ returnTo: window.location.origin })} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <Hero />
                    <HomeCards />
                    <ClassListings />
                  </>
                ) : (
                  <LoginPage onLogin={loginWithRedirect} />
                )
              }
            />
            <Route
              path="/class/:classId"
              element={
                isAuthenticated ? <ClassDetail /> : <LoginPage onLogin={loginWithRedirect} />
              }
            />
            <Route
              path="/view-all-classes"
              element={
                isAuthenticated ? <ViewAllClasses /> : <LoginPage onLogin={loginWithRedirect} />
              }
            />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white text-center py-4">
          <p>&copy; 2024 Mars Hill University. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState?.returnTo || window.location.pathname
  );
};

const AppWithAuth0 = () => (
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>
);

export default AppWithAuth0;
