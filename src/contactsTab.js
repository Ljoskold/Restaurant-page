const createContacts = () => {
    const containerContacts = document.createElement('div');
    containerContacts.classList.add('container-contacts');

    const box = document.getElementById('box');
    box.appendChild(containerContacts);

    const schedulebox = document.createElement('div');
    schedulebox.id = 'scheduleBox';

    const scheduleBoxHeader = document.createElement('h2');
    scheduleBoxHeader.textContent = 'Available hours';

    const time = document.createElement('p');
    time.innerHTML = 'Monday 12:00 - 01:00 <br> Tuesday 12:00 - 01:00 <br> Wednessday 12:00 - 01:00 <br> Thursday 12:00 - 01:00 <br> Friday 12:00 - 03:00 <br> Saturday 12:00 - 03:00 <br> Sunday 12:00 - 01:00 <br>'

    const mapAndInfo = document.createElement('div');
    mapAndInfo.id = 'mapAndInfo';


    const map = document.createElement('div');
    map.id = 'map';

    const contactsInfo = document.createElement('div');
    contactsInfo.id = 'contactsInfo';

    const contactsInfoP = document.createElement('p')
    contactsInfoP.innerHTML = 'Email: om-resto@mail.com <br> Phone number: +00-(123)-456-78 <br> Location: Earth, Greenland, Snow';


    containerContacts.appendChild(schedulebox);
    containerContacts.appendChild(mapAndInfo);
    schedulebox.appendChild(scheduleBoxHeader);
    schedulebox.appendChild(time);
    mapAndInfo.appendChild(map);
    mapAndInfo.appendChild(contactsInfo);
    contactsInfo.appendChild(contactsInfoP);
}
export default createContacts;
