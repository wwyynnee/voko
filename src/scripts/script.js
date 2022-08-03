// Блок выбора языка
$(".header__menu").hide();

$(".header__active, .header__icon-links, .header__text-links, .header__megalog, .header__little-log").on("click", () => {
  $(".header__active").css("backgroundColor", "#ffffff10");
  $(".header__active").css("borderRadius", "6px");
  $(".header__menu").toggle();
})

$("*").on("click", (e) => {
if ($(e.target).is(".header__active, .header__icon-links, .header__text-links, .header__megalog, .header__little-log")) {
    return false;
  }
  $(".header__active").css("backgroundColor", "transparent");
  $(".header__menu").hide();
})

// Ссылки на странице Условий Использования -> terms.html
$(".main__link-terms").hide();

$("#terms").on("mouseenter", () => {
  $("#terms .main__link-terms").show();
})
$("#use-license").on("mouseenter", () => {
  $("#use-license .main__link-terms").show();
})
$("#disclaimer").on("mouseenter", () => {
  $("#disclaimer .main__link-terms").show();
})
$("#limitations").on("mouseenter", () => {
  $("#limitations .main__link-terms").show();
})
$("#accuracy").on("mouseenter", () => {
  $("#accuracy .main__link-terms").show();
})
$("#links").on("mouseenter", () => {
  $("#links .main__link-terms").show();
})
$("#modifications").on("mouseenter", () => {
  $("#modifications .main__link-terms").show();
})
$("#law").on("mouseenter", () => {
  $("#law .main__link-terms").show();
})
$(".main__title-terms").on("mouseleave", () => {
  $(".main__link-terms").hide();
})