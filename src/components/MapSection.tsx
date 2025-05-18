import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Icon } from '@iconify/react';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN; // API Key is in .env

const MapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: isDarkMode
        ? "mapbox://styles/mapbox/dark-v10"
        : "mapbox://styles/mapbox/streets-v11",
      center: [-80.2778, 43.132],
      zoom: 14,
    });

    new mapboxgl.Marker().setLngLat([-80.2778, 43.132]).addTo(mapRef.current);

    return () => mapRef.current?.remove();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setStyle(
        isDarkMode
          ? "mapbox://styles/mapbox/dark-v10"
          : "mapbox://styles/mapbox/streets-v11"
      );
    }
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className="relative z-10 max-w-6xl mx-auto p-6 text-gray-800 dark:text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Visit Us</h2>
        <button
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div
          ref={mapContainerRef}
          className="relative w-full lg:w-3/5 min-h-[500px] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full lg:w-[380px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-100 dark:bg-pink-900 p-2 rounded-lg">
              <Icon icon="emojione:crown" className="text-pink-600 dark:text-pink-300 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Royal Nails & Spa</h3>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                <Icon icon="mdi:map-marker" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">161 Colborne St W</p>
                <p className="text-gray-500 dark:text-gray-400">Brantford, ON N3T 1L2</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                <Icon icon="mdi:phone" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">(519) 304-9044</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                <Icon icon="mdi:clock-outline" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Business Hours</p>
                <div className="text-gray-500 dark:text-gray-400 space-y-1">
                  <p>Mon-Fri: 9 AM - 7 PM</p>
                  <p>Saturday: 9 AM - 6 PM</p>
                  <p className="text-red-500 dark:text-red-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/Royal+Nails+And+Spa/@43.1318112,-80.2803425,16z/data=!3m1!4b1!4m6!3m5!1s0x882c68a0a6ef3a79:0xff42fc0c984bec55!8m2!3d43.1318112!4d-80.2777676!16s%2Fg%2F11b6j877qz?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg"
          >
            <Icon icon="mdi:map-outline" className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
