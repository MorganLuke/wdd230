const close = document.querySelector("#close");
const banner = document.querySelector("#weatherAlert");

close.addEventListener("click", () => {
  banner.style.display = "none";
});
