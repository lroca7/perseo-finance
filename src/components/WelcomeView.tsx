import React from 'react';
import { useAppStore } from '../store/useAppStore';

const WelcomeView: React.FC = () => {
  const { addNotification, setCurrentView } = useAppStore();

  const handleGetStarted = () => {
    addNotification('¡Bienvenido a Perseo Finance!');
  };

  const handleAdminAccess = () => {
    setCurrentView('admin');
    addNotification('Accediendo al panel de administración');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
            <span className="text-white font-bold text-4xl">P</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Perseo</span>
            <br />
            <span className="text-gray-800">Finance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu <span className="text-primary-600 font-semibold">fondo familiar o de amigos</span> digital. 
            Ahorra juntos, presta con confianza y genera dividendos para todos los asociados.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={handleGetStarted}
            className="btn-primary text-lg px-8 py-4"
          >
            Comenzar Ahora
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Ver Demo
          </button>
        </div>

        {/* Admin Access Button */}
        <div className="mb-16">
          <button 
            onClick={handleAdminAccess}
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Acceso Administrador
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full animate-slide-up">
        <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Aportes Mensuales</h3>
          <p className="text-gray-600">Cada asociado realiza aportes mensuales que se acumulan en el fondo común, creando un capital colectivo para todos.</p>
        </div>

        <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
            <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Préstamos del Fondo</h3>
          <p className="text-gray-600">Los asociados pueden solicitar préstamos del fondo acumulado, con términos claros y transparencia total en el proceso.</p>
        </div>

        <div className="card text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Dividendos Compartidos</h3>
          <p className="text-gray-600">Los intereses generados por los préstamos se distribuyen como dividendos entre todos los asociados del fondo.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
          ¿Cómo Funciona Nuestro Fondo?
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Aportes Mensuales</h3>
            <p className="text-gray-600 text-sm">Cada asociado aporta una cantidad mensual fija al fondo común</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Acumulación</h3>
            <p className="text-gray-600 text-sm">El capital se va acumulando mes a mes, creando un fondo sólido</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Préstamos</h3>
            <p className="text-gray-600 text-sm">Los asociados pueden solicitar préstamos del fondo acumulado</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Dividendos</h3>
            <p className="text-gray-600 text-sm">Los intereses se distribuyen como dividendos entre todos</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
          Beneficios del Fondo Familiar
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Confianza Total</h3>
                <p className="text-gray-600">Entre familiares y amigos, la confianza es la base de todo. Transparencia completa en cada transacción.</p>
              </div>
            </div>
          </div>
          
          <div className="card text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Ahorro Colectivo</h3>
                <p className="text-gray-600">Juntos ahorran más. El poder del ahorro colectivo multiplica las oportunidades para todos.</p>
              </div>
            </div>
          </div>
          
          <div className="card text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Préstamos Accesibles</h3>
                <p className="text-gray-600">Acceso a préstamos sin bancos, con términos flexibles y tasas justas entre asociados.</p>
              </div>
            </div>
          </div>
          
          <div className="card text-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Rendimientos Compartidos</h3>
                <p className="text-gray-600">Todos se benefician de los intereses generados por los préstamos del fondo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto w-full">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
          <div className="text-gray-600">Transparencia</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">0%</div>
          <div className="text-gray-600">Comisiones Bancarias</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
          <div className="text-gray-600">Acceso Digital</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
          <div className="text-gray-600">Confianza Familiar</div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          ¿Listo para crear tu fondo familiar?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Únete a la nueva forma de ahorrar y crecer juntos como familia o amigos
        </p>
        <button className="btn-primary text-lg px-10 py-4">
          Crear Fondo Familiar
        </button>
      </div>
    </div>
  );
};

export default WelcomeView;
