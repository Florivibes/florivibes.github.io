function showFormations() {
  document.getElementById("formations-section").classList.remove("hidden");
}

const packs = {
  formation1: {
    title: "FORMATION WEB",
    duration: "35h / 1 semaine",
    list: ["HTML & CSS", "JavaScript", "Responsive", "Projet final"]
  },
  formation2: {
    title: "FORMATION MARKETING",
    duration: "35h / 1 semaine",
    list: ["Instagram", "Facebook", "Stratégie", "Analyse"]
  },
  formation3: {
    title: "FORMATION GESTION",
    duration: "35h / 1 semaine",
    list: ["Organisation", "Budget", "Planification", "Suivi"]
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDuration = document.getElementById("modal-duration");
const modalList = document.getElementById("modal-list");

function showDetails(id) {
  const data = packs[id];

  modalTitle.innerText = data.title;
  modalDuration.innerText = data.duration;

  modalList.innerHTML = "";
  data.list.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    modalList.appendChild(li);
  });

  modal.style.display = "flex";
}

document.querySelector(".close-btn").addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
