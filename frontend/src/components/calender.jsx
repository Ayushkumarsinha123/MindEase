import { useState } from "react";
import { format } from "date-fns";

const motivationalQuotes = [
  "Believe in yourself! You are stronger than you think. 💪",
  "Every day is a fresh start. Keep moving forward. 🚀",
  "You are capable of amazing things. Keep going! 🌟",
  "Difficult roads often lead to beautiful destinations. 🛤️",
  "Progress, not perfection. Keep striving. 🌱"
];

function CalendarStreak() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [quote, setQuote] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
      <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(30)].map((_, i) => {
          const date = format(new Date(2025, 2, i + 1), "MMM d"); 
          return (
            <button
              key={i}
              onClick={() => handleDateClick(date)}
              className="w-10 h-10 bg-green-100 hover:bg-green-200 text-gray-700 font-medium rounded-lg"
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 p-4 bg-green-100 text-gray-700 rounded-lg shadow">
          <h4 className="font-semibold">Daily Motivation for {selectedDate}:</h4>
          <p className="mt-2">{quote}</p>
        </div>
      )}
    </div>
  );
}

export default CalendarStreak;
