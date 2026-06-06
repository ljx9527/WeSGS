const statusPanel = document.querySelector(".status-panel");

if (statusPanel) {
  statusPanel.addEventListener("mouseenter", () => {
    statusPanel.dataset.active = "true";
  });

  statusPanel.addEventListener("mouseleave", () => {
    delete statusPanel.dataset.active;
  });
}
