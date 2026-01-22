function showFormations() {
  const section = document.getElementById("formations-section");
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth" });
}

function openPopup(type) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popup-body");

  const programs = {
    event: `
      <h4>Organisation événementielle</h4>

      <p><strong>Durée :</strong> 35 heures (5 jours)</p>
      <p><strong>Format :</strong> Présentiel ou distanciel</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Analyser un brief client</li>
        <li>Concevoir un événement professionnel</li>
        <li>Établir un budget et un rétroplanning</li>
        <li>Coordonner les prestataires</li>
        <li>Anticiper les risques</li>
      </ul>

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Introduction à l’événementiel</li>
        <li>Méthodologie de gestion de projet</li>
        <li>Logistique, sécurité et réglementation</li>
        <li>Budgétisation et suivi financier</li>
        <li>Étude de cas pratique</li>
      </ul>

      <p><strong>Modalités d’évaluation :</strong><br>
      Évaluation continue + étude de cas finale</p>
    `,

    scene: `
      <h4>Aptitude à la scène</h4>

      <p><strong>Durée :</strong> 21 heures (3 jours)</p>
      <p><strong>Format :</strong> Présentiel</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Développer l’aisance à l’oral</li>
        <li>Maîtriser la respiration et la voix</li>
        <li>Gérer le stress et les émotions</li>
        <li>Renforcer la présence scénique</li>
      </ul>

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Posture et respiration</li>
        <li>Techniques vocales</li>
        <li>Langage corporel</li>
        <li>Mises en situation filmées</li>
        <li>Feedback personnalisé</li>
      </ul>

      <p><strong>Modalités d’évaluation :</strong><br>
      Mises en situation pratiques</p>
    `,

    com: `
      <h4>Communication événementielle</h4>

      <p><strong>Durée :</strong> 28 heures (4 jours)</p>
      <p><strong>Format :</strong> Présentiel ou distanciel</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Définir une stratégie de communication</li>
        <li>Créer des contenus adaptés</li>
        <li>Utiliser les réseaux sociaux</li>
        <li>Optimiser la visibilité d’un événement</li>
      </ul>

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Branding et storytelling</li>
        <li>Plan de communication</li>
        <li>Réseaux sociaux et relations presse</li>
        <li>Analyse des performances</li>
      </ul>

      <p><strong>Modalités d’évaluation :</strong><br>
      Projet de communication final</p>
    `
  };

  body.innerHTML = programs[type];
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

