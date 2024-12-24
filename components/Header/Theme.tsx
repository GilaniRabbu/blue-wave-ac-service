import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Settings, Moon, Sun } from "lucide-react";

const ThemeModePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const togglePanel = () => setIsOpen(!isOpen);

  const selectTheme = (mode: string) => {
    if (
      (mode === "dark" && theme === "light") ||
      (mode === "light" && theme === "dark")
    ) {
      toggleTheme();
    }
  };

  return (
    <div className="relative h-screen">
      <button
        onClick={togglePanel}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 
                   border border-gray-200 dark:border-gray-700 rounded-lg p-2.5 
                   cursor-pointer z-50 shadow-md"
      >
        <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-800 
                    shadow-lg border-l border-gray-200 dark:border-gray-700 
                    transition-transform duration-300 z-50
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Theme Mode
          </h3>
        </div>

        <div className="p-4 flex gap-4">
          <button
            onClick={() => selectTheme("dark")}
            className={`flex justify-center items-center w-16 h-16 rounded-lg
                       border border-gray-200 dark:border-gray-700 transition-colors
                       ${
                         theme === "dark"
                           ? "bg-gray-100 dark:bg-gray-700"
                           : "bg-white dark:bg-gray-800"
                       }`}
          >
            <Moon
              className={`w-6 h-6 ${
                theme === "dark"
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            />
          </button>

          <button
            onClick={() => selectTheme("light")}
            className={`flex justify-center items-center w-16 h-16 rounded-lg
                       border border-gray-200 dark:border-gray-700 transition-colors
                       ${
                         theme === "light"
                           ? "bg-gray-100 dark:bg-gray-700"
                           : "bg-white dark:bg-gray-800"
                       }`}
          >
            <Sun
              className={`w-6 h-6 ${
                theme === "light"
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div onClick={togglePanel} className="fixed inset-0 bg-black/30 z-40" />
      )}
    </div>
  );
};

export default ThemeModePanel;
