function showFormations() {
  const section = document.getElementById("formations-section");

  if (!section) {
    console.error("Section formations introuvable");
    return;
  }

  section.classList.remove("hidden");

  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}
