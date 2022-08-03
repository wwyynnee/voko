// Блок выбора языка
$(".header__menu").hide();

let active = ".header__active, .header__block-active";

$(`${active}`).on("click", () => {
  $(".header__active").css("backgroundColor", "#ffffff10");
  $(".header__active").css("borderRadius", "6px");
  $(".header__menu").toggle();
})

$("*").on("click", (e) => {
  if ($(e.target).is(`${active}`)) {
    return false;
  }
  $(".header__active").css("backgroundColor", "transparent");
  $(".header__menu").hide();
})

// Смена темы
$(".footer__theme-dark").on("click", () => {
  $(".footer__theme-dark").toggleClass("footer__theme-light");
  if ( $(".footer__theme-dark").hasClass("footer__theme-light") ) {
    $(".data__title-action-3").attr("data-title", "Включить тёмную тему").show();
    $(".footer__theme-dark").attr("src", "src/icons/light.svg").show();
    $(".footer__theme-dark").removeClass("footer__theme-dark");
  } else {
    $(".data__title-action-3").attr("data-title", "Выключить тёмную тему").show();
    $(".footer__theme-light").attr("src", "src/icons/dark.svg").show();
    $(".footer__theme-light").addClass("footer__theme-dark");
    $(".footer__theme-light").removeClass("footer__theme-light");
  }
})

const btn = document.getElementById("theme-button");
const link = document.getElementById("theme-link");

btn.addEventListener("click", () => {
  ChangeTheme();
});

const ChangeTheme = () => {
  let lightTheme = "src/styles/light.css";
  let darkTheme = "src/styles/dark.css";

  let currTheme = link.getAttribute("href");
  let theme;

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);
}