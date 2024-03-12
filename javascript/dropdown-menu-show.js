const buttons = Array.from(document.getElementsByClassName("dropdown-button"));
let menus = Array.from(document.getElementsByClassName("dropdown-menu"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "header-more-button") {
      menus.forEach((menu) => {
        switch (menu.id) {
          case "more-menu":
            menu.classList.toggle("visible");
            break;
        }
      });
    }
  });
});
