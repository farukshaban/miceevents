// src/components/Header.jsx
export default function Header() {
    return (
      <header className="w-full px-6 py-4 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Medusa Audio Rentals</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-accent transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-accent transition">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-accent transition">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  