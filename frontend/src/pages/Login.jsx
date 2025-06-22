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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
    setError(null); // Clear previous errors
    const provider = new GoogleAuthProvider(); // Create a new Google Auth Provider instance

    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result)

      console.log("Signed in successfully with Google!");
    } catch (err) {
      // Handle specific errors here (e.g., popup closed, access denied)
      setError(err.message); // Display error message
      console.error("Google Sign-in error:", err);
      // You can check err.code for specific errors, e.g., 'auth/popup-closed-by-user'
    }
  };

  // --- Render UI based on auth state ---

  if (loading) {
    return <p>Checking authentication status...</p>; // Show a loading message
  }

  return (
    <div className="App h-96 flex items-center justify-center mt-3">
      <header className="App-header">
        {user ? (
          // UI for logged-in users
          <div className="flex-row items-center justify-center">
            <h1>Welcome, {user.displayName || user.email}!</h1>{" "}
            {/* Use display name if available */}
            <p>You are signed in.</p>
            <button
              className="mt-3 border-1 px-4 py-2 rounded-4xl text-red-500 font-semibold hover:bg-red-500 hover:text-white active:scale-95 duration-75 cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            {/* Add other protected content here */}
          </div>
        ) : (
          // UI for users who are not logged in
          <div>
            <div className="flex-row items-center transform-cpu justify-center">
              <h1 className="text-2xl font-semibold transform-cpu">
                Please Sign In
              </h1>
              {/* Google Sign-in Button */}
              <div style={{ marginTop: "20px" }}>
                {" "}
                {/* Add some spacing */}
                <button
                  onClick={handleGoogleSignIn}
                  class="px-4 py-2 border flex gap-2 border-gray-700  rounded-lg text-slate-700  hover:border-slate-400 shadow-xl hover:text-slate-900  hover:shadow transition duration- cursor-pointer"
                >
                  <img
                    class="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>Login with Google</span>
                </button>
              </div>

              {/* Optionally add links to sign-up, other social logins, etc. */}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Login;
// export const result = user
