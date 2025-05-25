import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, BellIcon, HelpCircleIcon, SettingsIcon, UserCircleIcon } from 'lucide-react';
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const Header = ({
  darkMode,
  toggleDarkMode
}: HeaderProps) => {
  return <header className={`w-full py-4 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Marked</h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-indigo-600 transition-colors">
            Dashboard
          </Link>
          <Link to="/settings" className="font-medium hover:text-indigo-600 transition-colors">
            Settings
          </Link>
          <Link to="/help" className="font-medium hover:text-indigo-600 transition-colors">
            Help
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
            <BellIcon size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="hidden md:flex space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <HelpCircleIcon size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <SettingsIcon size={20} />
            </button>
          </div>
          <button className="p-1 rounded-full bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 transition-colors">
            <UserCircleIcon size={24} className="text-indigo-600 dark:text-indigo-400" />
          </button>
        </div>
      </div>
    </header>;
};
export default Header;