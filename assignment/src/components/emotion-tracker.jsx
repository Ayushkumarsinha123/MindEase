import { useState } from "react";

export default function MoodInput() {
  const [mood, setMood] = useState("");
  const [emoji, setEmoji] = useState("");

  const moodEmojis = {
    happy: "😊",
    sad: "😢",
    angry: "😡",
    stressed: "😰",
    calm: "😌",
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setMood(value);
    setEmoji(moodEmojis[value] || "❓"); // Show ❓ if mood not found
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        placeholder="How do you feel?"
        className="p-3 border-2 border-gray-300 rounded-lg w-72 text-center text-lg"
        value={mood}
        onChange={handleInputChange}
      />
      <div className="text-5xl mt-4">{emoji}</div>
    </div>
  );
}
