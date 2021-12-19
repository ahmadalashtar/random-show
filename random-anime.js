function random_show() {
  let container = document.getElementsByClassName("ddmcc");
  container = container[0];
  items = container.getElementsByTagName("a");
  let random_number = Math.floor(Math.random()*items.length);
  let item = items[random_number];
  let URL = item.getAttribute("href");
  window.open(URL, '_blank');
}
random_show();
