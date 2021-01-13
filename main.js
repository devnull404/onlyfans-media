function nextImage() {
	document.getElementsByClassName("pswp__button--arrow--right")[0].click();	
}

function getImage () {
	window.open(document.getElementsByClassName("pswp__img")[1].src, "_blank");
}

links = []

function concatenar(links) {
	for (i = 0; i < document.getElementsByClassName("pswp__img").length; i++) {
		if (!(links.indexOf(document.getElementsByClassName("pswp__img")[i].src) > 0)) {
			links = links.concat(document.getElementsByClassName("pswp__img")[i].src)
		}
	}
	return links;
}

function openImages(links) {
	for (i = 0; i < links.length; i++) {
		window.open(links[i], "_blank")
	}
}

function globalScraper() {
	for (i = 0; i < document.getElementsByClassName("b-photos__item").length-2; i++) {
		setTimeout("links = concatenar(links)", 80*i)
		setTimeout("nextImage()", 80*i)
	}
}
