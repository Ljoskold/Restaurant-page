
 const createMenu = () => {
    const container = document.createElement('div');
    container.id = 'container';

    const box = document.getElementById('box');
    box.appendChild(container);

    
    container.appendChild(createMenuItem(
        'Oatmilk Latte',
        'Fresh arabica coffee beans with creamy oatmilk!',
        'oatmilklatte'
    ));
    container.appendChild(createMenuItem(
        'Green smoothie',
        'Cucumber, celery, avocado, lime juice, coconut water',
        'greensmoothie'
    ));
    container.appendChild(createMenuItem(
        'Pesto Mash',
        'Mashed potato with pesto sauce on top, nuts and flowers',
        'pestomash'
    ));
    container.appendChild(createMenuItem(
        'Super Tacos',
        'Our home tacos filled with sliced avocado, onion and corn served with plant-based sour cream',
        'supertacos'
    ));
    container.appendChild(createMenuItem(
        'Vegan Bowl',
        'Healthy bowl in middeterian style served with fresh salad and fried peas',
        'veganbowl'
    ));
    container.appendChild(createMenuItem(
        'Spring rolls',
        'Rolls filled with fresh greens served with peanut sauce',
        'springrolls'
    ));

 }

 function createMenuItem (name, description, jpg){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const textInfo = document.createElement('div');
    textInfo.classList.add('text-info');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemImg = document.createElement('img');
    itemImg.src = `./images/${jpg}.jpg`;
    menuItem.appendChild(textInfo);
    textInfo.appendChild(itemName);
    textInfo.appendChild(itemDescription);
    menuItem.appendChild(itemImg);

    return menuItem;
 }

 export default createMenu;
