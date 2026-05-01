import { Outlet, Link } from 'react-router';

interface LayoutProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const translations = {
  en: {
    home: 'Home',
    languages: 'Languages',
    about: 'About Us',
    contact: 'Contact',
    tagline: 'Your journey to fluency starts here',
  },
  bg: {
    home: 'Начало',
    languages: 'Езици',
    about: 'За нас',
    contact: 'Контакт',
    tagline: 'Вашето пътуване към свободно говорене започва тук',
  },
  ru: {
    home: 'Главная',
    languages: 'Языки',
    about: 'О нас',
    contact: 'Контакты',
    tagline: 'Ваше путешествие к свободному владению начинается здесь',
  },
};

export default function Layout({ language, setLanguage }: LayoutProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-rose-400 to-peach-400 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <span className="text-xl text-gray-800 font-light tracking-wide">Language Center</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-rose-400 transition font-light">
              {t.home}
            </Link>
            <Link to="/languages" className="text-gray-600 hover:text-rose-400 transition font-light">
              {t.languages}
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-rose-400 transition font-light">
              {t.about}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-rose-400 transition font-light">
              {t.contact}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  language === 'en' ? 'bg-rose-400 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-base">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </button>
              <button
                onClick={() => setLanguage('bg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  language === 'bg' ? 'bg-rose-400 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-base">🇧🇬</span>
                <span className="text-sm font-medium">BG</span>
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  language === 'ru' ? 'bg-rose-400 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-base">🇷🇺</span>
                <span className="text-sm font-medium">RU</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === 'en' ? 'bg-rose-400 text-white' : 'text-gray-600'
                }`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage('bg')}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === 'bg' ? 'bg-rose-400 text-white' : 'text-gray-600'
                }`}
              >
                🇧🇬
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-full transition-all ${
                  language === 'ru' ? 'bg-rose-400 text-white' : 'text-gray-600'
                }`}
              >
                🇷🇺
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 to-peach-50 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-peach-400 rounded-2xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <span className="text-xl text-gray-800 font-light">Language Center</span>
          </div>
          <p className="text-gray-600 font-light mb-6">{t.tagline}</p>
          <p className="text-sm text-gray-500">&copy; 2026 Language Center</p>
        </div>
      </footer>
    </div>
  );
}
