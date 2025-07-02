import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


export default function ParentsLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please include an '@' in the email address.");
      return;
    }
    setError("");
    // submit logic
  };

  return (
    <div className="min-h-screen bg-[#fdf5e6] flex items-center justify-center py-10">
      <div className="bg-[#FFF2D0] rounded-lg shadow-lg w-full max-w-6xl flex overflow-hidden border">
        {/* Left Illustration */}
        <div className="w-1/2 bg-[#A9CDD5] p-10 flex flex-col justify-center items-center">
          <img src="src/assets/image.png" alt="Illustration" className="h-110" />
        </div>

        {/* Right Form */}
        <div className="w-1/2 p-10">
          {error && (
            <div className="w-full bg-white border border-red-300 text-red-700 px-4 py-2 mb-6 rounded shadow flex items-center gap-2">
              <span className="text-xl">❗</span>
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}
          <h2 className="text-2xl font-bold mb-7 text-center">Parents Login</h2>
          <p className="text-black-600 mb-7 text-sm text-center">
            Sign in to access child consultation and scheduling services.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address*</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button
              type="submit"
              className="bg-[#C4C68A] text-black font-semibold py-2 px-4 rounded-md w-full hover:bg-[#b3ba8c] cursor-pointer"
            >
              Login
            </button>
            <p className="text-sm text-center text-black">
              Don't have account? <a href="#" className="text-green-700 font-semibold underline hover:text-black">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}