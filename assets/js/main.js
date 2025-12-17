document.addEventListener('DOMContentLoaded', () => {

    // --- Language Data ---
    const translations = {
        en: {
            nav_logo_text: "Al Amal Marble & Granite",
            nav_home: "Home",
            nav_products: "Products",
            nav_contact: "Contact",
            hero_title: "ِAmr Salah",
            hero_subtitle: "ُExport the finest collection of Egyptian and imported natural stones.",
            hero_cta_products: "Our Products",
            hero_cta_contact: "Contact Us",
            about_title: "A Legacy of Luxury",
            about_p1: "For over two decades, Al Amal Marble & Granite has been a cornerstone of the luxury stone industry. We specialize in sourcing, processing, and supplying the most exquisite natural stones from Egypt and around the globe.",
            about_p2: "Our commitment to quality and craftsmanship ensures that every slab we deliver meets the highest standards of beauty and durability, perfect for architects, designers, and homeowners with a discerning eye for detail.",
            about_cta: "Learn More",
            gallery_preview_title: "Explore Our Collection",
            gallery_preview_card1_title: "Egyptian Marble",
            gallery_preview_card2_title: "Imported Granite",
            gallery_preview_card3_title: "Onyx",
            gallery_preview_card4_title: "Quartz",
            gallery_preview_cta: "View Full Gallery",
            footer_col1_title: "Al Amal Marble & Granite",
            footer_col1_p: "The pinnacle of luxury in natural and engineered stone.",
            footer_col2_title: "Quick Links",
            footer_col3_title: "Follow Us",
            footer_copyright: "&copy; 2024 Abdalla Eissa. All Rights Reserved.",
            products_title: "Our Products",
            products_subtitle: "An exclusive selection of the world's finest stones.",
            filter_all: "All",
            filter_marble: "Marble",
            filter_granite: "Granite",
            filter_onyx: "Onyx",
            filter_quartz: "Quartz",
            filter_egyptian: "Egyptian",
            filter_imported: "Imported",
            product_type: "Type",
            product_origin: "Origin",
            marble: "Marble",
            granite: "Granite",
            onyx: "Onyx",
            quartz: "Quartz",
            egyptian: "Egyptian",
            imported: "Imported",
            contact_title: "Get In Touch",
            contact_subtitle: "We are here to help you bring your vision to life.",
            contact_form_title: "Send Us a Message",
            form_name: "Name",
            form_email: "Email",
            form_phone: "Phone",
            form_message: "Message",
            form_submit: "Send Message",
            contact_info_title: "Contact Information",
            contact_info_address_title: "Address",
            contact_info_phone_title: "Phone",
            contact_info_email_title: "Email",
            contact_info_whatsapp_title: "WhatsApp",
            map_placeholder: "Map will be loaded here.",
        },
        ar: {
            nav_logo_text: "الأمل للرخام والجرانيت",
            nav_home: "الرئيسية",
            nav_products: "المنتجات",
            nav_contact: "اتصل بنا",
            hero_title: "شركة الامل للرخام والجرانيت",
            hero_subtitle: "لتصدير أرقى مجموعة من الأحجار الطبيعية المصرية والمستوردة.",
            hero_cta_products: "منتجاتنا",
            hero_cta_contact: "اتصل بنا",
            about_title: "إرث من الفخامة",
            about_p1: " كانت شركة الأمل للرخام والجرانيت حجر الزاوية في صناعة الأحجار الفاخرة. نحن متخصصون في توريد وتصنيع وتوفير أروع الأحجار الطبيعية من مصر وحول العالم.",
            about_p2: "التزامنا بالجودة والحرفية يضمن أن كل لوح نقدمه يلبي أعلى معايير الجمال والمتانة، وهو مثالي للمهندسين المعماريين والمصممين وأصحاب المنازل الذين يتمتعون بنظرة ثاقبة للتفاصيل.",
            about_cta: "اعرف المزيد",
            gallery_preview_title: "اكتشف مجموعتنا",
            gallery_preview_card1_title: "رخام مصري",
            gallery_preview_card2_title: "جرانيت مستورد",
            gallery_preview_card3_title: "أونيكس",
            gallery_preview_card4_title: "كوارتز",
            gallery_preview_cta: "عرض المعرض الكامل",
            footer_col1_title: "الأمل للرخام والجرانيت",
            footer_col1_p: "قمة الفخامة في الأحجار الطبيعية والمصنعة.",
            footer_col2_title: "روابط سريعة",
            footer_col3_title: "تابعنا",
            footer_copyright: "© 2024   عبدالله عيسى. جميع الحقوق محفوظة.",
            products_title: "منتجاتنا",
            products_subtitle: "مجموعة حصرية من أجود أحجار العالم.",
            filter_all: "الكل",
            filter_marble: "رخام",
            filter_granite: "جرانيت",
            filter_onyx: "أونيكس",
            filter_quartz: "كوارتز",
            filter_egyptian: "مصري",
            filter_imported: "مستورد",
            product_type: "النوع",
            product_origin: "الأصل",
            marble: "رخام",
            granite: "جرانيت",
            onyx: "أونيكس",
            quartz: "كوارتز",
            egyptian: "مصري",
            imported: "مستورد",
            contact_title: "تواصل معنا",
            contact_subtitle: "نحن هنا لمساعدتك على تحقيق رؤيتك.",
            contact_form_title: "أرسل لنا رسالة",
            form_name: "الاسم",
            form_email: "البريد الإلكتروني",
            form_phone: "الهاتف",
            form_message: "الرسالة",
            form_submit: "إرسال الرسالة",
            contact_info_title: "معلومات الاتصال",
            contact_info_address_title: "العنوان",
            contact_info_phone_title: "الهاتف",
            contact_info_email_title: "البريد الإلكتروني",
            contact_info_whatsapp_title: "واتساب",
            map_placeholder: "سيتم تحميل الخريطة هنا.",
        }
    };

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Sticky Navbar ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Language Switcher ---
    const langSwitcher = document.getElementById('lang-switcher');
    const htmlEl = document.documentElement;

    const setLanguage = (lang) => {
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langSwitcher.textContent = lang === 'ar' ? 'EN' : 'AR';

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);
    };

    langSwitcher.addEventListener('click', () => {
        const currentLang = htmlEl.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });

    // Load saved language or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);


    // --- Product Gallery Filter ---
    const filterContainer = document.querySelector('.filter-controls');
    const galleryItems = document.querySelectorAll('.product-card');

    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                // Deactivate existing active button
                filterContainer.querySelector('.active').classList.remove('active');
                // Activate new button
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');
                let itemIndex = 0;

                galleryItems.forEach(item => {
                    const categories = item.getAttribute('data-category');

                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        item.classList.remove('hide');
                        item.classList.add('show');
                        item.style.setProperty('--i', itemIndex++);
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hide');
                    }
                });

            }
        });
        // Set initial animation delays
        galleryItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
        });
    }

    // --- Product Modal ---
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.querySelector('.close-modal');

    if (modal) {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.querySelector('img').src;
                const title = card.querySelector('.product-name').textContent;
                const details = card.querySelector('.product-details').innerHTML;

                modalImg.src = imgSrc;
                modalTitle.textContent = title;
                modalDesc.innerHTML = details;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});
