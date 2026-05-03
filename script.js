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

// OPEN EMAIL CLIENT
function forceOpenEmail() {
    // 1. Grab values
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value || "Inquiry from " + name;
    const message = document.getElementById('contact-message').value;

    // 2. Build the body
    const body = `Name: ${name}\r\nEmail: ${email}\r\n\r\nMessage:\r\n${message}`;

    // 3. Construct URL
    const mailtoUrl = `mailto:hello@auralearning.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // 4. THE FORCE METHOD: Create an invisible <a> tag and "click" it
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank'; // Opens in a new tab if it's a web-client
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log("Force attempt complete.");
}
