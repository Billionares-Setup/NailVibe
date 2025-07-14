import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const closedDates: { date: string; reason: string }[] = [
  //Fixed day holidays
  { date: "2025-01-01", reason: "New Year's Day - Happy New Year! 🎉" },
  { date: "2025-07-01", reason: "Canada Day - We're closed today 🇨🇦" },
  { date: "2025-08-05", reason: "Civic Holiday - Enjoy your long weekend! ☀️" },
  { date: "2025-12-25", reason: "Christmas Day - Enjoy the holidays! 🎄" },
  { date: "2025-12-26", reason: "Boxing Day - We'll reopen tomorrow!" },
  { date: "2025-12-31", reason: "New Year's Eve - See you next year! 🎆" },

  //Test day, ask Long if you want to test :)
//   { date: "2025-07-09", reason: "Test" },

  //Changes every year
  { date: "2025-05-19", reason: "Victoria Day - Closed for the holiday 🇨🇦" }, // 📝 Update yearly
  { date: "2025-04-21", reason: "Easter Monday - Closed for the holiday 🐣" },  // 📝 Update yearly
  { date: "2025-02-17", reason: "Family Day - Closed today 👨‍👩‍👧‍👦" },       // 📝 Update yearly
  { date: "2025-10-14", reason: "Thanksgiving - Closed to give thanks 🍂" },   // 📝 Update yearly
  { date: "2024-09-02", reason: "Labour Day - Closed for the long weekend 🔨" } // 📝 Update yearly
];

const ClosingNotice = () => {
  const [notice, setNotice] = useState<string | null>(null);
  const [dayString, setDayString] = useState<string>("");
  const [dateString, setDateString] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
  //Dev override: testing and stuff :)
//   const devOverride = "12-25"; // Christmas

  const today = new Date();

  //Test
//   const todayMonthDay = devOverride || `${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
  const todayMonthDay = `${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
  
  //Only for displaying
  const dayName = today.toLocaleDateString("en-CA", { weekday: "long" });
  const dateFormatted = today.toLocaleDateString("en-GB"); // outputs "DD/MM/YYYY"

  setDayString(dayName);
  setDateString(dateFormatted.slice(0, 5)); // "DD/MM"

  const match = closedDates.find(entry => {
    const [_, month, day] = entry.date.split("-");
    const entryMonthDay = `${month}-${day}`;
    return entryMonthDay === todayMonthDay;
  });

  if (match) setNotice(match.reason);
}, []);


  if (!notice || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6 relative animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          <Icon icon="mdi:close" className="text-2xl" />
        </button>

        <h2 className="text-2xl font-bold text-red-600 mb-2 text-center">
          🚫 We're Closed Today
        </h2>

        <p className="text-center text-sm mb-1 text-gray-600 dark:text-gray-400">
          {dayString}, {dateString}
        </p>

        <p className="text-center text-lg">{notice}</p>
      </div>
    </div>
  );
};

export default ClosingNotice;
