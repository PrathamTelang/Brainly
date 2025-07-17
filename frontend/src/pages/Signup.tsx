import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function SignUp() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white overflow-hidden px-4 py-10">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(0deg,_rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] before:bg-[size:40px_40px]" />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl p-10 rounded-3xl  transition-all duration-300 shadow-[0_12px_40px_rgba(255,51,102,0.2)]">
        <h2 className="text-4xl font-extrabold text-[#FF3366] mb-2 text-center tracking-wide">
          Create Account
        </h2>
        <p className="text-gray-400 text-center mb-6 text-sm tracking-wide">
          Start organizing your second brain today.
        </p>

        <form className="space-y-5">
          <Input placeholder="Username" onChange={() => {}} />
          <Input placeholder="Password" onChange={() => {}} />

          <Button
            variant="primary"
            text="Sign Up"
            size="lg"
            fullWidth={true}
            onClick={() => {}}
          />
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/signin" className="text-[#FF3366] font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
