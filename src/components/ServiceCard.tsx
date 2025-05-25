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
    <div className="flex justify-center shadow-lg rounded-xl">
      <div className="relative w-full max-w-2xl rounded-xl bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 border border-yellow-200 h-[30em] p-8 shadow-2xl ring-1 ring-gray-300 sm:p-10 transition-transform duration-300 ease-in-out hover:scale-[103%]">
        <h3 className="text-base font-semibold text-violet-900">
          {name.toUpperCase()}
        </h3>

        <ul className="mt-8 space-y-4 text-sm text-violet-900 sm:mt-10">
          {description.map((item, index) => (
            <li key={index} className="flex justify-between">
              <p className="text-violet-900">{item.title}</p>
              <p className="text-violet-500 hover:text-white hover:bg-violet-700 px-2 py-0.5 rounded-md transition-colors duration-200">
                ${item.price}
              </p>
            </li>
          ))}
          {notes && (
            <li className="pt-4 text-sm italic text-violet-500">
              Note*: <span className="not-italic">{notes}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
