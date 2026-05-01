import { Link } from 'react-router';

interface HomeProps {
  language: string;
}

const translations = {
  en: {
    heroTitle: 'Learn Languages the Right Way',
    heroSubtitle: 'Personalized instruction from native speakers',
    heroDescription: 'Our language center offers immersive learning experiences with certified native instructors. Master Spanish, French, German, or Italian through small group classes, flexible schedules, and proven teaching methods that get results.',
    heroButton: 'Start Your Journey',
    whyTitle: 'Why Choose Us',
    feature1Title: 'Native Speakers',
    feature1Desc: 'Learn from certified native instructors with years of teaching experience',
    feature2Title: 'Small Classes',
    feature2Desc: 'Maximum 6 students per class ensures personalized attention',
    feature3Title: 'Flexible Schedule',
    feature3Desc: 'Morning, evening, and weekend classes to fit your lifestyle',
    testimonialsTitle: 'Student Success Stories',
    testimonial1Text: 'The warm atmosphere and patient instructors made learning Spanish a joy. Highly recommend!',
    testimonial1Name: 'Sarah Mitchell',
    testimonial2Text: 'Small classes and native speakers - the perfect combination for real progress.',
    testimonial2Name: 'David Park',
  },
  bg: {
    heroTitle: 'Научете езици по правилния начин',
    heroSubtitle: 'Персонализирано обучение от носители на езика',
    heroDescription: 'Нашият езиков център предлага завладяващи учебни преживявания със сертифицирани носители на езика. Овладейте испански, френски, немски или италиански чрез малки групови занятия, гъвкави графици и доказани методи на преподаване, които дават резултати.',
    heroButton: 'Започнете пътуването си',
    whyTitle: 'Защо да ни изберете',
    feature1Title: 'Носители на езика',
    feature1Desc: 'Учете от сертифицирани носители с години преподавателски опит',
    feature2Title: 'Малки групи',
    feature2Desc: 'Максимум 6 студента на клас осигурява лично внимание',
    feature3Title: 'Гъвкав график',
    feature3Desc: 'Сутрешни, вечерни и уикенд занятия, които се вписват в вашия начин на живот',
    testimonialsTitle: 'Истории на успеха',
    testimonial1Text: 'Топлата атмосфера и търпеливите учители направиха изучаването на испански удоволствие.',
    testimonial1Name: 'Сара Митчъл',
    testimonial2Text: 'Малки групи и носители на езика - перфектната комбинация за реален напредък.',
    testimonial2Name: 'Дейвид Парк',
  },
  ru: {
    heroTitle: 'Учите языки правильно',
    heroSubtitle: 'Индивидуальное обучение от носителей языка',
    heroDescription: 'Наш языковой центр предлагает погружение в обучение с сертифицированными носителями языка. Овладейте испанским, французским, немецким или итальянским через занятия в малых группах, гибкие графики и проверенные методы обучения, которые дают результаты.',
    heroButton: 'Начните свой путь',
    whyTitle: 'Почему выбирают нас',
    feature1Title: 'Носители языка',
    feature1Desc: 'Учитесь у сертифицированных носителей с многолетним опытом преподавания',
    feature2Title: 'Малые группы',
    feature2Desc: 'Максимум 6 студентов в классе обеспечивает персональное внимание',
    feature3Title: 'Гибкий график',
    feature3Desc: 'Утренние, вечерние и выходные занятия для вашего образа жизни',
    testimonialsTitle: 'Истории успеха студентов',
    testimonial1Text: 'Теплая атмосфера и терпеливые преподаватели сделали изучение испанского радостью.',
    testimonial1Name: 'Сара Митчелл',
    testimonial2Text: 'Малые группы и носители языка - идеальное сочетание для реального прогресса.',
    testimonial2Name: 'Дэвид Парк',
  },
};

export default function Home({ language }: HomeProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <div>
      {/* Hero Section with Photo */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400/60 via-peach-300/50 to-amber-300/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 text-white font-light tracking-tight drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-white font-light drop-shadow-md">
            {t.heroSubtitle}
          </p>
          <p className="text-lg md:text-xl mb-10 text-white/95 font-light max-w-3xl mx-auto leading-relaxed drop-shadow">
            {t.heroDescription}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-rose-500 px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl font-medium hover:bg-rose-50"
          >
            {t.heroButton}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-peach-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center text-gray-800 font-light">
            {t.whyTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-4">
                <svg className="w-7 h-7 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-gray-800">{t.feature1Title}</h3>
              <p className="text-gray-600 font-light">{t.feature1Desc}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-4">
                <svg className="w-7 h-7 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-gray-800">{t.feature2Title}</h3>
              <p className="text-gray-600 font-light">{t.feature2Desc}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-4">
                <svg className="w-7 h-7 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-gray-800">{t.feature3Title}</h3>
              <p className="text-gray-600 font-light">{t.feature3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-rose-50 via-peach-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center text-gray-800 font-light">
            {t.testimonialsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-sm">
              <p className="text-lg mb-6 text-gray-700 font-light leading-relaxed">
                &quot;{t.testimonial1Text}&quot;
              </p>
              <p className="text-gray-800 font-medium">{t.testimonial1Name}</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-sm">
              <p className="text-lg mb-6 text-gray-700 font-light leading-relaxed">
                &quot;{t.testimonial2Text}&quot;
              </p>
              <p className="text-gray-800 font-medium">{t.testimonial2Name}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
