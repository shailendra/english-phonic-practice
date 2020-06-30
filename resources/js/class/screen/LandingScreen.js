this.objLib = this.objLib||{};
(function() {
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	var LandingScreen = function() {	
		this.initialize();
	}
	var p = LandingScreen.prototype = new objLib.BaseScreen();
	p.BaseScreen_initialize = p.initialize;
	p.BaseScreen_unload = p.unload;
	
	//---  V A R I A B L E S  -------------------------------------------------
	//---------------------------------------------------------------------
	p.startBtn;
	p.startRandomBtn;
	//---------------------------------------------------------------------
	p.initialize = function() {
		this.BaseScreen_initialize();
		// ----------------------------------
		this.screenName = 'landingScreen';
		// ----------------------------------
		this.startBtn = $("#"+this.screenName+" .startBtn");
		this.startRandomBtn = $("#"+this.screenName+" .startRandomBtn");

	}
	p.setUpScreen = function(){
		//
		var This = this;

		this.startBtn.unbind('click');	
		this.startBtn.bind('click', function(e){
			This.utils.isRandom = false;
			This.onStartBtnClick({isRandom:false});
		});
		this.startRandomBtn.unbind('click');	
		this.startRandomBtn.bind('click', function(e){
			This.utils.isRandom = true;
			This.onStartBtnClick({isRandom:true});
		});
	}

	p.onStartBtnClick = function(prop){
		var This = this;
		console.log("ok");
		setTimeout(function(){
			baseClass.showScreen(objLib.AlphabetScreen);
		}, 100)
		
		
	}
	p.unload = function(){
		this.startBtn.unbind('click');
		//		
		this.BaseScreen_unload();
	}

	//---------------------------------------------------------------------
	objLib.LandingScreen = LandingScreen;
}());

