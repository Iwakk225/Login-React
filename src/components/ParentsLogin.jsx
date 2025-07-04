// ParentsLogin.jsx
import LeftIllustration from "./LeftIllustration";
import LoginForm from "./LoginForm";

export default function ParentsLogin() {
  return (
    <div className="min-h-screen bg-[#fdf5e6] flex items-center justify-center py-10">
      <div className="bg-[#FFF2D0] rounded-lg shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border">
        <LeftIllustration />
        <LoginForm />
      </div>
    </div>
  );
}
