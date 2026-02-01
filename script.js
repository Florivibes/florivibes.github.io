function openPopup(type) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popup-body");

  if (!popup || !body) return;

  const programs = {
    beauty: `
      <h4>Beauté / Bien-être</h4>
      <p>Formations dédiées au bien-être, soins, relaxation et développement personnel.</p>
    `,
    art: `
      <h4>Art</h4>
      <p>Formations artistiques : scène, musique, expression créative et performance.</p>
    `,
    coach: `
      <h4>Coaching & Management</h4>
      <p>Leadership, coaching, gestion d'équipe, développement personnel.</p>
    `,
    event: `
      <h4>Organisation événementielle</h4>
      <p><strong>Durée :</strong> 35 heures (5 jours)</p>
      <p><strong>Format :</strong> Présentiel ou distanciel</p>
      <p><strong>Public visé :</strong> Adultes en reconversion, salariés, entrepreneurs</p>
      <p><strong>Prérequis :</strong> Aucun</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Analyser un brief client</li>
        <li>Concevoir un événement professionnel</li>
        <li>Établir un budget et un planning</li>
        <li>Coordonner les prestataires</li>
        <li>Anticiper les risques</li>
      </ul>
    `
  };

  body.innerHTML = programs[type];
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (!popup) return;
  popup.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("popup").addEventListener("click", (e) => {
    if (e.target.id === "popup") {
      closePopup();
    }
  });
});


