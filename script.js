// 1. GLOBAL STATE
let courseData = [];
let currentType = 'g'; 
let currentCurrency = 'usd';
let activeLanguage = 'all'; 
const symbols = { usd: '$', eur: '€', rub: '₽', cny: '¥' };

// 2. DATA LOADER
async function loadCatalog() {
    try {
        const response = await fetch('prices.json');
        if (!response.ok) throw new Error("JSON not found");
        const data = await response.json();
        courseData = data.languages;
        
        renderLanguageNav();
        renderCatalog();
    } catch (error) {
        console.error(error);
        const container = document.getElementById('catalog-container');
        if(container) {
            container.innerHTML = `<p class="text-center text-red-500 py-10 font-bold">Error: Use Live Server to load prices.json</p>`;
        }
    }
}

// 3. FLAG NAVIGATION (Filter Logic)
function setLanguageFilter(langTitle) {
    activeLanguage = langTitle;
    renderLanguageNav(); 
    renderCatalog();     
}

function renderLanguageNav() {
    const nav = document.getElementById('language-nav');
    if (!nav) return;

    let navHtml = `
        <button onclick="setLanguageFilter('all')" 
            class="text-xs font-bold px-4 py-1.5 rounded-full transition-all ${activeLanguage === 'all' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:text-primary'}">
            ALL
        </button>
        <span class="text-slate-200">|</span>
    `;

    navHtml += courseData.map((lang, index) => `
        <div class="flex items-center">
            <button onclick="setLanguageFilter('${lang.title}')" 
                    class="text-3xl transition-all px-2 cursor-pointer ${activeLanguage === lang.title ? 'scale-125 grayscale-0' : 'grayscale hover:grayscale-0'}">
                ${lang.flag}
            </button>
            ${index < courseData.length - 1 ? '<span class="text-slate-200 ml-4">|</span>' : ''}
        </div>
    `).join('');
    
    nav.innerHTML = navHtml;
}

// 4. TABLE GENERATOR
function renderCatalog() {
    const container = document.getElementById('catalog-container');
    if (!container) return;
    container.innerHTML = ''; 

    const filteredData = activeLanguage === 'all' 
        ? courseData 
        : courseData.filter(l => l.title === activeLanguage);

    filteredData.forEach(lang => {
        const section = document.createElement('div');
        section.className = 'space-y-8 mb-16 opacity-0 animate-[fadeIn_0.4s_ease-in-out_forwards]';
        
        section.innerHTML = `
            <div class="flex items-center gap-4 border-l-4 border-primary pl-6">
                <div class="text-4xl">${lang.flag}</div>
                <div>
                    <h3 class="text-2xl font-bold text-on-surface">${lang.title}</h3>
                    <p class="text-slate-500 mt-1">${lang.desc || ''}</p>
                </div>
            </div>
            <div class="overflow-x-auto rounded-xl border border-outline-variant/30 coral-shadow bg-white">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th class="p-5 font-semibold text-sm uppercase tracking-wider">Course</th>
                            <th class="p-5 font-semibold text-sm uppercase tracking-wider">Level</th>
                            <th class="p-5 font-semibold text-sm uppercase tracking-wider">Duration</th>
                            <th class="p-5 font-semibold text-sm uppercase tracking-wider text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody class="text-on-surface-variant">
                        ${lang.courses.map((course, idx) => {
                            const priceKey = `${currentType}_${currentCurrency}`;
                            return `
                                <tr class="${idx % 2 === 1 ? 'bg-rose-50/30' : 'bg-white'} border-b border-outline-variant/10 last:border-0">
                                    <td class="p-5 font-medium text-on-surface">${course.name}</td>
                                    <td class="p-5 text-sm">${course.level}</td>
                                    <td class="p-5 text-sm">${course.dur}</td>
                                    <td class="p-5 font-bold text-primary text-right">
                                        ${symbols[currentCurrency]}${course[priceKey]} / hr
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
        container.appendChild(section);
    });
}

// 5. FILTER CONTROLS
function toggleType() {
    currentType = (currentType === 'g') ? 'i' : 'g';
    const knob = document.getElementById('toggle-knob');
    const bg = document.getElementById('type-toggle');
    const groupLabel = document.getElementById('label-group');
    const individualLabel = document.getElementById('label-individual');

    knob.style.transform = (currentType === 'i') ? 'translateX(24px)' : 'translateX(0px)';
    bg.style.backgroundColor = (currentType === 'i') ? '#a93444' : '#64748b';
    
    if (groupLabel && individualLabel) {
        groupLabel.classList.toggle('text-primary', currentType === 'g');
        groupLabel.classList.toggle('text-slate-400', currentType === 'i');
        individualLabel.classList.toggle('text-primary', currentType === 'i');
        individualLabel.classList.toggle('text-slate-400', currentType === 'g');
    }
    renderCatalog();
}

function setCurrency(curr) {
    currentCurrency = curr;
    document.querySelectorAll('.curr-btn').forEach(btn => {
        const isActive = btn.dataset.curr === curr;
        if (isActive) {
            btn.className = "curr-btn w-10 h-10 rounded-xl text-xl font-bold transition-all bg-white shadow-md border border-rose-200 text-primary scale-110 z-10";
        } else {
            btn.className = "curr-btn w-10 h-10 rounded-xl text-xl font-bold transition-all text-slate-400 hover:text-primary hover:bg-rose-50";
        }
    });
    renderCatalog();
}

window.onload = loadCatalog;

function scrollLanguages(distance) {
  const slider = document.getElementById('languageSlider');
  if (slider) {
    slider.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }
}

// UPDATED EMAIL CLIENT (Source 1)
async function sendEmailNow() {
    const btn = document.querySelector('button[onclick="sendEmailNow()"]');
    const originalText = btn ? btn.innerText : "Send Message";
    
    // 1. Basic validation to prevent sending empty emails
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    if (btn) {
        btn.innerText = "Sending...";
        btn.disabled = true; // Prevent double-clicking
    }
    
    const formData = {
        name: name,
        email: email,
        subject: document.getElementById('contact-subject').value || "No Subject",
        message: message
    };

    try {
        const response = await fetch('https://linguabridge-email-form-handler.alextdakov.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            document.getElementById('contact-form').innerHTML = '<h3>Thank you! We will be in touch soon.</h3>';
            // 2. Clear the form after success
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-subject').value = '';
            document.getElementById('contact-message').value = '';
        } else {
            const err = await response.text();
            alert("Error: " + err);
        }
    } catch (error) {
        alert("Connection error. Please check your internet and try again.");
    } finally {
        if (btn) {
            btn.innerText = originalText;
            btn.disabled = false;
        }
    }
}
// 1. DATA DICTIONARY
const enrolTranslations = {
    en: {
        title: "Student Application",
        desc: "Fill out this form to request tutoring.",
        placeholders: { name: "Full Name", email: "Email Address", phone: "Phone / WhatsApp / Telegram", native: "Native Language", schedule: "Preferred Schedule", goals: "Additional comments" },
        questions: { lang: "Which language do you want to learn?", level: "Current level?", type: "Lesson type?", find: "How did you find us?" },
        submit: "Sent request"
    },
    bg: {
        title: "Кандидатстване за студенти",
        desc: "Попълнете този формуляр, за да заявите уроци.",
        placeholders: { name: "Вашите имена", email: "Имейл адрес", phone: "Телефон / WhatsApp / Viber", native: "Роден език", schedule: "Предпочитан график", goals: "Допълнителни коментари" },
        questions: { lang: "Кой език искате да научите?", level: "Текущо ниво?", type: "Тип уроци?", find: "Как ни открихте?" },
        submit: "Изпращане на заявка"
    },
    ru: {
        title: "Заявка студента",
        desc: "Заполните эту форму, чтобы запросить репетиторство.",
        placeholders: { name: "Ваше имя", email: "Email", phone: "Телефон / WhatsApp / Telegram", native: "Родной язык", schedule: "График обучения", goals: "Комментарии" },
        questions: { lang: "Какой язык вы хотите выучить?", level: "Ваш уровень?", type: "Вид занятий?", find: "Как вы нас нашли?" },
        submit: "Отправить заявку"
    }
};

// 2. RENDER THE FORM
function renderEnrolForm(lang = 'en') {
    const container = document.getElementById('enrolment-form-container');
    const t = enrolTranslations[lang];

    container.innerHTML = `
        <h2 class="text-3xl font-bold text-primary mb-2">${t.title}</h2>
        <p class="text-slate-500 mb-8">${t.desc}</p>
        <form id="active-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" id="form-name" placeholder="${t.placeholders.name}*" required class="p-4 rounded-xl border-rose-100">
            <input type="email" id="form-email" placeholder="${t.placeholders.email}*" required class="p-4 rounded-xl border-rose-100">
            <input type="text" id="form-phone" placeholder="${t.placeholders.phone}*" class="p-4 rounded-xl border-rose-100 col-span-full">
            
            <div class="col-span-full">
                <label class="block font-bold mb-2 text-sm text-slate-600">${t.questions.lang}</label>
                <select id="form-target" class="w-full p-4 rounded-xl border-rose-100">
                    <option>English</option><option>Bulgarian</option><option>German</option><option>Russian</option><option>Chinese</option>
                </select>
            </div>

            <input type="text" id="form-native" placeholder="${t.placeholders.native}*" class="p-4 rounded-xl border-rose-100">
            <input type="text" id="form-schedule" placeholder="${t.placeholders.schedule}*" class="p-4 rounded-xl border-rose-100">
            <textarea id="form-goals" placeholder="${t.placeholders.goals}" class="p-4 rounded-xl border-rose-100 col-span-full"></textarea>

            <button type="button" onclick="sendToGoogle()" class="col-span-full bg-primary text-white p-5 rounded-full font-bold shadow-lg">
                ${t.submit}
            </button>
        </form>
    `;
}

// 3. SEND DATA
async function sendToGoogle() {
    const data = {
        name: document.getElementById('form-name').value,
        email: document.getElementById('form-email').value,
        phone: document.getElementById('form-phone').value,
        target_lang: document.getElementById('form-target').value,
        native_lang: document.getElementById('form-native').value,
        schedule: document.getElementById('form-schedule').value,
        comments: document.getElementById('form-goals').value
    };

    const response = await fetch('https://linguabridge-email-form-handler.alextdakov.workers.dev', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Success! Data saved to Google Sheets.");
        document.getElementById('active-form').reset();
    }
}

// Show English form by default when page loads
// 1. The main function called by your Nav Bar buttons
function changeGlobalLanguage(lang) {
    // Save the choice so it stays the same on other pages
    localStorage.setItem('preferredLang', lang);
    
    // If we are on the enrolment page, update the form immediately
    if (document.getElementById('enrolment-form-container')) {
        renderEnrolForm(lang);
    }
    
    // Update the visual look of the buttons
    updateSwitcherUI(lang);
}

// 2. Visual feedback (highlighting the active language)
function updateSwitcherUI(lang) {
    const btns = ['en', 'bg', 'ru'];
    btns.forEach(b => {
        const el = document.querySelector(`.lang-btn-${b}`);
        if (el) {
            if (b === lang) {
                el.classList.add('bg-primary-container', 'text-white');
                el.classList.remove('opacity-70');
            } else {
                el.classList.remove('bg-primary-container', 'text-white');
                el.classList.add('opacity-70');
            }
        }
    });
}

// 3. Run this when any page loads => {
    // Check if the user has a saved language, otherwise default to 'en'
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    
    // Update the UI look
    updateSwitcherUI(savedLang);
    
    // If we are on the enrolment page, render the form in that language
    if (document.getElementById('enrolment-form-container')) {
        renderEnrolForm(savedLang);
    }
});