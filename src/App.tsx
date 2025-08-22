import React from 'react';
import WelcomeView from './components/WelcomeView';
import AdminView from './components/AdminView';
import AssociatesView from './components/AssociatesView';
import Header from './components/Header';
import NotificationSystem from './components/NotificationSystem';
import { useAppStore } from './store/useAppStore';

function App() {
  const { theme, toggleTheme, currentView } = useAppStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'admin':
        return <AdminView />;
      case 'associates':
        return <AssociatesView />;
      default:
        return <WelcomeView />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderCurrentView()}
      </main>
      <NotificationSystem />
    </div>
  );
}

export default App;
