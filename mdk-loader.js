// 				MDK loader V1.0 author by Maroot D Khongrod
function showLoading() {
	hideLoading();
	var loader = document.createElement("div");
	loader.setAttribute("id", "mdk-loader");
	document.body.appendChild(loader)
	document.body.classList.add("no-scroll");
	document.body.classList.add("loading");
}
function hideLoading() {
	var loader = document.getElementById("mdk-loader");
	if(loader !== null){
		loader.parentNode.removeChild(loader);
		document.body.classList.remove("no-scroll");
		document.body.classList.remove("loading");
	}
}
