document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".footer-nav button");
  const sections = document.querySelectorAll("main .section");
  const moreLinks = document.querySelectorAll(".more-link");
  const backButtons = document.querySelectorAll(".back-btn");

  // Function to switch active section
  function showSection(sectionId) {
    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === sectionId);
    });
    // Update footer button state only if targeting main sections
    navButtons.forEach(btn => {
      btn.classList.toggle("active-btn", btn.getAttribute("data-target") === sectionId);
    });
  }

  // Footer nav button events
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      showSection(target);
    });
  });

  // More links events for sub-sections
  moreLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      showSection(target);
    });
  });

  // Back buttons return to More section
  backButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showSection("more");
    });
  });

  // Dummy functions for comparison and player state actions
  document.getElementById("compareTeams").addEventListener("click", () => {
    const team1 = document.getElementById("team1").value;
    const team2 = document.getElementById("team2").value;
    alert(`Comparing teams: ${team1} vs ${team2}`);
  });

  document.getElementById("comparePlayers").addEventListener("click", () => {
    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;
    alert(`Comparing players: ${player1} vs ${player2}`);
  });

  document.getElementById("viewPlayerStats").addEventListener("click", () => {
    const selectedYear = document.getElementById("yearSelect").value;
    document.getElementById("playerStatsResult").innerHTML = `
      <p>Player records for ${selectedYear}:<br>
      - Runs, Matches, Average, Strike Rate<br>
      - Highest Score, Half-Centuries, Centuries<br>
      - Player Ranking, etc.</p>
    `;
  });

  // Initial Section Display
  showSection("home");

  // Check internet connectivity and display a popup if offline
  const offlineModal = document.getElementById("offlineModal");
  const closeModal = document.querySelector(".modal .close");

  function updateOnlineStatus() {
    if (!navigator.onLine) {
      offlineModal.style.display = "block";
    } else {
      offlineModal.style.display = "none";
    }
  }

  // Check on initial load and on changes
  updateOnlineStatus();
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);

  // Allow user to close the modal manually
  closeModal.addEventListener("click", () => {
    offlineModal.style.display = "none";
  });
});
