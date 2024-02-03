import './styles.css';
import createMenu from './menuTab';
import createContacts from './contactsTab';


const createNavbar = () => {
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    
    const mainBtn = document.createElement('button');
    mainBtn.classList.add('nav-buttons');
    mainBtn.id = 'main';
    mainBtn.textContent = 'MAIN';
    
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-buttons');
    menuBtn.id = 'menu';
    menuBtn.textContent = 'MENU';
    
    const contactsBtn = document.createElement('button');
    contactsBtn.classList.add('nav-buttons');
    contactsBtn.id = 'contacts';
    contactsBtn.textContent = 'CONTACTS';
    
    const logo = document.createElement('h1');
    logo.id = 'logo';
    logo.textContent = 'OM';

    navbar.appendChild(logo);
    navbar.appendChild(mainBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactsBtn);
    document.body.appendChild(navbar);

    const buttons = document.querySelectorAll('.nav-buttons');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });


    mainBtn.addEventListener('click', () => {
            clear();
            initMainPage();
    });

    menuBtn.addEventListener('click', () => {
        clear();
        createMenu();
    });

    contactsBtn.addEventListener('click', () => {
        clear();
        createContacts();
    });

    return {navbar, menuBtn, mainBtn, contactsBtn};
}

const createBox = () => {
    const box = document.createElement('div');
    box.id = 'box';
    document.body.appendChild(box);
    return box;
}

const createHero = () => {
    const hero = document.createElement('div');
    hero.id = 'hero';
    hero.classList.add('container');

    const heroImg = document.createElement('div');
    heroImg.id = 'heroImg';

    const heroText = document.createElement('h1');
    heroText.id = 'heroText';
    heroText.textContent = 'Savor the extraordinary. Embrace the plant-powered revolution. Welcome to a dining experience that transcends expectations — where every dish tells a story, and every flavor is a revelation."';

    const heroBtn = document.createElement('button');
    heroBtn.id = 'heroBtn';
    heroBtn.textContent = 'Explore our full menu';

    heroBtn.addEventListener('click', () => {
        clear();
        createMenu();
    })

    hero.appendChild(heroImg);
    hero.appendChild(heroText);
    hero.appendChild(heroBtn);
  
        
    return {hero, heroBtn};
}

const createContent = () => {
    const content = document.createElement('div');
    content.id = 'content';
    content.classList.add('container');

    const contentHeader = document.createElement('h1');
    contentHeader.id = 'contentHeader';
    contentHeader.textContent = 'Our menu';

    const contentImg = document.createElement('div');
    contentImg.id = 'contentImg';

    const contentMenu = document.createElement('div');
    contentMenu.id = 'contentMenu';

    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = '\u2014' +' Drinks ' + '\u2014';

    const mainCourseHeader = document.createElement('h2');
    mainCourseHeader.textContent = '\u2014'+ ' Main Course '+'\u2014';

    const oatLatte = document.createElement('p');
    oatLatte.textContent = 'Oatmilk Latte ____________________________5$';

    const smoothie = document.createElement('p');
    smoothie.textContent = 'Green smothie ___________________________ 8$';

    const mashed = document.createElement('p');
    mashed.textContent = 'Pesto mash  _____________________________20$';

    const healthyBowl = document.createElement('p');
    healthyBowl.textContent = 'Vegan bowl _____________________________15$';

    const springRolls = document.createElement('p');
    springRolls.textContent = 'Spring rolls _____________________________12$';

    const veganTacos = document.createElement('p');
    veganTacos.textContent = 'Super  tacos _____________________________18$';

    content.appendChild(contentHeader);
    content.appendChild(contentImg);
    content.appendChild(contentMenu);
    contentMenu.appendChild(drinksHeader);
    contentMenu.appendChild(oatLatte);
    contentMenu.appendChild(smoothie);
    contentMenu.appendChild(mainCourseHeader);
    contentMenu.appendChild(mashed);
    contentMenu.appendChild(healthyBowl);
    contentMenu.appendChild(springRolls);
    contentMenu.appendChild(veganTacos);
    return content;
}

const createInfo = () => {
    const info = document.createElement('div');
    info.id = 'info';
    info.classList.add('container');

    const infoHeader = document.createElement('h1');
    infoHeader.textContent = 'Our philosophy';

    const infoPar = document.createElement('p');
    infoPar.textContent = '"At Om, we embrace a philosophy centered around the profound impact of plant-based eating on both personal well-being and the planet. We believe that the choices we make about the food we consume play a crucial role in shaping a healthier and more sustainable future. Join us on a journey towards a compassionate and eco-friendly lifestyle, where every meal is a celebration of nourishing both your body and the world around you."'
    
    info.appendChild(infoHeader);
    info.appendChild(infoPar);

    
    return info;
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.id = 'footer';

    const footerText = document.createElement('a');
    footerText.textContent = 'Ljoskold';
    footerText.href = 'https://github.com/Ljoskold/Restaurant-page.git';

    footer.appendChild(footerText); 
    document.body.appendChild(footer);
    return footer;
}

const initMainPage = () => {
    createHero();
    createContent();
    createInfo();
    
    const box = document.querySelector('#box');
    box.classList.add('main-box');

    box.appendChild(createHero().hero);
    box.appendChild(createContent());
    box.appendChild(createInfo());
};

function clear() {
    const box = document.querySelector('#box')
    box.innerHTML = "";
}

createNavbar();
createBox();
createFooter();
initMainPage();




export default createNavbar;


