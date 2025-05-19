import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { Icon } from "@iconify/react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN; // API Key is in .env

const MapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v11", // Use only the default style
      center: [-80.2778, 43.132],
      zoom: 14,
    });

    new mapboxgl.Marker().setLngLat([-80.2778, 43.132]).addTo(mapRef.current);

    return () => mapRef.current?.remove();
  }, []);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    // <section className=" z-10 max-w-6xl mx-auto p-6 text-gray-800 dark:text-white">
    <div
      ref={mapContainerRef}
      className="w-full h-[75vh] rounded-xl border border-gray-300 shadow-lg overflow-hidden  transition-transform duration-500 ease-out  hover:scale-[103%]"
    ></div>
  );
};

export default MapSection;
