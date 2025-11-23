import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'th' | 'zh';

const DICTIONARY = {
  en: {
    // Navigation
    NAV_HOME: 'Home',
    NAV_MENU: 'Menu',
    NAV_ABOUT: 'About Us',
    NAV_EVENTS: 'Events',
    NAV_CONTACT: 'Contact',
    NAV_RESERVE: 'Reservations',
    
    // Hero Section
    HERO_TITLE: 'Experience the Essence of Thai Royal Cuisine',
    HERO_SUBTITLE: 'Authentic flavors, premium ingredients, and an unforgettable atmosphere.',
    BTN_RESERVE: 'Book a Table',
    BTN_MENU: 'View Menu',
    SECTION_HIGHLIGHTS: 'Culinary Highlights',
    
    // Home Page - Dishes
    DISH_TOMYUM: 'Tom Yum Goong',
    DISH_TOMYUM_DESC: 'Spicy prawn soup with lemongrass and galangal.',
    DISH_PADTHAI: 'Pad Thai',
    DISH_PADTHAI_DESC: 'Stir-fried rice noodles with tamarind sauce.',
    DISH_GREENCURRY: 'Green Curry',
    DISH_GREENCURRY_DESC: 'Authentic Thai green curry with coconut milk.',
    
    // Menu Categories
    MENU_STARTERS: 'Starters',
    MENU_MAINS: 'Mains',
    MENU_DESSERTS: 'Desserts',
    
    // Menu Items - Starters
    MENU_TOMYUM: 'Tom Yum Goong',
    MENU_TOMYUM_DESC: 'Spicy prawn soup with lemongrass, galangal, and kaffir lime leaves.',
    MENU_SATAY: 'Satay Gai',
    MENU_SATAY_DESC: 'Grilled chicken skewers served with peanut sauce and cucumber relish.',
    MENU_SOMTUM: 'Som Tum',
    MENU_SOMTUM_DESC: 'Green papaya salad with peanuts, dried shrimp, and chili lime dressing.',
    
    // Menu Items - Mains
    MENU_GREENCURRY: 'Gaeng Keow Wan',
    MENU_GREENCURRY_DESC: 'Green curry with chicken, thai eggplant, and sweet basil.',
    MENU_PADTHAI: 'Pad Thai',
    MENU_PADTHAI_DESC: 'Stir-fried rice noodles with prawns, tofu, egg, and tamarind sauce.',
    MENU_MASSAMAN: 'Massaman Curry',
    MENU_MASSAMAN_DESC: 'Rich and mild curry with beef, potatoes, and peanuts.',
    MENU_SEABASS: 'Pla Kapong Neung Manao',
    MENU_SEABASS_DESC: 'Steamed seabass with lime, garlic, and chili sauce.',
    
    // Menu Items - Desserts
    MENU_MANGO: 'Mango Sticky Rice',
    MENU_MANGO_DESC: 'Sweet sticky rice with ripe mango and coconut cream.',
    MENU_BUALOY: 'Bua Loy',
    MENU_BUALOY_DESC: 'Rice flour dumplings in warm coconut milk.',
    
    // Events
    EVENT_SONGKRAN_TITLE: 'Songkran Festival Special',
    EVENT_SONGKRAN_DATE: 'April 13-15, 2025',
    EVENT_SONGKRAN_DESC: 'Celebrate the Thai New Year with our exclusive 7-course tasting menu featuring traditional delicacies.',
    EVENT_JAZZ_TITLE: 'Jazz & Wine Night',
    EVENT_JAZZ_DATE: 'Every Friday',
    EVENT_JAZZ_DESC: 'Enjoy live jazz music paired with our curated selection of fine wines and signature Thai tapas.',
    EVENT_LOYKRATHONG_TITLE: 'Loy Krathong Dinner',
    EVENT_LOYKRATHONG_DATE: 'November 27, 2025',
    EVENT_LOYKRATHONG_DESC: 'A magical evening by the river with a special buffet and traditional Krathong floating ceremony.',
    BTN_BOOK_NOW: 'Book Now',
    
    // About Page
    SECTION_STORY: 'Our Story',
    ABOUT_STORY_P1: 'Founded in 2025, Royal Thai brings the authentic taste of ancient Siamese cuisine to the modern world. Our recipes have been passed down through generations of royal chefs, ensuring that every dish preserves the delicate balance of flavors that Thai cuisine is renowned for.',
    ABOUT_STORY_P2: 'We believe in using only the finest ingredients, sourced locally and from Thailand, to create a dining experience that is both luxurious and deeply rooted in tradition.',
    ABOUT_CHEF_TITLE: 'Meet Our Chef',
    ABOUT_CHEF_NAME: 'Chef Somsak',
    ABOUT_CHEF_P1: 'With over 20 years of experience in 5-star hotels across Bangkok and Phuket, Chef Somsak brings a wealth of knowledge and passion to Royal Thai. His philosophy is simple: respect the ingredients and cook with heart.',
    ABOUT_CHEF_P2: '"Cooking is an art form that speaks to the soul. I want every guest to feel the warmth and hospitality of Thailand in every bite."',
    
    // Contact Page
    CONTACT_ADDRESS: 'Address',
    CONTACT_PHONE: 'Phone',
    CONTACT_EMAIL: 'Email',
    CONTACT_HOURS: 'Opening Hours',
    CONTACT_HOURS_TEXT: 'Daily: 11:00 AM - 10:00 PM',
    
    // Reservation Page
    RESERVE_SUBTITLE: 'Book your table for an unforgettable dining experience.',
    FORM_NAME: 'Name',
    FORM_NAME_PLACEHOLDER: 'Your Name',
    FORM_EMAIL: 'Email',
    FORM_EMAIL_PLACEHOLDER: 'email@example.com',
    FORM_PHONE: 'Phone',
    FORM_PHONE_PLACEHOLDER: '+66...',
    FORM_DATE: 'Date',
    FORM_TIME: 'Time',
    FORM_GUESTS: 'Guests',
    FORM_PERSON: 'Person',
    FORM_PERSONS: 'Persons',
    FORM_SUBMIT: 'Confirm Reservation',
    
    // Footer
    FOOTER_ADDRESS: '123 Sukhumvit Road, Bangkok, Thailand',
    FOOTER_RIGHTS: '© 2025 Thai Fine Dining. All rights reserved.'
  },
  th: {
    // Navigation
    NAV_HOME: 'หน้าหลัก',
    NAV_MENU: 'เมนู',
    NAV_ABOUT: 'เกี่ยวกับเรา',
    NAV_EVENTS: 'กิจกรรม',
    NAV_CONTACT: 'ติดต่อเรา',
    NAV_RESERVE: 'จองโต๊ะ',
    
    // Hero Section
    HERO_TITLE: 'สัมผัสแก่นแท้ของอาหารไทยชาววัง',
    HERO_SUBTITLE: 'รสชาติต้นตำรับ วัตถุดิบพรีเมียม และบรรยากาศที่น่าจดจำ',
    BTN_RESERVE: 'จองโต๊ะ',
    BTN_MENU: 'ดูเมนู',
    SECTION_HIGHLIGHTS: 'เมนูแนะนำ',
    
    // Home Page - Dishes
    DISH_TOMYUM: 'ต้มยำกุ้ง',
    DISH_TOMYUM_DESC: 'ต้มยำกุ้งรสจัดจ้าน หอมกลิ่นตะไคร้และข่า',
    DISH_PADTHAI: 'ผัดไทย',
    DISH_PADTHAI_DESC: 'ผัดไทยเส้นจันทร์ ราดน้ำมะขามเปียก',
    DISH_GREENCURRY: 'แกงเขียวหวาน',
    DISH_GREENCURRY_DESC: 'แกงเขียวหวานไทยแท้ กะทิหอมหวาน',
    
    // Menu Categories
    MENU_STARTERS: 'อาหารเรียกน้ำย่อย',
    MENU_MAINS: 'อาหารจานหลัก',
    MENU_DESSERTS: 'ของหวาน',
    
    // Menu Items - Starters
    MENU_TOMYUM: 'ต้มยำกุ้ง',
    MENU_TOMYUM_DESC: 'ต้มยำกุ้งรสจัดจ้าน หอมกลิ่นตะไคร้ ข่า และใบมะกรูด',
    MENU_SATAY: 'สะเต๊ะไก่',
    MENU_SATAY_DESC: 'ไก่สะเต๊ะย่างเสิร์ฟพร้อมน้ำจิ้มถั่วและอาจาด',
    MENU_SOMTUM: 'ส้มตำ',
    MENU_SOMTUM_DESC: 'ส้มตำมะละกอ ถั่วลิสง กุ้งแห้ง และน้ำจิ้มมะนาว',
    
    // Menu Items - Mains
    MENU_GREENCURRY: 'แกงเขียวหวาน',
    MENU_GREENCURRY_DESC: 'แกงเขียวหวานไก่ มะเขือเทศไทย และใบโหระพา',
    MENU_PADTHAI: 'ผัดไทย',
    MENU_PADTHAI_DESC: 'ผัดไทยเส้นจันทร์ กุ้ง เต้าหู้ ไข่ และน้ำมะขามเปียก',
    MENU_MASSAMAN: 'มัสมั่นแกง',
    MENU_MASSAMAN_DESC: 'แกงมัสมั่นเนื้อ มันฝรั่ง และถั่วลิสง รสชาติกลมกล่อม',
    MENU_SEABASS: 'ปลากะพงนึ่งมะนาว',
    MENU_SEABASS_DESC: 'ปลากะพงนึ่งมะนาว กระเทียม และพริก',
    
    // Menu Items - Desserts
    MENU_MANGO: 'ข้าวเหนียวมะม่วง',
    MENU_MANGO_DESC: 'ข้าวเหนียวหวาน มะม่วงสุก และกะทิหอมหวาน',
    MENU_BUALOY: 'บัวลอย',
    MENU_BUALOY_DESC: 'บัวลอยแป้งข้าวเจ้าในน้ำกะทิอ่อนๆ',
    
    // Events
    EVENT_SONGKRAN_TITLE: 'เทศกาลสงกรานต์พิเศษ',
    EVENT_SONGKRAN_DATE: '13-15 เมษายน 2568',
    EVENT_SONGKRAN_DESC: 'ฉลองปีใหม่ไทยกับเมนูชิมรส 7 คอร์สพิเศษ เต็มไปด้วยอาหารไทยโบราณ',
    EVENT_JAZZ_TITLE: 'คืนแจ๊สและไวน์',
    EVENT_JAZZ_DATE: 'ทุกวันศุกร์',
    EVENT_JAZZ_DESC: 'เพลิดเพลินกับดนตรีแจ๊สสด คู่กับไวน์คัดสรรและอาหารไทยรสเลิศ',
    EVENT_LOYKRATHONG_TITLE: 'งานเลี้ยงลอยกระทง',
    EVENT_LOYKRATHONG_DATE: '27 พฤศจิกายน 2568',
    EVENT_LOYKRATHONG_DESC: 'ค่ำคืนแสนวิเศษริมแม่น้ำ พร้อมบุฟเฟ่ต์พิเศษและพิธีลอยกระทงแบบดั้งเดิม',
    BTN_BOOK_NOW: 'จองเลย',
    
    // About Page
    SECTION_STORY: 'เรื่องราวของเรา',
    ABOUT_STORY_P1: 'ก่อตั้งขึ้นในปี 2568 Royal Thai นำเสนอรสชาติต้นตำรับของอาหารสยามโบราณสู่โลกยุคใหม่ สูตรอาหารของเราถ่ายทอดมาจากรุ่นสู่รุ่นของเชฟหลวง เพื่อให้แน่ใจว่าทุกจานอาหารคงไว้ซึ่งความสมดุลของรสชาติที่อาหารไทยมีชื่อเสียง',
    ABOUT_STORY_P2: 'เราเชื่อในการใช้วัตถุดิบชั้นเลิศเท่านั้น จัดหาจากท้องถิ่นและจากประเทศไทย เพื่อสร้างประสบการณ์การรับประทานอาหารที่หรูหราและหยั่งรากลึกในประเพณี',
    ABOUT_CHEF_TITLE: 'พบกับเชฟของเรา',
    ABOUT_CHEF_NAME: 'เชฟสมศักดิ์',
    ABOUT_CHEF_P1: 'ด้วยประสบการณ์กว่า 20 ปีในโรงแรม 5 ดาวทั่วกรุงเทพฯและภูเก็ต เชฟสมศักดิ์นำความรู้และความหลงใหลมาสู่ Royal Thai ปรัชญาของเขาง่ายๆ: เคารพในวัตถุดิบและทำอาหารด้วยหัวใจ',
    ABOUT_CHEF_P2: '"การทำอาหารคือศิลปะที่พูดกับจิตวิญญาณ ผมต้องการให้แขกทุกคนรู้สึกถึงความอบอุ่นและการต้อนรับของไทยในทุกคำ"',
    
    // Contact Page
    CONTACT_ADDRESS: 'ที่อยู่',
    CONTACT_PHONE: 'โทรศัพท์',
    CONTACT_EMAIL: 'อีเมล',
    CONTACT_HOURS: 'เวลาเปิดทำการ',
    CONTACT_HOURS_TEXT: 'ทุกวัน: 11:00 - 22:00 น.',
    
    // Reservation Page
    RESERVE_SUBTITLE: 'จองโต๊ะของคุณเพื่อประสบการณ์การรับประทานอาหารที่น่าจดจำ',
    FORM_NAME: 'ชื่อ',
    FORM_NAME_PLACEHOLDER: 'ชื่อของคุณ',
    FORM_EMAIL: 'อีเมล',
    FORM_EMAIL_PLACEHOLDER: 'email@example.com',
    FORM_PHONE: 'โทรศัพท์',
    FORM_PHONE_PLACEHOLDER: '+66...',
    FORM_DATE: 'วันที่',
    FORM_TIME: 'เวลา',
    FORM_GUESTS: 'จำนวนผู้เข้าร่วม',
    FORM_PERSON: 'คน',
    FORM_PERSONS: 'คน',
    FORM_SUBMIT: 'ยืนยันการจอง',
    
    // Footer
    FOOTER_ADDRESS: '123 ถนนสุขุมวิท กรุงเทพมหานคร ประเทศไทย',
    FOOTER_RIGHTS: '© 2568 Thai Fine Dining สงวนลิขสิทธิ์'
  },
  zh: {
    // Navigation
    NAV_HOME: '首页',
    NAV_MENU: '菜单',
    NAV_ABOUT: '关于我们',
    NAV_EVENTS: '活动',
    NAV_CONTACT: '联系我们',
    NAV_RESERVE: '预订',
    
    // Hero Section
    HERO_TITLE: '体验泰国皇家美食的精髓',
    HERO_SUBTITLE: '正宗风味，优质食材，难忘氛围。',
    BTN_RESERVE: '预订餐桌',
    BTN_MENU: '查看菜单',
    SECTION_HIGHLIGHTS: '特色佳肴',
    
    // Home Page - Dishes
    DISH_TOMYUM: '冬阴功汤',
    DISH_TOMYUM_DESC: '香辣虾汤配柠檬草和高良姜。',
    DISH_PADTHAI: '泰式炒河粉',
    DISH_PADTHAI_DESC: '罗望子酱炒米粉。',
    DISH_GREENCURRY: '绿咖喱',
    DISH_GREENCURRY_DESC: '正宗泰式椰奶绿咖喱。',
    
    // Menu Categories
    MENU_STARTERS: '开胃菜',
    MENU_MAINS: '主菜',
    MENU_DESSERTS: '甜点',
    
    // Menu Items - Starters
    MENU_TOMYUM: '冬阴功汤',
    MENU_TOMYUM_DESC: '香辣虾汤配柠檬草、高良姜和青柠叶。',
    MENU_SATAY: '沙嗲鸡肉串',
    MENU_SATAY_DESC: '烤鸡肉串配花生酱和黄瓜酱。',
    MENU_SOMTUM: '青木瓜沙拉',
    MENU_SOMTUM_DESC: '青木瓜沙拉配花生、虾干和辣椒青柠汁。',
    
    // Menu Items - Mains
    MENU_GREENCURRY: '绿咖喱鸡',
    MENU_GREENCURRY_DESC: '绿咖喱鸡配泰国茄子和罗勒。',
    MENU_PADTHAI: '泰式炒河粉',
    MENU_PADTHAI_DESC: '炒米粉配虾、豆腐、鸡蛋和罗望子酱。',
    MENU_MASSAMAN: '马沙文咖喱',
    MENU_MASSAMAN_DESC: '浓郁温和的咖喱配牛肉、土豆和花生。',
    MENU_SEABASS: '清蒸柠檬鲈鱼',
    MENU_SEABASS_DESC: '清蒸鲈鱼配青柠、大蒜和辣椒酱。',
    
    // Menu Items - Desserts
    MENU_MANGO: '芒果糯米饭',
    MENU_MANGO_DESC: '甜糯米配熟芒果和椰奶。',
    MENU_BUALOY: '椰奶汤圆',
    MENU_BUALOY_DESC: '温热椰奶中的糯米粉汤圆。',
    
    // Events
    EVENT_SONGKRAN_TITLE: '宋干节特别活动',
    EVENT_SONGKRAN_DATE: '2025年4月13-15日',
    EVENT_SONGKRAN_DESC: '用我们独家的7道菜品尝菜单庆祝泰国新年，品尝传统美食。',
    EVENT_JAZZ_TITLE: '爵士与红酒之夜',
    EVENT_JAZZ_DATE: '每周五',
    EVENT_JAZZ_DESC: '享受现场爵士音乐，搭配我们精选的美酒和招牌泰式小吃。',
    EVENT_LOYKRATHONG_TITLE: '水灯节晚宴',
    EVENT_LOYKRATHONG_DATE: '2025年11月27日',
    EVENT_LOYKRATHONG_DESC: '河边的魔幻之夜，特别自助餐和传统水灯漂放仪式。',
    BTN_BOOK_NOW: '立即预订',
    
    // About Page
    SECTION_STORY: '我们的故事',
    ABOUT_STORY_P1: '皇家泰餐厅成立于2025年，将古暹罗美食的正宗风味带入现代世界。我们的食谱代代相传，由皇家厨师传承，确保每道菜都保持泰国美食闻名的微妙风味平衡。',
    ABOUT_STORY_P2: '我们坚信只使用最优质的食材，从本地和泰国采购，打造既奢华又深深植根于传统的用餐体验。',
    ABOUT_CHEF_TITLE: '认识我们的主厨',
    ABOUT_CHEF_NAME: '主厨颂萨',
    ABOUT_CHEF_P1: '主厨颂萨在曼谷和普吉岛的五星级酒店拥有超过20年的经验，为皇家泰餐厅带来了丰富的知识和热情。他的理念很简单：尊重食材，用心烹饪。',
    ABOUT_CHEF_P2: '"烹饪是一种触动灵魂的艺术。我希望每位客人在每一口中都能感受到泰国的温暖和热情好客。"',
    
    // Contact Page
    CONTACT_ADDRESS: '地址',
    CONTACT_PHONE: '电话',
    CONTACT_EMAIL: '邮箱',
    CONTACT_HOURS: '营业时间',
    CONTACT_HOURS_TEXT: '每日：11:00 AM - 10:00 PM',
    
    // Reservation Page
    RESERVE_SUBTITLE: '预订您的餐桌，享受难忘的用餐体验。',
    FORM_NAME: '姓名',
    FORM_NAME_PLACEHOLDER: '您的姓名',
    FORM_EMAIL: '邮箱',
    FORM_EMAIL_PLACEHOLDER: 'email@example.com',
    FORM_PHONE: '电话',
    FORM_PHONE_PLACEHOLDER: '+66...',
    FORM_DATE: '日期',
    FORM_TIME: '时间',
    FORM_GUESTS: '人数',
    FORM_PERSON: '人',
    FORM_PERSONS: '人',
    FORM_SUBMIT: '确认预订',
    
    // Footer
    FOOTER_ADDRESS: '泰国曼谷素坤逸路123号',
    FOOTER_RIGHTS: '© 2025 泰国精致餐厅 版权所有'
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Lang>('en');

  translate = computed(() => DICTIONARY[this.currentLang()]);

  toggleLang() {
    this.currentLang.update(lang => {
      if (lang === 'en') return 'th';
      if (lang === 'th') return 'zh';
      return 'en';
    });
  }

  setLang(lang: Lang) {
    this.currentLang.set(lang);
  }
}
