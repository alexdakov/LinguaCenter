interface AboutProps {
  language: string;
}

const translations = {
  en: {
    title: 'About Us',
    subtitle: 'Connecting people through language since 2010',
    missionTitle: 'Our Mission',
    missionText: 'We believe that learning a language opens doors to new cultures, opportunities, and friendships. Our mission is to provide high-quality language education in a warm, supportive environment where every student can thrive.',
    approachTitle: 'Our Approach',
    approachText: 'We combine proven teaching methods with modern technology and cultural immersion. Our small class sizes ensure personalized attention, while our native-speaking instructors bring authentic language and culture to every lesson.',
    teamTitle: 'Expert Team',
    teamText: 'All our instructors are certified native speakers with university degrees and specialized training in language education. They bring passion, patience, and years of experience to help you achieve your language learning goals.',
    valuesTitle: 'Our Values',
    value1: 'Excellence',
    value1Desc: 'Committed to the highest teaching standards',
    value2: 'Community',
    value2Desc: 'Building connections across cultures',
    value3: 'Growth',
    value3Desc: 'Supporting every student\'s journey',
  },
  bg: {
    title: 'За нас',
    subtitle: 'Свързваме хората чрез езика от 2010 г.',
    missionTitle: 'Нашата мисия',
    missionText: 'Вярваме, че изучаването на език отваря врати към нови култури, възможности и приятелства. Нашата мисия е да предоставим висококачествено езиково образование в топла, подкрепяща среда, където всеки студент може да процъфтява.',
    approachTitle: 'Нашият подход',
    approachText: 'Комбинираме доказани методи на преподаване с модерни технологии и културно потапяне. Нашите малки класове осигуряват персонализирано внимание, докато нашите учители носители на езика внасят автентичен език и култура във всеки урок.',
    teamTitle: 'Експертен екип',
    teamText: 'Всички наши преподаватели са сертифицирани носители на езика с университетски дипломи и специализирано обучение в езиковото образование. Те внасят страст, търпение и години опит, за да ви помогнат да постигнете вашите цели за изучаване на език.',
    valuesTitle: 'Нашите ценности',
    value1: 'Съвършенство',
    value1Desc: 'Ангажирани към най-високите стандарти на преподаване',
    value2: 'Общност',
    value2Desc: 'Изграждане на връзки между културите',
    value3: 'Растеж',
    value3Desc: 'Подкрепяме пътуването на всеки студент',
  },
  ru: {
    title: 'О нас',
    subtitle: 'Связываем людей через язык с 2010 года',
    missionTitle: 'Наша миссия',
    missionText: 'Мы верим, что изучение языка открывает двери к новым культурам, возможностям и дружбе. Наша миссия - предоставить высококачественное языковое образование в теплой, поддерживающей среде, где каждый студент может процветать.',
    approachTitle: 'Наш подход',
    approachText: 'Мы сочетаем проверенные методы обучения с современными технологиями и культурным погружением. Наши небольшие классы обеспечивают персональное внимание, а наши преподаватели-носители языка привносят аутентичный язык и культуру в каждый урок.',
    teamTitle: 'Команда экспертов',
    teamText: 'Все наши преподаватели - сертифицированные носители языка с университетскими степенями и специализированным обучением в области языкового образования. Они привносят страсть, терпение и многолетний опыт, чтобы помочь вам достичь ваших целей в изучении языка.',
    valuesTitle: 'Наши ценности',
    value1: 'Совершенство',
    value1Desc: 'Приверженность высочайшим стандартам обучения',
    value2: 'Сообщество',
    value2Desc: 'Построение связей между культурами',
    value3: 'Рост',
    value3Desc: 'Поддержка путешествия каждого студента',
  },
};

export default function About({ language }: AboutProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-br from-rose-50 via-peach-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-800 font-light">
            {t.title}
          </h1>
          <p className="text-2xl text-gray-600 font-light">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-6 text-gray-800 font-light text-center">
            {t.missionTitle}
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed text-center">
            {t.missionText}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 bg-peach-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-6 text-gray-800 font-light text-center">
            {t.approachTitle}
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed text-center">
            {t.approachText}
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-6 text-gray-800 font-light text-center">
            {t.teamTitle}
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed text-center">
            {t.teamText}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-peach-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-gray-800 font-light text-center">
            {t.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-2xl mb-3 text-gray-800">{t.value1}</h3>
              <p className="text-gray-600 font-light">{t.value1Desc}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-2xl mb-3 text-gray-800">{t.value2}</h3>
              <p className="text-gray-600 font-light">{t.value2Desc}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-2xl mb-3 text-gray-800">{t.value3}</h3>
              <p className="text-gray-600 font-light">{t.value3Desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
