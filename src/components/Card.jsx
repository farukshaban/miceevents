// src/components/Card.jsx
export default function Card({ title, description }) {
    return (
      <div className="bg-white p-6 rounded-md shadow-card border border-gray-200 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    );
  }
  