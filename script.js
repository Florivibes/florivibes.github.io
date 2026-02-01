function openPopup(type) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popup-body");

  if (!popup || !body) return;

  const programs = {
    boost: `
      <h4>Organiser un événement musical</h4>

      <p><strong>Durée :</strong> 8 heures (1 journée)</p>
      <p><strong>Format :</strong> Présentiel ou en ligne interactif</p>
      <p><strong>Tarif proposé :</strong> 300 €/participant</p>
      <p><strong>Public visé :</strong> artistes, managers, organisateurs d’événements, indépendants du secteur musical</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Définir les objectifs d’un événement musical ou d’une sortie d’album</li>
        <li>Construire un plan de communication avant, pendant et après</li>
        <li>Organiser la production (budget, lieux, équipe)</li>
        <li>Créer un calendrier de production</li>
        <li>Évaluer les résultats et capitaliser sur l’expérience</li>
      </ul>

      <p><strong>Programme (8h) :</strong></p>
      <ul>
        <li>Introduction & attentes (0h30)</li>
        <li>Fondamentaux de l’événement musical (1h30)</li>
        <li>Stratégie & planification (2h)</li>
        <li>Communication & promotion (2h)</li>
        <li>Immersion & évaluation (1h)</li>
        <li>Clôture & attestation (1h)</li>
      </ul>
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

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Fondamentaux de l’événementiel</li>
        <li>Gestion de projet</li>
        <li>Logistique & réglementation</li>
        <li>Budgétisation</li>
        <li>Étude de cas pratique</li>
      </ul>
    `,

    scene: `
      <h4>Aptitude à la scène</h4>

      <p><strong>Durée :</strong> 21 heures (3 jours)</p>
      <p><strong>Format :</strong> Présentiel</p>
      <p><strong>Public visé :</strong> Professionnels, artistes, entrepreneurs</p>
      <p><strong>Prérequis :</strong> Aucun</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Développer l’aisance à l’oral</li>
        <li>Maîtriser la voix et la respiration</li>
        <li>Gérer le stress</li>
        <li>Renforcer la présence scénique</li>
      </ul>

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Posture & respiration</li>
        <li>Techniques vocales</li>
        <li>Langage corporel</li>
        <li>Mises en situation filmées</li>
      </ul>
    `,

    com: `
      <h4>Communication événementielle</h4>

      <p><strong>Durée :</strong> 28 heures (4 jours)</p>
      <p><strong>Format :</strong> Présentiel ou distanciel</p>
      <p><strong>Public visé :</strong> Chargés de communication, entrepreneurs</p>
      <p><strong>Prérequis :</strong> Bases en communication appréciées</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Définir une stratégie de communication</li>
        <li>Créer des contenus adaptés</li>
        <li>Utiliser les réseaux sociaux</li>
        <li>Mesurer la performance</li>
      </ul>

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Branding & storytelling</li>
        <li>Plan de communication</li>
        <li>Réseaux sociaux</li>
        <li>Relations presse</li>
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

document.getElementById("popup").addEventListener("click", (e) => {
  if (e.target.id === "popup") {
    closePopup();
  }
});
