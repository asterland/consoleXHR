(function(){
	var _XMLHttpRequest	= window.XMLHttpRequest;

	window.XMLHttpRequest = function () {
		var xhr = new _XMLHttpRequest();
		xhr.addEventListener("readystatechange", function(response){
			if(this.readyState == 4){
				if(console && console.groupCollapsed){
					console.groupCollapsed("XHR response");
				}
				if(this.responseText){
					if(this.responseXML){
						console.dir(this.responseXML);
					} else {
						try{
							var jsonResponse = JSON.parse(this.responseText);
							if(console && console.dir){
								console.dir(jsonResponse);
							}
						} catch(ex) {
							if(console && console.dir){
								console.log(this.responseText);
							}
						}
					}
				}
				if(console && console.groupEnd){
					console.groupEnd();
				}
			}
		});
		return xhr;
	}
})();