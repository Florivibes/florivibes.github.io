function openPopup(type) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popup-body");

  if (!popup || !body) return;

  const programs = {
    evenementiel: `
      <div class="popup-art">
        <img src="img/evenementiel.jpg" alt="Événementiel" class="popup-art-img">

        <h4>Organisation événementielle</h4>
        <p><strong>Durée :</strong> 35 heures (5 jours)</p>
        <p><strong>Format :</strong> Présentiel ou distanciel</p>
        <p><strong>Public visé :</strong> Adultes en reconversion, salariés, entrepreneurs</p>
        <p><strong>Prérequis :</strong> Aucun</p>
        <p><strong>Objectifs :</strong></p>
        <ul>
          <li>Analyser un brief client</li>
          <li>Concevoir un événement professionnel</li>
          <li>Établir un budget et un planning</li>
          <li>Coordonner les prestataires</li>
          <li>Anticiper les risques</li>
        </ul>
      </div>
    `,
    bienetre: `
      <div class="popup-art">
        <img src="img/bienetre.jpg" alt="Bien-être" class="popup-art-img">

        <h4>Beauté / Bien-être</h4>
        <p>Formations pour le bien-être, soins, relaxation et développement personnel.</p>
      </div>
    `,
    art: `
      <div class="popup-art">
        <img src="img/art-evenementiel.jpg" alt="Art et événementiel" class="popup-art-img">

        <h4>Art</h4>
        <p>Formations artistiques, musique, scène, expression créative.</p>
      </div>
    `,
    management: `
      <div class="popup-art">
        <img src="img/management.jpg" alt="Management" class="popup-art-img">

        <h4>Coaching & Management</h4>
        <p>Formations en leadership, management, coaching et gestion d’équipe.</p>
      </div>
    `
  };

  body.innerHTML = programs[type] || "Formation non trouvée";
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (!popup) return;
  popup.classList.add("hidden");
}

document.getElementById("popup").addEventListener("click", (e) => {
  if (e.target.id === "popup") {
    closePopup();
  }
});
