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

      <p><strong>Objectif :</strong><br>
      Concevoir, organiser et piloter un événement professionnel de A à Z.</p>

      <p><strong

