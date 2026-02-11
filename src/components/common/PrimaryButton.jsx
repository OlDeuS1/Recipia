function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold leading-none transition-all duration-200 hover:bg-gray-100 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
