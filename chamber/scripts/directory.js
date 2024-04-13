const url = 'https://alicegracee.github.io/wdd230/chamber/data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let companyLogo = document.createElement('img');
        let companyName = document.createElement('h3');
        let membershipLevel = document.createElement('p');
        let companyAddress = document.createElement('p');
        let companyTelephone = document.createElement('p');
        let companyWebsite = document.createElement('p');

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

        cards.appendChild(card);
    });
}

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".selector");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}