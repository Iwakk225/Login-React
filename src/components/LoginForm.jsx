// LoginForm.jsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import InlineAlert from "./InlineAlert";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailError("Please include an '@' in the email address.");
      return;
    }
    setEmailError("");
    // lanjutkan proses login
  };

  return (
    <div className="w-full p-10 flex flex-col gap-6">
      <InlineAlert message={emailError} />

      <h2 className="text-2xl font-bold text-center">Parents Login</h2>
      <p className="text-black-600 text-sm text-center">
        Sign in to access child consultation and scheduling services.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            placeholder="yourmail@gmail.com"
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <span className="text-xs text-black-500 italic">Email must be using @.</span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <a href="#" className="text-xs text-black-500 hover:underline mt-1 inline-block italic">
            Forgot your password?
          </a>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#C4C68A] text-black font-bold py-3 px-7 rounded-md w-[40%] hover:bg-[#b3ba8c] cursor-pointer"
          >
            Login
          </button>
        </div>

        <p className="text-sm text-center text-black">
          Don't have account?{" "}
          <a href="#" className="text-green-700 font-semibold underline hover:text-black">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}