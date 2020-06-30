this.objLib = this.objLib||{};
var baseClass;
(function() {
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	var Base = function() {	
		this.initialize();
	}
	var p = Base.prototype;
	//var p = AcrylicColourBrush.prototype;
	//var p = AcrylicColourBrush.prototype = new camlinLib.DrawingToolAcrylicBase();
	//p.DrawingToolAcrylicBase_initialize = p.initialize;
	
	//---  V A R I A B L E S  -------------------------------------------------
	p.currentScreen;
	p.utils;
	p.facebookLogin;
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	p.initialize = function() {
		//this.DrawingToolAcrylicBase_initialize();
		var This = this;
		//---------------------------------	
		this.utils =  objLib.Utils;		
		this.currentScreen = null;
		baseClass = this;
		//
		/*if(this.utils.isMobile.any()){
			if ( ! Detector.webgl ){
				this.showScreen(objLib.UnsupportScreen);
			} else{
				this.showScreen(objLib.PlayGroundScreen);
			}			
		}else{
			this.showScreen(objLib.DeskTopScreen);
		}*/
		this.showScreen(objLib.LandingScreen);
		//this.showScreen(objLib.FormScreen);
		//this.showScreen(objLib.GameScreen);

		
		
		//
		/*document.ontouchmove = function(event){
		   event.preventDefault();
		}*/
		document.addEventListener("touchmove", function(event){
			if($(".tncDiv").css("display")=="block"){
			}else{
				event.preventDefault();
			}
		  
		}, false);

		$(window).bind('resize', function(e){This.onResize(e)});
		this.onResize();
	}
	p.touchMovePreventPageScroll = function(){

	}
	p.onResize = function(e){
		var inWidth = $(window).innerWidth();
		var inHeight = $(window).innerHeight();
		var gameWraper = $(".gameWraper");
		var screens = $(".screen");
		
		
		gameWraper.width(inWidth);
		gameWraper.height(inHeight);
		screens.width(inWidth);
		screens.height(inHeight);		
	}
	p.showScreen = function(screenName){
		TweenLite.set('.gameWraper', {display:'block'});
		this.hideAllScreen();
		this.currentScreen = new screenName();
		this.currentScreen.baseClass = this;
		TweenLite.set('#'+this.currentScreen.screenName, {display:'block'});		
		this.currentScreen.setUpScreen();
		this.onResize();
	}
	p.hideAllScreen = function(){
		if(this.currentScreen){
			this.currentScreen.unload();
		}		
		TweenLite.set('.screen', {display:'none'});		
	}
	
	//---------------------------------------------------------------------
	objLib.Base = Base;
}());
var baseClass;
$(window).load(onWindowLoad);
function onWindowLoad(){
	baseClass = new objLib.Base();
}
