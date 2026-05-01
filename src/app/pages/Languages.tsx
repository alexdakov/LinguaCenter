interface LanguagesProps {
  language: string;
}

const translations = {
  en: {
    title: 'Languages We Teach',
    subtitle: 'Choose from our curated selection of popular languages',
    spanish: 'Spanish',
    spanishDesc: 'Master the world\'s second most spoken language. Perfect for travel, business, and cultural enrichment.',
    french: 'French',
    frenchDesc: 'Learn the language of romance and diplomacy. Ideal for international careers and cultural appreciation.',
    german: 'German',
    germanDesc: 'Unlock opportunities in Europe\'s strongest economy. Essential for business and academic pursuits.',
    italian: 'Italian',
    italianDesc: 'Discover the language of art, music, and cuisine. Perfect for travelers and culture enthusiasts.',
    levels: 'All Levels Available',
    levelsDesc: 'From complete beginners to advanced learners',
  },
  bg: {
    title: 'Езици, които преподаваме',
    subtitle: 'Изберете от нашата подбрана селекция от популярни езици',
    spanish: 'Испански',
    spanishDesc: 'Овладейте втория най-говорим език в света. Перфектен за пътуване, бизнес и културно обогатяване.',
    french: 'Френски',
    frenchDesc: 'Научете езика на романтиката и дипломацията. Идеален за международна кариера и културна оценка.',
    german: 'Немски',
    germanDesc: 'Отключете възможности в най-силната икономика на Европа. Основен за бизнес и академични занимания.',
    italian: 'Италиански',
    italianDesc: 'Открийте езика на изкуството, музиката и кухнята. Перфектен за пътешественици и любители на културата.',
    levels: 'Всички нива налични',
    levelsDesc: 'От начинаещи до напреднали',
  },
  ru: {
    title: 'Языки, которые мы преподаем',
    subtitle: 'Выберите из нашей тщательно подобранной коллекции популярных языков',
    spanish: 'Испанский',
    spanishDesc: 'Овладейте вторым наиболее распространенным языком в мире. Идеален для путешествий, бизнеса и культурного обогащения.',
    french: 'Французский',
    frenchDesc: 'Выучите язык романтики и дипломатии. Идеально подходит для международной карьеры и культурной оценки.',
    german: 'Немецкий',
    germanDesc: 'Откройте возможности в сильнейшей экономике Европы. Необходим для бизнеса и академических занятий.',
    italian: 'Итальянский',
    italianDesc: 'Откройте для себя язык искусства, музыки и кухни. Идеально подходит для путешественников и любителей культуры.',
    levels: 'Все уровни доступны',
    levelsDesc: 'От начинающих до продвинутых',
  },
};

export default function Languages({ language }: LanguagesProps) {
  const t = translations[language as keyof typeof translations];

  const languagesList = [
    { name: t.spanish, emoji: '🇪🇸', desc: t.spanishDesc },
    { name: t.french, emoji: '🇫🇷', desc: t.frenchDesc },
    { name: t.german, emoji: '🇩🇪', desc: t.germanDesc },
    { name: t.italian, emoji: '🇮🇹', desc: t.italianDesc },
  ];

  return (
    <div className="py-24 px-6 bg-gradient-to-b from-peach-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl mb-4 text-gray-800 font-light">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {languagesList.map((lang) => (
            <div
              key={lang.name}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl group-hover:scale-110 transition-transform">
                  {lang.emoji}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl mb-3 text-gray-800 font-light">{lang.name}</h2>
                  <p className="text-gray-600 font-light leading-relaxed">{lang.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-rose-100 to-peach-100 p-12 rounded-3xl text-center">
          <h3 className="text-3xl mb-3 text-gray-800 font-light">{t.levels}</h3>
          <p className="text-lg text-gray-600 font-light">{t.levelsDesc}</p>
        </div>
      </div>
    </div>
  );
}
