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
                    card1Text: "Discover our tailor-made solutions, designed to meet end-users requirements with the most competitive, best-fitted answers for their unique needs.",
                    card2: "Consultancy",
                    card2Text: "Consultancy service is a unique solution offered by Connex, ensuring the most suitable and competitive solution for an end-user’s requirements. We offer an integrated customized service of consultancy skills that grows and changes with business and customer needs.Connex consultancy provides highly qualified personnel to complement the skills of your own team. Our consultants and engineers act on your behalf to ensure the smooth running of customers’ installation, in a timely manner and according to budget implications.",
                    card3: "Training",
                    card3Text: " We believe in the popular adage we are all lifelong learners, hence we strive to create a culture of learning where our employees are afforded numerous opportunities to further their professional development. We also groom our employees for future leadership positions from within the Company.In a fast moving and developing digital world, the Technology industry experiences changes rapidly; therefore we realize the need to keep pace with attrition rates and staying on the edge of the most advanced technologies. Our extensive training and professional development of programmers have contributed to employee retention.",
                    card4: "TAC Support",
                    card4Text: "Connex offers 24/7 TAC services, with an array of certified, technical and qualified professionals. We are proud of Service Level Agreement levels of Bronze, Silver, Gold and Platinum.You will get to engage with your Product Manager who will share his understanding of the product, so you are fully informed and equipped with knowledge and the technical know how to use the product. Product research updates will also be shared along with information about deal registration. Connex professional service and technical support service are available for our channel partners only. Please contact.",
                    rText1: "A decade of expertise in cutting-edge technology distribution ",
                    rText2: "A leading technology distributor thrives on adapting to the ever-changing world. If you require diverse solutions to achieve compliance and transform your business, your search ends here. ",
                    ic1: "Founded",
                    ic2: "Employees",
                    ic3: "Vendors",
                    ic4: "Partners",
                    contact: "Contact Us",
                },
                vendorsec: {
                    ventopic: "Our Vendors",
                    venText1: "Embark on technological Excellence with our Trusted ",
                    venText2: "Network of Vendors.",
                    
                },
                latestsec: {
                    lattopic: "Latest News",
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
                
            },
        }
    }
})