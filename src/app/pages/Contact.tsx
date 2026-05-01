interface ContactProps {
  language: string;
}

const translations = {
  en: {
    title: 'Get in Touch',
    subtitle: 'Schedule a free consultation and placement test',
    formTitle: 'Send us a message',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    languageInterest: 'Language of Interest',
    message: 'Message',
    send: 'Send Message',
    select: 'Select a language',
    spanish: 'Spanish',
    french: 'French',
    german: 'German',
    italian: 'Italian',
    infoTitle: 'Contact Information',
    addressLabel: 'Address',
    address: '123 Language Street, Sofia, Bulgaria',
    phoneLabel: 'Phone',
    phoneNumber: '+359 2 123 4567',
    emailLabel: 'Email',
    emailAddress: 'info@languagecenter.bg',
    hoursLabel: 'Hours',
    hours: 'Mon-Fri: 9am-7pm, Sat: 10am-4pm',
  },
  bg: {
    title: 'Свържете се с нас',
    subtitle: 'Запазете безплатна консултация и тест за ниво',
    formTitle: 'Изпратете ни съобщение',
    name: 'Име',
    email: 'Имейл',
    phone: 'Телефон',
    languageInterest: 'Интересуващ език',
    message: 'Съобщение',
    send: 'Изпрати',
    select: 'Изберете език',
    spanish: 'Испански',
    french: 'Френски',
    german: 'Немски',
    italian: 'Италиански',
    infoTitle: 'Информация за контакт',
    addressLabel: 'Адрес',
    address: 'ул. Език 123, София, България',
    phoneLabel: 'Телефон',
    phoneNumber: '+359 2 123 4567',
    emailLabel: 'Имейл',
    emailAddress: 'info@languagecenter.bg',
    hoursLabel: 'Работно време',
    hours: 'Пон-Пет: 9:00-19:00, Съб: 10:00-16:00',
  },
  ru: {
    title: 'Свяжитесь с нами',
    subtitle: 'Запишитесь на бесплатную консультацию и тест на уровень',
    formTitle: 'Отправьте нам сообщение',
    name: 'Имя',
    email: 'Эл. почта',
    phone: 'Телефон',
    languageInterest: 'Интересующий язык',
    message: 'Сообщение',
    send: 'Отправить',
    select: 'Выберите язык',
    spanish: 'Испанский',
    french: 'Французский',
    german: 'Немецкий',
    italian: 'Итальянский',
    infoTitle: 'Контактная информация',
    addressLabel: 'Адрес',
    address: 'ул. Язык 123, София, Болгария',
    phoneLabel: 'Телефон',
    phoneNumber: '+359 2 123 4567',
    emailLabel: 'Эл. почта',
    emailAddress: 'info@languagecenter.bg',
    hoursLabel: 'Часы работы',
    hours: 'Пн-Пт: 9:00-19:00, Сб: 10:00-16:00',
  },
};

export default function Contact({ language }: ContactProps) {
  const t = translations[language as keyof typeof translations];

  return (
    <div className="py-24 px-6 min-h-screen bg-gradient-to-b from-peach-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl mb-4 text-gray-800 font-light">
            {t.title}
          </h1>
          <p className="text-lg text-gray-600 font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <h2 className="text-2xl mb-6 text-gray-800 font-light">{t.formTitle}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">{t.name}</label>
                <input
                  type="text"
                  className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">{t.email}</label>
                <input
                  type="email"
                  className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">{t.phone}</label>
                <input
                  type="tel"
                  className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">{t.languageInterest}</label>
                <select className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 bg-gray-50">
                  <option>{t.select}</option>
                  <option>{t.spanish}</option>
                  <option>{t.french}</option>
                  <option>{t.german}</option>
                  <option>{t.italian}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-700">{t.message}</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 bg-gray-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-400 hover:bg-rose-500 text-white py-4 rounded-2xl transition-all shadow-sm hover:shadow-md font-medium"
              >
                {t.send}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-sm mb-6">
              <h2 className="text-2xl mb-6 text-gray-800 font-light">{t.infoTitle}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t.addressLabel}</h3>
                  <p className="text-gray-600 font-light">{t.address}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t.phoneLabel}</h3>
                  <p className="text-gray-600 font-light">{t.phoneNumber}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t.emailLabel}</h3>
                  <p className="text-gray-600 font-light">{t.emailAddress}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">{t.hoursLabel}</h3>
                  <p className="text-gray-600 font-light">{t.hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-peach-100 p-8 rounded-3xl">
              <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
