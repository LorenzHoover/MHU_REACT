import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';
import Footer from './components/Footer'; // Import the Footer component
import AboutUs from './components/AboutUs'; // Import the About Us component
import MissionStatement from './components/MissionStatement'; // Import the Mission Statement component
import Carousel from './components/Carousel'; // Import the Carousel component
import ContactUs from './components/ContactUs'; // Import the Contact Us component
import PrivacyPolicy from './components/PrivacyPolicy'; // Import the Privacy Policy component
import { supabase } from './supabase/supabaseClient';
import Auth from './Auth';
import Spinner from './components/Spinner'; // Import the Spinner component

const App = () => {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if there is an existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false); // Stop loading after session check
    });

    // Listen for changes in the authentication state
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('Error logging out:', error.message);
    } else {
      setSession(null); // Clear the session state
    }
  };

  if (isLoading) {
    return <Spinner size={12} color="#f2ae00" borderSize={4} />; // Replace loading text with Spinner
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {!session ? <Auth /> :
          <>
            <Navbar isLoggedIn={true} onLogout={handleLogout} />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero /> {/* MHU Study Lion Section */}
                      <Carousel /> {/* Carousel */}
                      <MissionStatement /> {/* Mission Statement section */}
                      <ContactUs /> {/* Contact Us section */}
                    </>
                  }
                />
                <Route path="/view-all-classes" element={<ViewAllClasses />} />
                <Route path="/class/:classId" element={<ClassDetail />} />
                <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy route */}
                <Route
                  path="*"
                  element={<div className="text-center p-6">404: Page Not Found</div>}
                />
              </Routes>
            </main>
            <Footer /> {/* Footer component */}
          </>
        }
      </div>
    </Router>
  );
};

export default App;
