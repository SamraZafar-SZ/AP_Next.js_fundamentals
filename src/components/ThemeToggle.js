import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
