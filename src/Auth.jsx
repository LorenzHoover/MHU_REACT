import { useState } from 'react';
import { supabase } from './supabase/supabaseClient';
import ContactUs from './components/ContactUs';
import HeadLogo from './assets/images/head.svg';

export default function Example() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Determine the correct redirect URL based on the current environment
  const getRedirectUrl = () => {
    return import.meta.env.VITE_REDIRECT_URL;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.endsWith('@mhu.edu')) {
      setError('Please use an mhu.edu email address to sign in.');
    } else {
      setError('');
      try {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            redirectTo: getRedirectUrl(),
          },
        });
        if (error) throw error;
        console.log("Sign-in email sent successfully");

        // Show notification to the user
        setShowNotification(true);

        // Hide the notification after a few seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 5000); // Hide after 5 seconds
      } catch (error) {
        console.error("Error during sign-in:", error.message);
        setError("Sign-in failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="MHU"
            src={HeadLogo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#002D72]">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#4A4A4A]">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-[#002D72] shadow-sm ring-1 ring-inset ring-[#E0E0E0] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F2AE00] sm:text-sm sm:leading-6"
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-[#FF4136]">{error}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#002D72] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F2AE00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2AE00]"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-[#4A4A4A]">
            Not a member?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowContactForm(true); }} className="font-semibold leading-6 text-[#F2AE00] hover:text-[#D99500]">
              Contact MHU for access
            </a>
          </p>
        </div>
      </div>

      {showContactForm && <ContactUs />}

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-[#F2AE00] text-white p-4 rounded shadow-lg">
          A sign-in link has been sent to your email. Please check your inbox.
        </div>
      )}
    </>
  );
}
