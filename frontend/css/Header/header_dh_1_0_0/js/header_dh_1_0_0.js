document.getElementById("headerMenuBtn").addEventListener("click", () => {
  document.getElementById("headerSideBar").classList.toggle("show");
  document.getElementById("headerBg").classList.toggle("active");
});
document.getElementById("headerBg").addEventListener("click", () => {
  document.getElementById("headerSideBar").classList.remove("show");
  document.getElementById("headerBg").classList.remove("active");
});

const menuItem = document.querySelectorAll(".header_mz_1_0_0__menuItem");
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
