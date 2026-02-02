function openPopup(type) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popup-body");

  if (!popup || !body) return;

  const programs = {
    evenementiel: `
      <div class="popup-art">
        <img src="img/evenementiel.jpg" alt="Événementiel" class="popup-art-img">
        <h4>Formation Événementiel</h4>
        <p>Créer, organiser et gérer des événements professionnels ou privés.</p>

        <div class="popup-actions">
          <button class="btn" onclick="window.location.href='formations.html'">Voir les formations</button>
          <button class="btn" onclick="window.location.href='brochure.html'">Demandez la brochure !</button>
        </div>
      </div>
    `,
    bienetre: `
      <div class="popup-art">
        <img src="img/bienetre.jpg" alt="Bien-être" class="popup-art-img">
        <h4>Formations Beauté & Bien-être</h4>
        <p>Soins, relaxation, esthétique et développement personnel.</p>

        <div class="popup-actions">
          <button class="btn" onclick="window.location.href='formations.html'">Voir les formations</button>
          <button class="btn" onclick="window.location.href='brochure.html'">Demandez la brochure !</button>
        </div>
      </div>
    `,
    art: `
      <div class="popup-art">
        <img src="img/art-evenementiel.jpg" alt="Art et cinéma" class="popup-art-img">
        <h4>Formations des Arts et du Cinéma</h4>
        <p>Création, scène, cinéma, expression artistique et storytelling.</p>

        <div class="popup-actions">
          <button class="btn" onclick="window.location.href='formations.html'">Voir les formations</button>
          <button class="btn" onclick="window.location.href='brochure.html'">Demandez la brochure !</button>
        </div>
      </div>
    `,
    management: `
      <div class="popup-art">
        <img src="img/management.jpg" alt="Management" class="popup-art-img">
        <h4>Coaching & Management</h4>
        <p>Leadership, gestion d’équipe, coaching et développement professionnel.</p>

        <div class="popup-actions">
          <button class="btn" onclick="window.location.href='formations.html'">Voir les formations</button>
          <button class="btn" onclick="window.location.href='brochure.html'">Demandez la brochure !</button>
        </div>
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

