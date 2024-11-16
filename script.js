const langBtn = document.getElementById('lang-btn');

const texts = {
    en: {
        title: "Hi, I'm David Ballester Torres",
        subtitle: "<span class='tooltip' data-tooltip='Cross-Platform Application Development'><strong>CPAD</strong></span> student, focused on application development and always looking for new challenges.",
        knowMeTitle: "Know Me",
        knowMeDesc: "I am a person passionate about computing, always looking for new challenges and learning new things. I enjoy having projects in progress, exploring new technologies, and finding creative solutions. I’m always looking to improve and discover something different.",
        projectsTitle: "Projects",
        project1Title: "Currently Working On",
        project1Desc: "",
        project2Title: "Currently Working On",
        project2Desc: "",
        project3Title: "Currently Working On",
        project3Desc: ""
    },
    es: {
        title: "Hola, soy David Ballester Torres",
        subtitle: "Estudiante de <span class='tooltip' data-tooltip='Desarrollo de Aplicaciones Multiplataforma'><strong>DAM</strong></span>, enfocado en el desarrollo de aplicaciones y siempre buscando nuevos retos.",
        knowMeTitle: "Conóceme",
        knowMeDesc: "Soy una persona apasionada por la informática, siempre buscando nuevos retos y aprendiendo cosas nuevas. Me gusta tener proyectos en marcha, explorar nuevas tecnologías y soluciones creativas. Siempre estoy buscando mejorar y descubrir algo diferente.",
        projectsTitle: "Proyectos",
        project1Title: "Próximamente",
        project1Desc: "",
        project2Title: "Próximamente",
        project2Desc: "",
        project3Title: "Próximamente",
        project3Desc: ""
    }
};

let currentLang = 'es';

function updateLanguage(lang) {
    document.getElementById('title').innerText = texts[lang].title;
    document.getElementById('subtitle').innerHTML = texts[lang].subtitle;
    document.getElementById('know-me-title').innerText = texts[lang].knowMeTitle;
    document.getElementById('know-me-desc').innerText = texts[lang].knowMeDesc;
    document.getElementById('projects-title').innerText = texts[lang].projectsTitle;
    document.getElementById('project1-title').innerText = texts[lang].project1Title;
    document.getElementById('project1-desc').innerText = texts[lang].project1Desc;
    document.getElementById('project2-title').innerText = texts[lang].project2Title;
    document.getElementById('project2-desc').innerText = texts[lang].project2Desc;
    document.getElementById('project3-title').innerText = texts[lang].project3Title;
    document.getElementById('project3-desc').innerText = texts[lang].project3Desc;

    langBtn.innerText = lang === 'en' ? 'Español' : 'English';
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateLanguage(currentLang);
});

updateLanguage(currentLang);
