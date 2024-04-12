const urlMembers = 'https://alicegracee.github.io/wdd230/chamber/data/members.json';

const spotlights = document.querySelector('#spotlights');

var data = {};

async function getMemberData() {
    const response = await fetch(urlMembers);
    data = await response.json();
}

const displaySpotlights = async () => {
    await getMemberData();

    data.members = data.members.filter(member => member.membership == "Gold" || member.membership == "Silver");

    // source: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
    data.members = data.members.sort(() => .5 - Math.random()).slice(0, 3);

    data.members.forEach(member => {

        const card = document.createElement('section');
        const companyLogo = document.createElement('img');
        const companyName = document.createElement('h4');
        const membershipLevel = document.createElement('p');
        const companyAddress = document.createElement('p');
        const companyTelephone = document.createElement('p');
        const companyWebsite = document.createElement('p');

        companyLogo.setAttribute('src', member.logo);
        companyLogo.setAttribute('alt', member.alt);
        companyLogo.setAttribute('loading', 'lazy');
        companyLogo.setAttribute('width', '250');
        companyLogo.setAttribute('height', '300');

        companyName.textContent = `${member.name}`;

        membershipLevel.textContent = `Membership level: ${member.membership}`;
        companyAddress.textContent = member.address;
        companyTelephone.textContent = member.phone;
        companyWebsite.textContent = member.website;

        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(companyAddress);
        card.appendChild(companyTelephone);
        card.appendChild(companyWebsite);
        card.appendChild(membershipLevel);

        spotlights.appendChild(card);
    });
}

displaySpotlights();