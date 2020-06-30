this.objLib = this.objLib||{};
(function() {
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	var BaseScreen = function() {	
	}
	var p = BaseScreen.prototype;
	//var p = AcrylicColourBrush.prototype;
	//var p = AcrylicColourBrush.prototype = new camlinLib.DrawingToolAcrylicBaseScreen();
	//p.DrawingToolAcrylicBaseScreen_initialize = p.initialize;
	
	//---  V A R I A B L E S  -------------------------------------------------
	p.baseClass;
	p.utils;
	p.screenName;
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	p.initialize = function() {
		// this.DrawingToolAcrylicBaseScreen_initialize();
		// var This = this;
		//---------------------------------	
		this.utils = objLib.Utils;	
		// console.log("BaseScreen");
	}
	p.setUpScreen = function(){
		// for extend
	}
	p.unload = function(){
		this.baseClass = null;
		this.utils = null;
	}
	//---------------------------------------------------------------------
	objLib.BaseScreen = BaseScreen;
}());
