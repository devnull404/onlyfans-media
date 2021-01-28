const NEXT = "pswp__button--arrow--right";
const PREV = "pswp__button--arrow--left";
const IMG = "pswp__img";
const IMG_CONTAINER = "b-photos__item"

let links = []

function nextImage() {
	document.getElementsByClassName(NEXT)[0].click();	
}

function getImage () {
	window.open(document.getElementsByClassName(IMG)[1].src, "_blank");
}



function concatenar(links) {
	for (i = 0; i < document.getElementsByClassName(IMG).length; i++) {
		if (!(links.indexOf(document.getElementsByClassName(IMG)[i].src) >= 0)) {
			links = links.concat(document.getElementsByClassName(IMG)[i].src)
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
	for (i = 0; i < document.getElementsByClassName(IMG_CONTAINER).length-2; i++) {
		setTimeout("links = concatenar(links)", 80*i)
		setTimeout("nextImage()", 80*i)
	}
}


function deleteSingleThumbnail(element) {
	document.getElementsByClassName("b-photos__item__img")[element].src = ""
}

function deleteAllThumbnails() {
	for (let i = 0; i < document.getElementsByClassName("b-photos__item").length; i++) {
		deleteSingleThumbnail(i)
	}
}