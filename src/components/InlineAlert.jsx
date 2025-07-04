// InlineAlert.jsx
export default function InlineAlert({ message }) {
  if (!message) return null;

  return (
    <div className="w-full bg-white px-5 py-4 flex items-center justify-center gap-3 rounded-md border border-red-200">
      <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full text-white font-bold text-sm">
        !
      </div>
      <span className="text-sm font-semibold text-black text-center">
        {message}
      </span>
    </div>
  );
}
