function random_imdb_show()
{
	let headers = document.getElementsByClassName("lister-item-header")
	let items = []
	for (let i = 0; i < headers.length; i++) {
	items.push(headers[i].getElementsByTagName("a"));
	}
	let random_number = Math.floor(Math.random()*items.length);
	let item = items[random_number];
	item = item[0];
	URL = item.getAttribute("href");
	window.open(URL, '_blank');
}
random_imdb_show();
