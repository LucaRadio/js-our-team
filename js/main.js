const teamMember = [
    {
        name: "Wayne Barnett",
        image: "img/wayne-barnett-founder-ceo.jpg",
        role: "Founder & CEO"
    },
    {
        name: "Angela Caroll",
        image: "img/angela-caroll-chief-editor.jpg",
        role: "Chief Editor"
    },
    {
        name: "Walter Gordon",
        image: "img/walter-gordon-office-manager.jpg",
        role: "Office Manager"
    },
    {
        name: "Angela Lopez",
        image: "img/angela-lopez-social-media-manager.jpg",
        role: "Social Media Manager"
    },
    {
        name: "Scott Estrada",
        image: "img/scott-estrada-developer.jpg",
        role: "Developer"
    },
    {
        name: "Barbara Ramos",
        image: "img/barbara-ramos-graphic-designer.jpg",
        role: "Graphic Designer"
    }
];

const rowEL = document.querySelector(".row");
let imgEl;
let roleTextEl;
let nameTextEl;

console.log(teamMember);
for (let profile in teamMember) {
    console.log(teamMember[profile]);
}

function createCards() {
    const colEl = document.createElement("div");
    const cardEl = document.createElement("div");
    const bodyCardEl = document.createElement("div");
    imgEl = document.createElement("img");
    roleTextEl = document.createElement("h5")
    nameTextEl = document.createElement("p");

    colEl.classList.add("col-4");
    cardEl.classList.add("card");
    imgEl.classList.add("card-img-top");
    bodyCardEl.classList.add("card-body");
    roleTextEl.classList.add("card-title");
    nameTextEl.classList.add("card-text");
    bodyCardEl.append(roleTextEl, nameTextEl);
    cardEl.append(imgEl, bodyCardEl);
    colEl.append(cardEl);
    rowEL.append(colEl);
}

function cardProfile(teamMember, imgEl, i) {
    imgEl.src = teamMember[i].image;
    nameTextEl.textContent = teamMember[i].name;
    roleTextEl.textContent = teamMember[i].role;
}

for (let i = 0; i < teamMember.length; i++) {
    createCards();
    cardProfile(teamMember, imgEl, i);
}

