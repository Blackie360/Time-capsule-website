import  { useState, useEffect } from 'react';

const Reveal = () => {
  const [timeCapsules, setTimeCapsules] = useState([]);
  const [loading, setLoading] = useState(true);

  // Example fetch function - replace with your actual API endpoint
  useEffect(() => {
    const fetchTimeCapsules = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/time-capsules');
        const data = await response.json();
        setTimeCapsules(data);
      } catch (error) {
        console.error("Error fetching time capsules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeCapsules();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (timeCapsules.length === 0) return <p>No time capsules to reveal.</p>;

  return (
    <div className="reveal-container">
      <h2 className="text-2xl font-bold text-center mb-6">Revealed Time Capsules</h2>
      <div className="capsule-list grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {timeCapsules.map((capsule, index) => (
          <div
            key={index}
            className="capsule-item p-4 border rounded-lg bg-gray-800 text-white shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{capsule.title}</h3>
            <p className="text-sm mb-4 text-gray-400">
              Launch Date: {new Date(capsule.launchDate).toLocaleDateString()}
            </p>
            <p className="mb-4">{capsule.description}</p>
            {capsule.imageUrl && (
              <img
                src={capsule.imageUrl}
                alt={capsule.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reveal;
