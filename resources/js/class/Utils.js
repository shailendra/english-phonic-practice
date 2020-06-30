this.objLib = this.objLib||{};
(function() {
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	var Utils = function() {	
		this.initialize();
	}
	var p = Utils.prototype;
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	//
	p.relativePath;	
	//
	p.FireFox;
	p.Chrome;
	p.Safari;
	p.Opera;
	p.IE;
	//
	p.browser;
	p.isMobile;
	p.isRandom;
	//	
	//
	p.initialize = function() {
		var This = this;
		//
		this.isRandom = false;
		//
		this.FireFox = "Firfox";
		this.Chrome = "Chrome";
		this.Safari = "Safari";
		this.Opera = "Opera";
		this.IE = "IE";
		//
		//
		//
		this.isMobile = new Object();
		this.isMobile.Android = function() {return navigator.userAgent.match(/Android/i);}
		this.isMobile.BlackBerry = function() {return navigator.userAgent.match(/BlackBerry/i);}
		this.isMobile.iOS = function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);}
		this.isMobile.Opera = function() {return navigator.userAgent.match(/Opera Mini/i);}
		this.isMobile.Windows = function() {return navigator.userAgent.match(/IEMobile/i);}		
		this.isMobile.any = function() {return (This.isMobile.Android() || This.isMobile.BlackBerry() || This.isMobile.iOS() || This.isMobile.Opera() || This.isMobile.Windows());}
		//To check to see if the user is on any of the supported mobile devices:
		/*console.log("this.isMobile.Android() = "+this.isMobile.Android());
		console.log("this.isMobile.BlackBerry() = "+this.isMobile.BlackBerry());
		console.log("this.isMobile.iOS() = "+this.isMobile.iOS());
		console.log("this.isMobile.Opera() = "+this.isMobile.Opera());
		console.log("this.isMobile.Windows() = "+this.isMobile.Windows());
		console.log("this.isMobile.any() = "+this.isMobile.any());*/
		//
		//
		this.setRelativePath();
		this.queryObj = this.getUrlVars();
	}


	p.detectBrowser = function(){
		// if (bowser.msie && bowser.version <= 6) {
		if (bowser.msie) {
			this.browser = this.IE;
		} else if (bowser.firefox){		  
			this.browser = this.FireFox;
		} else if (bowser.chrome){	  
			this.browser = this.Chrome;
		} else if (bowser.safari){  
			this.browser = this.Safari;
		} else if (bowser.opera){  
			this.browser = this.Opera;
		}
	}

	
		
	p.setRelativePath = function(){
		this.relativePath = this.getRelativePath(0);
	}
	p.getUrlVars = function() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	}	
	p.convertStringToVariable = function(str){
		var obj = {}; 
		str.replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
			obj[decodeURIComponent(key)] = decodeURIComponent(value);
		});
		return obj;
	}
	p.getRelativePath = function(BackLevel){
		if (BackLevel==undefined || BackLevel==null) {
			BackLevel=0;
		}
		var TempVar = "\j";
		var UrlString= unescape(window.location.href);
		//
		var TempUrlArray = UrlString.split("/");
		for (var i = -1; i<BackLevel; i++) {
			TempUrlArray.pop();
		}
		var RalativePath = TempUrlArray.join("/")+"/";
		return RalativePath;
	}	
	p.shuffleToArray = function(OldArray) {
        var i = 0;
        var TempArray = new Array();
        while (i < OldArray.length) {
                var ran = Math.floor(Math.random()*OldArray.length);
                TempArray.push(OldArray[ran]);
                OldArray.splice(ran, 1);
        }
        return TempArray;
	}
	objLib.Utils = new Utils();
}());
