document.getElementsByClassName("pswp__img")[1].src
document.getElementsByClassName("pswp__button--arrow--right")[0].click()
document.getElementsByClassName("pswp__button--arrow--left")[0].click()


function nextImage() {
	document.getElementsByClassName("pswp__button--arrow--right")[0].click();	
}


function getImage () {
	window.open(document.getElementsByClassName("pswp__img")[1].src, "_blank");
}

function aux() {
	getImage()
}

function scrap() {
	netxImage()
	setTimeout("getImage()", 80)
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

function rollEver() {
	i = 0
	flag = true
	while (flag) {
		setTimeout("nextImage()", 100*i)
		setTimeout("console.log(100*i)", 100*i)
		i = i+1
		if (i>200) {flag = false}
	}
}