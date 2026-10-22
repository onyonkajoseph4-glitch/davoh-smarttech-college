// DAVOH SMARTTECH COLLEGE
document.addEventListener("DOMContentLoaded", function () {

    // 1. HOME ANIMATIONS

    const heroContent = document.querySelector(".hero-content");
    const heroVisual = document.querySelector(".hero-visual");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(25px)";

        setTimeout(function () {
            heroContent.style.transition = "all 0.8s ease";
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 150);
    }

    if (heroVisual) {
        heroVisual.style.opacity = "0";
        heroVisual.style.transform = "translateX(25px)";

        setTimeout(function () {
            heroVisual.style.transition = "all 1s ease";
            heroVisual.style.opacity = "1";
            heroVisual.style.transform = "translateX(0)";
        }, 350);
    }

    // 2. LANGUAGE TRANSLATIONS

    const translations = {

        en: {
            home: "Home",
            about: "About Us",
            courses: "Courses",
            admissions: "Admissions",
            contact: "Contact Us",

            welcome: "WELCOME TO THE FUTURE",
            "hero-heading": "Empower Your Future With",
            "hero-subheading": "Smart Technology.",

            "hero-description":
                "Discover digital skills, explore technology, and prepare yourself for opportunities in the modern digital world.",

            "explore-courses": "Explore Courses →",
            "discover-more": "Discover More",

            location: "📍 Cherika, Laikipia County, Kenya",

            "about-label": "WHO WE ARE",
            "about-heading": "Welcome to DAVOH SMARTTECH COLLEGE",
            "about-description":
                "Our vision is to inspire digital learning, develop practical technology skills, and empower learners to explore opportunities in the digital economy.",
            "courses-label": "LEARN. CREATE. INNOVATE.",
"courses-heading": "Explore Technology",

"computer-skills": "Computer Skills",
"computer-description": "Build your digital literacy and computer skills.",

"web-development": "Web Development",
"web-description": "Discover how websites are designed and built.",

"graphic-design": "Graphic Design",
"graphic-description": "Explore creativity through digital design.",

"admissions-label": "ADMISSIONS",
"admissions-heading": "Start Your Digital Journey",
"admissions-description": "Interested in developing your computer and technology skills? Contact DAVOH SMARTTECH COLLEGE to enquire about upcoming training opportunities and admission requirements.",
"enquire-button": "Enquire Now →",
"contact-label": "CONTACT US",
"contact-heading": "Your Digital Journey Starts Here.",
"contact-intro": "Have questions about our training programmes? Get in touch with DAVOH SMARTTECH COLLEGE.",
"location-heading": "Our Location",
"location-address": "Cherika, Laikipia County, Kenya",
"call-heading": "Call Us",
"email-heading": "Email Us",
"whatsapp-button": "WhatsApp Us",
"whatsapp-button-2": "WhatsApp Number 2"

        },

        sw: {
            home: "Nyumbani",
            about: "Kuhusu Sisi",
            courses: "Kozi",
            admissions: "Udahili",
            contact: "Wasiliana Nasi",

            welcome: "KARIBU KATIKA MUSTAKABALI WA TEKNOLOJIA",
            "hero-heading": "Jenga Mustakabali Wako Kupitia",
            "hero-subheading": "Teknolojia Mahiri.",

            "hero-description":
                "Jifunze ujuzi wa kidijitali, chunguza teknolojia na jiandae kwa fursa katika ulimwengu wa kisasa wa kidijitali.",

            "explore-courses": "Tazama Kozi →",
            "discover-more": "Fahamu Zaidi",

            location: "📍 Cherika, Kaunti ya Laikipia, Kenya",

            "about-label": "KUHUSU SISI",
            "about-heading": "Karibu DAVOH SMARTTECH COLLEGE",
            "about-description":
                "Dira yetu ni kuhamasisha ujifunzaji wa kidijitali, kukuza ujuzi wa vitendo katika teknolojia na kuwawezesha wanafunzi kutumia fursa zinazopatikana katika ulimwengu wa kisasa wa kidijitali.",
                "courses-label": "JIFUNZE. BUNI. BUNI MUSTAKABALI.",
"courses-heading": "Chunguza Teknolojia",

"computer-skills": "Ujuzi wa Kompyuta",
"computer-description": "Jenga ujuzi wako wa kutumia kompyuta na teknolojia za kidijitali.",

"web-development": "Utengenezaji wa Tovuti",
"web-description": "Jifunze jinsi tovuti zinavyobuniwa na kutengenezwa.",

"graphic-design": "Ubunifu wa Picha",
"graphic-description": "Gundua ubunifu kupitia michoro na usanifu wa kidijitali.",

"admissions-label": "UDAHILI",
"admissions-heading": "Anza Safari Yako ya Kidijitali",
"admissions-description": "Je, ungependa kukuza ujuzi wako wa kompyuta na teknolojia? Wasiliana na DAVOH SMARTTECH COLLEGE kuulizia kuhusu mafunzo yajayo na mahitaji ya kujiunga.",
"enquire-button": "Uliza Zaidi →",
"contact-label": "WASILIANA NASI",
"contact-heading": "Safari Yako ya Kidijitali Inaanza Hapa.",
"contact-intro": "Una maswali kuhusu programu zetu za mafunzo? Wasiliana na DAVOH SMARTTECH COLLEGE.",
"location-heading": "Mahali Tulipo",
"location-address": "Cherika, Kaunti ya Laikipia, Kenya",
"call-heading": "Tupigie Simu",
"email-heading": "Barua Pepe",
"whatsapp-button": "Wasiliana Nasi WhatsApp",
"whatsapp-button-2": "Namba ya Pili ya WhatsApp"

        }

    };


    // 3. LANGUAGE SELECTOR

    const languageSelect = document.getElementById("language-select");

    function changeLanguage(language) {

        const selectedTranslations = translations[language];

        if (!selectedTranslations) {
            return;
        }

        document.querySelectorAll("[data-language]").forEach(function (element) {

            const key = element.getAttribute("data-language");
            const translatedText = selectedTranslations[key];

            if (translatedText) {
                element.textContent = translatedText;
            }

        });

    }

if (languageSelect) {

    const savedLanguage = localStorage.getItem("davoh-language") || "en";

    languageSelect.value = savedLanguage;

    changeLanguage(savedLanguage);

    languageSelect.addEventListener("change", function () {

        const selectedLanguage = this.value;

        changeLanguage(selectedLanguage);

        localStorage.setItem("davoh-language", selectedLanguage);

    });

}

    // 4. COURSE CARD ANIMATIONS,
    
    const courseCards = document.querySelectorAll(".course-card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        courseCards.forEach(function (card) {
            card.classList.add("reveal");
            observer.observe(card);
        });

    }


// 5. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.querySelector("header nav");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("nav-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("nav-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";

        });

    });

}
    });

    // 6. STUDENT REGISTRATION FORM

    const registrationForm = document.getElementById("registration-form");

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullName = document.getElementById("full-name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const course = document.getElementById("course").value;

            if (!fullName || !phone || !course) {
                alert("Please fill in your name, phone number, and programme.");
                return;
            }

            const message =
                "Hello DAVOH SMARTTECH COLLEGE!%0A%0A" +
                "STUDENT INQUIRY%0A" +
                "Full Name: " + encodeURIComponent(fullName) + "%0A" +
                "Phone Number: " + encodeURIComponent(phone) + "%0A" +
                "Email: " + encodeURIComponent(email || "Not provided") + "%0A" +
                "Programme: " + encodeURIComponent(course);

            const whatsappURL =
                "https://wa.me/254718024766?text=" + message;

            window.open(whatsappURL, "_blank");

        });

    }

;