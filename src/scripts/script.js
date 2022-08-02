// Блок выбора языка
$(".header__menu").hide();

const openMenu = () => {
  $(".header__active").css("backgroundColor", "#ffffff10");
  $(".header__menu").show();
}

const closeMenu = () => {
  $(".header__active").css("backgroundColor", "transparent");
  $(".header__menu").hide();
}

// Ссылки на странице Условий Использования -> terms.html
$(".main__link-terms").hide();

$("#terms" || "#use-license" || "#disclaimer" || "#limitations" || "#accuracy" || "#links" || "#modifications" || "#law").on("mouseenter", () => {
  $("#terms .main__link-terms").show();
})
$(".main__title-terms").on("mouseleave", () => {
  $(".main__link-terms").hide();
})