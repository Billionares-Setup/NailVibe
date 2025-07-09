interface Service {
  name: string;
  description: Description[];
  notes?: string;
}

interface Description {
  title: string;
  price: number | string;
}

const ServiceCard = ({ name, description, notes }: Service) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-md h-[35em] p-6 sm:p-8 bg-white border border-gray-300 rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[103%] hover:shadow-2xl hover:ring-2 hover:ring-yellow-400/50 hover:-translate-y-1 overflow-hidden">
        {/* Title */}
        <h3 className="text-2xl font-bold text-indigo-900 uppercase tracking-wide">
          {name}
        </h3>

        {/* Service Items */}
        <ul className="mt-6 space-y-4 text-sm text-gray-800 sm:mt-8">
          {description.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <p className="font-medium">{item.title}</p>
              <p className="w-12 text-right text-indigo-700 bg-indigo-100 px-3 py-1 rounded-md shadow-sm transition-colors duration-200">
                ${item.price}
              </p>
            </li>
          ))}

          {/* Notes */}
          {notes && (
            <li className="pt-6 text-sm italic text-gray-500 border-t border-gray-200">
              Note*: <span className="not-italic">{notes}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
