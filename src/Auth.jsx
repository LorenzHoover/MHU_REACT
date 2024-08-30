import { useState } from 'react';
import { supabase } from './supabase/supabaseClient';
import ContactUs from './components/ContactUs';
import HeadLogo from './assets/images/head.svg';

export default function Example() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showContactForm, setShowContactForm] = useState(false); 

  // Determine the correct redirect URL based on the current environment
  const getRedirectUrl = () => {
    const currentUrl = window.location.origin;

    if (currentUrl.includes('www.mhustudylion.com')) {
      return import.meta.env.VITE_REDIRECT_URL_PROD;
    } else if (currentUrl.includes('mhustudylion.com')) {
      return import.meta.env.VITE_REDIRECT_URL_PROD_NON_WWW;
    } else if (currentUrl.includes('mhu-react.vercel.app')) {
      return import.meta.env.VITE_REDIRECT_URL_PROD;
    } else if (currentUrl.includes('mhu-react-git-main-lorenz-hoovers-projects.vercel.app')) {
      return import.meta.env.VITE_REDIRECT_URL_GIT_MAIN;
    } else if (currentUrl.includes('mhu-react-bujkl09rq-lorenz-hoovers-projects.vercel.app')) {
      return import.meta.env.VITE_REDIRECT_URL_BUJ;
    } else if (currentUrl.includes('mhu-react-lorenz-hoovers-projects.vercel.app')) {
      return import.meta.env.VITE_REDIRECT_URL_LOR;
    } else {
      return import.meta.env.VITE_REDIRECT_URL_PROD; // Default to production
    }
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
    </>
  );
}
