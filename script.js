function showFormations() {
  const section = document.getElementById("formations-section");
  if (!section) return;

  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth" });
}

function openPopup(type) {
  const popup = document.getElementById("popup");
  const body = document.getElementById("popup-body");

  if (!popup || !body) return;

  const programs = {
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

      <p><strong>Moyens pédagogiques :</strong><br>
      Supports numériques, études de cas, mises en situation</p>

      <p><strong>Modalités d’évaluation :</strong><br>
      Évaluation continue + étude de cas finale</p>

      <p><strong>Accessibilité :</strong><br>
      Formation accessible aux personnes en situation de handicap – adaptation possible</p>
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

      <p><strong>Moyens pédagogiques :</strong><br>
      Exercices pratiques, vidéos, feedback personnalisé</p>

      <p><strong>Modalités d’évaluation :</strong><br>
      Mises en situation pratiques</p>

      <p><strong>Accessibilité :</strong><br>
      Formation accessible aux personnes en situation de handicap</p>
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

      <p><strong>Moyens pédagogiques :</strong><br>
      Cas pratiques, supports numériques, projet final</p>

      <p><strong>Modalités d’évaluation :</strong><br>
      Projet de communication final</p>

      <p><strong>Accessibilité :</strong><br>
      Formation accessible aux personnes en situation de handicap</p>
    `,

    boost: `
      <h4>Organiser et concevoir un événement musical</h4>

      <p><strong>Durée :</strong> 30 heures (4 jours)</p>
      <p><strong>Format :</strong> Présentiel ou distanciel</p>
      <p><strong>Public visé :</strong> Porteurs de projets, artistes, entrepreneurs culturels</p>
      <p><strong>Prérequis :</strong> Aucun</p>

      <p><strong>Objectifs pédagogiques :</strong></p>
      <ul>
        <li>Concevoir un événement musical</li>
        <li>Structurer un projet artistique</li>
        <li>Organiser la production et la logistique</li>
        <li>Communiquer et promouvoir l’événement</li>
        <li>Évaluer et pérenniser le projet</li>
      </ul>

      <p><strong>Programme :</strong></p>
      <ul>
        <li>Panorama des événements musicaux</li>
        <li>Conception artistique et technique</li>
        <li>Gestion des artistes et prestataires</li>
        <li>Budget, production et billetterie</li>
        <li>Communication et développement</li>
      </ul>

      <p><strong>Moyens pédagogiques :</strong><br>
      Études de cas, supports numériques, mises en situation</p>

      <p><strong>Modalités d’évaluation :</strong><br>
      Projet de conception d’un événement musical</p>

      <p><strong>Accessibilité :</strong><br>
      Formation accessible aux personnes en situation de handicap – adaptation possible</p>
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

