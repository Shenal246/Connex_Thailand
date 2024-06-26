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
                    ic1: "Found",
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
                },
                // About us section
                ourstory: {
                    ourSTopic: "Our Story",
                    ourSText: "Founded with a passion for technology and excellence, CONNEX INFORMATION TECHNOLOGY has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry.",
                    ourVTopic: "Our Vision",
                    ourVText: "Our vision is to deliver high-quality IT products and solutions through our extensive network of partners. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers, driving sustained growth and technological advancement.",
                    ourMTopic: "Our Mission",
                    ourMText: "Our mission is to deliver high-quality IT products and solutions by leveraging our extensive network of partners and channels. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers. Together, we strive to build a technologically advanced future and achieve sustained growth.",
                    sureshName: "Suresh Wijesinghe",
                    sureshText: `"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."`,
                    shamalName: "Shamal Aberathne",
                    shamalText: `"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."`,
                    dilshanName: "Dilshan De Silva",
                    dilshanText: `"Operational excellence is the foundation of our success, driving efficiency and innovation."`,
                    rohanName: "Rohan Samaraweera",
                    rohanText: `"Technology transforms vision into reality, powering our journey into the future."`,
                    rajivName: "Rajiv Senawirathne",
                    rajivText: `"Customer trust and satisfaction are the cornerstones of our company\'s reputation."`,
                    patricName: "Patric Yogarathnam",
                    patricText: `"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."`,
                    erangaName: "Eranga Wickramasinghe",
                    erangaText: `"Building strong relationships with our customers is the cornerstone of our success and growth."`,
                    jananiName: "Janani Siriwardhane",
                    jananiText: `"Empowering employees and fostering a positive culture are the keys to organizational success."`,
                    romeshName: "Romesh De Silva",
                    romeshText: `"Success in sales is not about pushing products, but about understanding and solving customer needs."`,
                },
                latestsec: {
                    lattopic: "Latest News",
                },
                // Sollutions section
                solutionssec: {
                    maintopic: "Solutions",
                    periTopic: "Perimeter and  Internal Security",
                    cyberTopic: "Cyber Security Governance & Compliance",
                    authTopic: "Authentication & Identity Management",
                    secTopic: "Security Management",
                    endTopic: "Endpoint Security",
                    netTopic: "Networking",
                    dataTopic: "Data Center Infrastructure and  Monitoring",
                    serverTopic: "Server Storage & Backup Solutions",
                },
                // Footer section
                footersec: {
                    footHeadTopic: "Head Office",
                    headLine1: "Level 35,",
                    headLine2: "The Gateway West 150 Beach Road,",
                    headLine3: "Singapore 189720 .",
                    headLine4: "Contact: +6567278910",
                    footConTopic: "Thailand Office",
                    conLine1: "184/75,",
                    conLine2: "17th Floor, Forum Tower,",
                    conLine3: "Ratchadaphisek Rd, Khwaeng Huai Khwang, Huai Khwang,",
                    conLine4: "Bangkok 10310, Thailand",
                    conLine5: "Contact: +66612700590",
                    resTopic: "Resources",
                    res1: "Event & News",
                    res2: "FAQs",
                    res3: "Careers",
                },
                // Chat
                chatsec: {
                    ques1: "Hi! I am here to help you. Can I know your name? ",
                    ques2: `Hi {previousValue}, How Can I help you?`,
                    ques3: "Sure. Can I have your phone number?",
                    ques4: "Thank you! One of our staff will call you shortly.",
                },
                // Navbar Section
                navsec: {
                    tab1: "About Us",
                    tab2: "Solutions",
                    tab3: "Events",
                    tab4: "Events & News",
                    tab5: "Upcoming News",
                    tab6: "Blogs",
                    tab7: "Potal",
                    tab8: "Country",
                    tab9: "Contact Us",
                },

                // contactus page
                contsec: {
                    cont1: "Contact Us",
                    cont2: "Reach out to us ",
                    cont3: "to let us know how we can assist you.",
                    cont4: "We are happy to provide",
                    cont5: "customer support or",
                    cont6: "answer any general inquiries",
                    cont7: " you may have.",
                    cont8: "First name",
                    cont9: "First name is required",
                    cont10: "Last name",
                    cont11: "Last name is required",
                    cont12: "Company",
                    cont13: "Company is required",
                    cont14: "Contact Number",
                    cont15: "Contact number must be exactly 10 digits",
                    cont16: "name@example.com",
                    cont17: "Invalid email address",
                    cont18: "Comments are required",
                    cont19: "I accept the privacy & policy",
                    cont20: "You must accept the privacy & policy",
                    cont21: "Submit",
                    cont22: "Clear",
                    cont23: "Thailand",
                    cont24: "Thailand Office",
                    cont25: "184/75, 17th Floor",
                    cont26: "Forum Tower, Ratchadapkisek Rd,",
                    cont27: "Khwaeng Huai Khwang, Hui Khwang,",
                    cont28: "Bangkok 10310, Thailand",
                    cont29: "Get Directions",
                },

                eventsec: {
                    evnt1: "Events & News",
                    evnt2: "Latest Events and News",
                    evnt3: "No Image Available",
                    evnt4: "Close",
                    evnt5: "Events & News",
                    evnt6: "Blogs",
                },
                upEventSec: {
                    upevnt1: "Upcoming",
                    upevnt2: "Events & News",
                    upevnt3: "No Image Available",
                    upevnt4: "Close",
                },
                portalsec: {
                    ptl1: "To be launch",
                    ptl2: "Soon"
                },
                blogsec: {
                    blg1: "Blogs"
                },
                authentisec:{
                    at1: "Authentication & Identity Management",
                    at2: "No Image Available",                  
                },
                cybersec:{
                    cy1: "Cyber Security Governance & Compliance",
                    cy2: "No Image Available"
                },endpsec:{
                    ep1: "Endpoint Security",
                    ep2: "No Image Available"
                },newtworksec: {
                    nt1: "Networking",
                    nt2: "No Image Available"
                },ifmsec: {
                    if1: "Data Center Infrastructure and Infrastructure Monitoring",
                    if2: "No Image Available"
                },perisec: {
                    pr1:"Perimeter And Internal Security",
                    pr2:"No Image Available"
                },securitysec: {
                    scrty1: "Security Management",
                    scrty2: "No Image Available"
                },serversec: {
                    svr1: "Server Storage & Backup Solutions",
                    svr2: "No Image Available"
                }
            },
        },
        fr: {
            translation: {
                herosect: {
                    greet1: "ผู้นำการจัดจำหน่ายเทคโนโลยี",
                    greet2first: "ยินดีต้อนรับสู่ ",
                    greet2mid: "คอนเน็กซ์ ",
                    greet2last: "เทคโนโลยีสารสนเทศ",
                    greet3: "ผู้จัดจำหน่ายที่มีมูลค่าเพิ่มสำหรับผู้จำหน่ายระดับโลกมากกว่า 30 ราย",
                    contact: "ติดต่อเรา",
                    wtvideo: "ชมวิดีโอ",
                },
                whowearesec: {
                    whotopic: "พวกเราคือใคร",
                    card1: "การจัดจำหน่าย",
                    card1Text: "ค้นหาวิธีแก้ไขที่ปรับแต่งตามความต้องการของผู้ใช้ปลายทางด้วยคำตอบที่มีการแข่งขันสูงและเหมาะสมที่สุดสำหรับความต้องการเฉพาะของพวกเขา",
                    card2: "การให้คำปรึกษา",
                    card2Text: "บริการให้คำปรึกษาเป็นทางออกที่ไม่เหมือนใครที่นำเสนอโดยคอนเน็กซ์ ซึ่งรับประกันโซลูชันที่เหมาะสมและแข่งขันได้มากที่สุดสำหรับความต้องการของผู้ใช้ปลายทาง เรานำเสนอบริการที่ปรับแต่งแบบบูรณาการที่เติบโตและเปลี่ยนแปลงไปตามความต้องการทางธุรกิจและลูกค้า การให้คำปรึกษาของคอนเน็กซ์มอบบุคลากรที่มีคุณสมบัติสูงเพื่อเสริมทักษะของทีมคุณ ที่ปรึกษาและวิศวกรของเราทำหน้าที่แทนคุณเพื่อให้การติดตั้งของลูกค้าดำเนินไปอย่างราบรื่น ทันเวลา และตามงบประมาณ",
                    card3: "การฝึกอบรม",
                    card3Text: " เราเชื่อในคำกล่าวยอดนิยมที่ว่าเราทุกคนเป็นผู้เรียนรู้ตลอดชีวิต ดังนั้นเราจึงพยายามสร้างวัฒนธรรมการเรียนรู้ที่พนักงานของเราได้รับโอกาสมากมายในการพัฒนาวิชาชีพของพวกเขา นอกจากนี้เรายังฝึกอบรมพนักงานของเราสำหรับตำแหน่งผู้นำในอนาคตจากภายในบริษัท ในโลกดิจิทัลที่เคลื่อนไหวและพัฒนาอย่างรวดเร็ว อุตสาหกรรมเทคโนโลยีมีการเปลี่ยนแปลงอย่างรวดเร็ว ดังนั้นเราจึงตระหนักถึงความจำเป็นในการก้าวให้ทันกับอัตราการออกจากงานและอยู่ในแนวหน้าของเทคโนโลยีที่ล้ำสมัย การฝึกอบรมและการพัฒนาวิชาชีพของโปรแกรมเมอร์ที่กว้างขวางของเรามีส่วนช่วยในการรักษาพนักงาน",
                    card4: "การสนับสนุน TAC",
                    card4Text: "คอนเน็กซ์มีบริการ TAC ตลอด 24 ชั่วโมงทุกวัน ด้วยผู้เชี่ยวชาญที่ผ่านการรับรอง มีทักษะ และมีคุณสมบัติหลากหลาย เราภูมิใจในระดับข้อตกลงระดับบริการระดับบรอนซ์ เงิน ทอง และแพลทินัม คุณจะได้มีส่วนร่วมกับผู้จัดการผลิตภัณฑ์ของคุณซึ่งจะแบ่งปันความเข้าใจในผลิตภัณฑ์ของเขา เพื่อให้คุณได้รับข้อมูลอย่างครบถ้วนและมีความรู้และความรู้ทางเทคนิคในการใช้ผลิตภัณฑ์ การอัปเดตการวิจัยผลิตภัณฑ์จะแบ่งปันควบคู่ไปกับข้อมูลเกี่ยวกับการลงทะเบียนดีล บริการระดับมืออาชีพและบริการสนับสนุนด้านเทคนิคของคอนเน็กซ์มีให้สำหรับพันธมิตรช่องทางของเราเท่านั้น กรุณาติดต่อ",
                    rText1: "ทศวรรษแห่งความเชี่ยวชาญในการจัดจำหน่ายเทคโนโลยีล้ำสมัย",
                    rText2: "ผู้นำด้านการจัดจำหน่ายเทคโนโลยีเจริญเติบโตจากการปรับตัวให้เข้ากับโลกที่เปลี่ยนแปลงตลอดเวลา หากคุณต้องการโซลูชันที่หลากหลายเพื่อให้บรรลุการปฏิบัติตามข้อกำหนดและเปลี่ยนแปลงธุรกิจของคุณ การค้นหาของคุณจะสิ้นสุดที่นี่",
                    ic1: "ก่อตั้ง",
                    ic2: "พนักงาน",
                    ic3: "ผู้ขาย",
                    ic4: "พันธมิตร",
                    contact: "ติดต่อเรา",
                },
                vendorsec: {
                    ventopic: "ผู้จำหน่ายของเรา",
                    venText1: "เริ่มต้นความเป็นเลิศทางเทคโนโลยีกับเครือข่ายผู้จำหน่ายที่เชื่อถือได้ของเรา",
                    venText2: "เครือข่ายผู้จำหน่าย",
                },
                latestsec: {
                    lattopic: "ข่าวล่าสุด",
                },
                ourstory: {
                    ourSTopic: "เรื่องราวของเรา",
                    ourSText: "ก่อตั้งขึ้นด้วยความหลงใหลในเทคโนโลยีและความเป็นเลิศ CONNEX INFORMATION TECHNOLOGY ได้กลายเป็นผู้นำในการจัดจำหน่ายผลิตภัณฑ์ไอที เราเริ่มต้นด้วยวิสัยทัศน์ที่จะปฏิวัติอุตสาหกรรมด้วยโซลูชั่นที่เป็นนวัตกรรมและการสนับสนุนที่ไม่มีใครเทียบได้ ความสำเร็จของเราสร้างขึ้นจากความสัมพันธ์ที่แน่นแฟ้นกับลูกค้าและพันธมิตรของเรา ทำให้เราสามารถปรับตัวและตอบสนองความต้องการของตลาดที่เปลี่ยนแปลงไป เมื่อเราเติบโตขึ้น เรามุ่งมั่นที่จะสร้างสรรค์นวัตกรรม ความซื่อสัตย์ และความเป็นหุ้นส่วน ขับเคลื่อนการเติบโตร่วมกันและสร้างมาตรฐานใหม่ในอุตสาหกรรม",
                    ourVTopic: "วิสัยทัศน์ของเรา",
                    ourVText: "วิสัยทัศน์ของเราคือการส่งมอบผลิตภัณฑ์และโซลูชั่นไอทีคุณภาพสูงผ่านเครือข่ายพันธมิตรที่กว้างขวางของเรา เรามุ่งมั่นที่จะให้บริการที่ยอดเยี่ยม การตลาดที่เป็นนวัตกรรม และการสนับสนุนที่ทุ่มเทเพื่อให้มั่นใจถึงความสำเร็จของพันธมิตรและความพึงพอใจของลูกค้า ขับเคลื่อนการเติบโตอย่างยั่งยืนและความก้าวหน้าทางเทคโนโลยี",
                    ourMTopic: "พันธกิจของเรา",
                    ourMText: "พันธกิจของเราคือการส่งมอบผลิตภัณฑ์และโซลูชั่นไอทีคุณภาพสูงโดยใช้ประโยชน์จากเครือข่ายพันธมิตรและช่องทางที่กว้างขวางของเรา เรามุ่งมั่นที่จะให้บริการที่ยอดเยี่ยม การตลาดที่เป็นนวัตกรรม และการสนับสนุนที่ทุ่มเทเพื่อให้มั่นใจถึงความสำเร็จของพันธมิตรและความพึงพอใจของลูกค้า ร่วมกัน เราพยายามสร้างอนาคตที่ก้าวหน้าทางเทคโนโลยีและบรรลุการเติบโตอย่างยั่งยืน",
                    sureshName: "สุเรช วิเจสิงเห",
                    sureshText: `"การเป็นผู้นำไม่ใช่แค่การตัดสินใจเท่านั้น แต่ยังเป็นการสร้างแรงบันดาลใจให้ผู้อื่นบรรลุความยิ่งใหญ่"`,
                    shamalName: "ชามาล อาเบราธเน",
                    shamalText: `"ในโลกที่มีเสียงรบกวน แบรนด์ของเราต้องมีเสียงที่แท้จริง มีส่วนร่วม และน่าจดจำ"`,
                    dilshanName: "ดิลชาน เดอ ซิลวา",
                    dilshanText: `"ความเป็นเลิศในการดำเนินงานเป็นรากฐานของความสำเร็จของเรา ขับเคลื่อนประสิทธิภาพและนวัตกรรม"`,
                    rohanName: "โรฮาน สมาราวีรา",
                    rohanText: `"เทคโนโลยีเปลี่ยนวิสัยทัศน์ให้เป็นจริง ขับเคลื่อนการเดินทางของเราไปสู่อนาคต"`,
                    rajivName: "ราชีฟ เสนาวีรัธเน",
                    rajivText: `"ความไว้วางใจและความพึงพอใจของลูกค้าเป็นรากฐานของชื่อเสียงของบริษัทเรา"`,
                    patricName: "แพทริก โยการัทนัม",
                    patricText: `"การเชื่อมต่อกับลูกค้าทั่วโลกของเราต้องการความเข้าใจในความต้องการที่หลากหลายและการให้บริการที่ยอดเยี่ยม"`,
                    erangaName: "เริงก้า วิกรมสิงเห",
                    erangaText: `"การสร้างความสัมพันธ์ที่แข็งแกร่งกับลูกค้าของเราเป็นรากฐานของความสำเร็จและการเติบโตของเรา"`,
                    jananiName: "จานานี สิริวาร์ธาน",
                    jananiText: `"การให้อำนาจแก่พนักงานและการสร้างวัฒนธรรมที่เป็นบวกคือกุญแจสู่ความสำเร็จขององค์กร"`,
                    romeshName: "โรเมช เดอ ซิลวา",
                    romeshText: `"ความสำเร็จในการขายไม่ใช่เรื่องของการผลักดันผลิตภัณฑ์ แต่เป็นเรื่องของการเข้าใจและแก้ปัญหาความต้องการของลูกค้า"`,
                },
                solutionssec: {
                    maintopic: "โซลูชั่น",
                    periTopic: "การรักษาความปลอดภัยภายนอกและภายใน",
                    cyberTopic: "การกำกับดูแลและการปฏิบัติตามความปลอดภัยทางไซเบอร์",
                    authTopic: "การพิสูจน์ตัวตนและการจัดการข้อมูลประจำตัว",
                    secTopic: "การจัดการความปลอดภัย",
                    endTopic: "การรักษาความปลอดภัยปลายทาง",
                    netTopic: "เครือข่าย",
                    dataTopic: "โครงสร้างพื้นฐานและการตรวจสอบศูนย์ข้อมูล",
                    serverTopic: "โซลูชั่นการจัดเก็บและสำรองข้อมูลเซิร์ฟเวอร์",
                },
                footersec: {
                    footHeadTopic: "สำนักงานใหญ่",
                    headLine1: "ชั้น 35,",
                    headLine2: "เดอะ เกตเวย์ เวสต์ 150 บีชโร้ด,",
                    headLine3: "สิงคโปร์ 189720.",
                    headLine4: "ติดต่อ: +6567278910",
                    footConTopic: "สำนักงานในประเทศไทย",
                    conLine1: "184/75,",
                    conLine2: "ชั้น 17, ฟอรัม ทาวเวอร์,",
                    conLine3: "ถ.รัชดาภิเษก, แขวงห้วยขวาง, เขตห้วยขวาง,",
                    conLine4: "กรุงเทพฯ 10310, ประเทศไทย",
                    conLine5: "ติดต่อ: +66612700590",
                    resTopic: "ทรัพยากร",
                    res1: "กิจกรรมและข่าวสาร",
                    res2: "คำถามที่พบบ่อย",
                    res3: "อาชีพ",
                },
                chatsec: {
                    ques1: "สวัสดี! ฉันอยู่ที่นี่เพื่อช่วยเหลือคุณ ขอทราบชื่อของคุณได้ไหม?",
                    ques2: `สวัสดี {previousValue}, ฉันช่วยอะไรคุณได้บ้าง?`,
                    ques3: "แน่นอน. ขอเบอร์โทรศัพท์ของคุณได้ไหม?",
                    ques4: "ขอบคุณ! พนักงานของเราจะโทรหาคุณในไม่ช้า",
                },
                navsec: {
                    tab1: "เกี่ยวกับเรา",
                    tab2: "โซลูชั่น",
                    tab3: "กิจกรรม",
                    tab4: "กิจกรรมและข่าวสาร",
                    tab5: "ข่าวสารล่าสุด",
                    tab6: "บล็อก",
                    tab7: "พอร์ทัล",
                    tab8: "ประเทศ",
                    tab9: "ติดต่อเรา",
                },
                contsec: {
                    cont1: "ติดต่อเรา",
                    cont2: "ติดต่อเรา",
                    cont3: "เพื่อแจ้งให้เราทราบว่าเราสามารถช่วยคุณได้อย่างไร",
                    cont4: "เรายินดีที่จะให้",
                    cont5: "การสนับสนุนลูกค้า หรือ",
                    cont6: "ตอบคำถามทั่วไปใดๆ",
                    cont7: "ที่คุณอาจมี",
                    cont8: "ชื่อ",
                    cont9: "ต้องการชื่อ",
                    cont10: "นามสกุล",
                    cont11: "ต้องการนามสกุล",
                    cont12: "บริษัท",
                    cont13: "ต้องการบริษัท",
                    cont14: "เบอร์โทรศัพท์ติดต่อ",
                    cont15: "เบอร์โทรศัพท์ต้องมี 10 หลัก",
                    cont16: "name@example.com",
                    cont17: "ที่อยู่อีเมลไม่ถูกต้อง",
                    cont18: "ต้องการความคิดเห็น",
                    cont19: "ฉันยอมรับนโยบายความเป็นส่วนตัว",
                    cont20: "คุณต้องยอมรับนโยบายความเป็นส่วนตัว",
                    cont21: "ส่ง",
                    cont22: "ล้าง",
                    cont23: "ประเทศไทย",
                    cont24: "สำนักงานประเทศไทย",
                    cont25: "184/75 ชั้น 17",
                    cont26: "อาคารฟอรั่ม ถนนรัชดาภิเษก",
                    cont27: "แขวงห้วยขวาง เขตห้วยขวาง",
                    cont28: "กรุงเทพฯ 10310 ประเทศไทย",
                    cont29: "ขอเส้นทาง",
                },

                eventsec: {
                    evnt1: "กิจกรรมและข่าวสาร",
                    evnt2: "กิจกรรมและข่าวสารล่าสุด",
                    evnt3: "ไม่มีภาพที่ใช้ได้",
                    evnt4: "ปิด",
                    evnt5: "กิจกรรมและข่าวสาร",
                    evnt6: "บล็อก",
                },
                upEventSec: {
                    upevnt1: "กิจกรรมที่จะเกิดขึ้น",
                    upevnt2: "กิจกรรมและข่าวสาร",
                    upevnt3: "ไม่มีภาพที่ใช้ได้",
                    upevnt4: "ปิด",
                },

                portalsec: {
                    ptl1: "เตรียมเปิดตัว",
                    ptl2: "เร็วๆ นี้"
                },
                blogsec: {
                    blg1: "บล็อก"
                },
                authentisec:{
                    at1: "การยืนยันตัวตนและการจัดการข้อมูลประจำตัว",
                    at2: "ไม่มีภาพที่แสดง",
                },
                cybersec: {
                    cy1: "การกำกับดูแลและการปฏิบัติตามความปลอดภัยทางไซเบอร์",
                    cy2: "ไม่มีภาพที่แสดง"
                },
                endpsec: {
                    ep1: "ความปลอดภัยของปลายทาง",
                    ep2: "ไม่มีภาพที่แสดง"
                },newtworksec: {
                    nt1: "เครือข่าย",
                    nt2: "ไม่มีภาพที่แสดง"
                },ifmsec: {
                    if1: "โครงสร้างพื้นฐานของศูนย์ข้อมูลและการตรวจสอบโครงสร้างพื้นฐาน",
                    if2: "ไม่มีภาพที่แสดง"
                },perisec: {
                    pr1: "ความปลอดภัยรอบขอบเขตและภายใน",
                    pr2: "ไม่มีภาพที่แสดง"
                },securitysec: {
                    scrty1: "การจัดการความปลอดภัย",
                    scrty2: "ไม่มีภาพที่แสดง"
                },serversec: {
                    svr1: "โซลูชั่นการจัดเก็บและสำรองข้อมูลเซิร์ฟเวอร์",
                    svr2: "ไม่มีภาพที่แสดง"
                }
                
                               
                
            },
        }
    }
})