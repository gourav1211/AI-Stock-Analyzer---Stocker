// src/App.js
import React, { useEffect, useState } from "react";
import { auth } from "../auth/Firebase";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Login() {
  // State to hold the currently logged-in user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // User state will be updated automatically by the onAuthStateChanged listener
      console.log("Signed out successfully!");
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };

  // --- Google Sign-in handler ---

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider(); // Create a new Google Auth Provider instance

    try {
      await signInWithPopup(auth, provider);
      console.log("Signed in successfully with Google!");
    } catch (err) {
      // Handle specific errors here (e.g., popup closed, access denied)
      console.error("Google Sign-in error:", err);
      // You can check err.code for specific errors, e.g., 'auth/popup-closed-by-user'
    }
  };

  // --- Render UI based on auth state ---

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="card p-8 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication status...</p>
        </div>
      </div>
    ); 
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {user ? (
          // UI for logged-in users
          <div className="card p-8 text-center">
            <div className="space-y-6">
              {/* Welcome Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Welcome Message */}
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome, {user.displayName || user.email}!
                </h1>
                <p className="text-gray-600">You are successfully signed in.</p>
              </div>

              {/* Sign Out Button */}
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          // UI for users who are not logged in
          <div className="card p-8">
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome to <span className="text-gradient">Stocker</span>
                </h1>
                <p className="text-gray-600">Please sign in to continue</p>
              </div>

              {/* Google Sign-in Button */}
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md"
              >
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Continue with Google</span>
              </button>

              {/* Footer */}
              <p className="text-sm text-gray-500">
                Secure authentication powered by Google
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
// export const result = user
