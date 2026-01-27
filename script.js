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
      <h4>Plan de formation</h4>

      <p><strong>Titre :</strong> Organiser un événement musical</p>
      <p><strong>Durée :</strong> 8 heures (1 journée)</p>
      <p><strong>Format :</strong> en présentiel ou en ligne interactif</p>
      <p><strong>Tarif proposé :</strong> 300 €/participant</p>
      <p><strong>Public visé :</strong> artistes, managers, organisateurs d’événements, indépendants du secteur musical</p>

      <h4>🎯 Objectifs pédagogiques</h4>
      <p>À l’issue de la formation, le stagiaire sera capable de :</p>
      <ol>
        <li>Définir clairement ses objectifs pour un événement musical ou une sortie d’album.</li>
        <li>Construire un plan de communication efficace (avant, pendant, après).</li>
        <li>Gérer les aspects pratiques de la production d’un événement (budget, lieux, équipe).</li>
        <li>Créer un calendrier de production adapté à la sortie de l’album.</li>
        <li>Évaluer les résultats de l’événement et capitaliser sur l’expérience.</li>
      </ol>

      <h4>📋 Programme détaillé (8 h)</h4>

      <p><strong>🕐 Module 1 – Introduction (0h30)</strong></p>
      <ul>
        <li>Présentation de la formation et de ses objectifs</li>
        <li>Attentes des participants</li>
        <li>Tour de table rapide des projets personnels</li>
      </ul>

      <p><strong>🧭 Module 2 – Fondamentaux de l’événement musical (1h30)</strong></p>
      <ul>
        <li>Types d’événements musicaux (concerts, showcases…)</li>
        <li>Cadre légal et obligations basiques (assurances, sécurité)</li>
        <li>Identification du public cible</li>
      </ul>
      <p><em>Méthode pédagogique : exposé + Q&A</em></p>

      <p><strong>📅 Module 3 – Stratégie & planification (2h)</strong></p>
      <ul>
        <li>Définir la vision et les objectifs de l’événement</li>
        <li>Construire un rétroplanning et un budget</li>
        <li>Outils simples de gestion de projet</li>
      </ul>
      <p><em>Méthode : ateliers pratiques en petits groupes + livrables concrets</em></p>

      <p><strong>📢 Module 4 – Communication & promotion (2h)</strong></p>
      <ul>
        <li>Stratégie de communication adaptée à une sortie d’album</li>
        <li>Utilisation des réseaux sociaux, e-mailing, newsletters</li>
        <li>Relations presse, partenariats locaux et médias</li>
      </ul>
      <p><em>Méthode : cas pratiques, exemples réels, outils à utiliser</em></p>

      <p><strong>📊 Module 5 – Immersion & évaluation (1h)</strong></p>
      <ul>
        <li>Mise en situation / étude de cas</li>
        <li>Retour d’expérience collaboratif</li>
        <li>Évaluation sous forme de QCM ou livrable (plan de communication + planning)</li>
      </ul>

      <p><strong>🧾 Module 6 – Clôture (1h)</strong></p>
      <ul>
        <li>Synthèse des acquis</li>
        <li>Feedback des participants</li>
        <li>Remise d’une attestation de formation</li>
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
