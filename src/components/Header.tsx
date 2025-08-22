import React from 'react';
import { useAppStore } from '../store/useAppStore';

const Header: React.FC = () => {
  const { theme, toggleTheme, isAuthenticated, user, currentView, setCurrentView } = useAppStore();

  const handleNavigation = (view: 'welcome' | 'admin' | 'associates') => {
    setCurrentView(view);
  };

  return (
    <header className="glass-effect sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient">Perseo Finance</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('welcome')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium ${
                currentView === 'welcome' ? 'text-primary-600 dark:text-primary-400' : ''
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavigation('admin')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium ${
                currentView === 'admin' ? 'text-primary-600 dark:text-primary-400' : ''
              }`}
            >
              Administración
            </button>
            <button
              onClick={() => handleNavigation('associates')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium ${
                currentView === 'associates' ? 'text-primary-600 dark:text-primary-400' : ''
              }`}
            >
              Asociados
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 dark:text-gray-300">Hola, {user?.name}</span>
                <button className="btn-secondary text-sm py-2 px-4">
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button className="btn-secondary text-sm py-2 px-4">
                  Iniciar Sesión
                </button>
                <button className="btn-primary text-sm py-2 px-4">
                  Registrarse
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
