import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                herosect: {
                    greet1: "Leading Technology Distributor",
                    greet2first: "Welcome to ",
                    greet2mid: "Connex ",
                    greet2last: "Information Technologies",
                    greet3: "Value added distributor for more than 30 leading global vendors.",
                    contact: "Contact Us",
                    wtvideo: "Watch Video",
                },
                whowearesec: {
                    whotopic: "Who we are",
                    card1: "Distribution",
                    card2: "Consultancy",
                    card3: "Training",
                    card4: "TAC Support",
                    rText1: "A decade of expertise in cutting-edge technology distribution ",
                    rText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    ic1: "Founded",
                    ic2: "Employees",
                    ic3: "Vendors",
                    ic4: "Partners",
                },
                vendorsec: {
                    ventopic: "Our Vendors",
                    venText1: "Embark on technological Excellence with our Trusted ",
                    venText2: "Network of Vendors.",
                    
                },
                description: {
                    line1: "You're watching",
                    line2: "This is an International",
                }
            },
        },
        fr: {
            translation: {
                herosect: {
                    greet1: "ผู้จัดจำหน่ายเทคโนโลยีชั้นนำ",
                    greet2first: "ยินดีต้อนรับสู่ ",
                    greet2mid: "คอนเน็กซ์ ",
                    greet2last: "เทคโนโลยีสารสนเทศ",
                    greet3: "ผู้จัดจำหน่ายมูลค่าเพิ่มสำหรับผู้ขายชั้นนำระดับโลกมากกว่า 30 ราย",
                    contact: "ติดต่อเรา",
                    wtvideo: "ดูวีดีโอ",
                },
                description: {
                    line1: "Vous regardez la chaine",
                    line2: "Ceci est un d'internationalisation",
                }
            },
        }
    }
})