import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
   const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
  const username = usernameRef.current?.value;
  const password = passwordRef.current?.value;

  try {
    const response = await axios.post(
    BACKEND_URL + "/api/v1/signin",
    {
      username,
      password
    },
    {
     headers: {
       "Content-Type": "application/json"
      }
    }
  );
  const jwt = response.data.token;
  localStorage.setItem("token", jwt);
  navigate("/dashboard");


    alert("You have signed in");
  } catch (error) {
    console.error("Error during signin:", error);
    alert("Signin failed. Please try again.");
  }
}

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white overflow-hidden p-4">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(0deg,_rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] before:bg-[size:40px_40px]" />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-md shadow-[0_12px_40px_rgba(255,51,102,0.2)] p-8 rounded-2xl  backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-[#FF3366] mb-6 text-center">Sign In</h2>
            <p className="text-gray-400 text-center mb-6 text-sm tracking-wide">
          Start organizing your second brain today.
        </p>
        <form className="space-y-4">
          <Input reference={usernameRef} placeholder="Username" />
          <Input reference={passwordRef} placeholder="Password" />
             <Button
              variant="primary"
              text="Sign In"
              size="lg"
              onClick={() => {
                void signin(); // ✅ discard the promise to satisfy type
              }}
              fullWidth={true}
            />

        </form>

        <p className="mt-6 text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#FF3366] underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
