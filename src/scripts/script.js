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