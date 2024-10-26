// src/components/Button.jsx
export default function Button({ children, targetId }) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 text-lg font-semibold bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 transition-transform transform hover:scale-105"
    >
      {children}
    </button>
  );
}
