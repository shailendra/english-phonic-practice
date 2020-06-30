this.objLib = this.objLib||{};
(function() {
	//---------------------------------------------------------------------
	//---------------------------------------------------------------------
	var AlphabetScreen = function() {	
		this.initialize();
	}
	var p = AlphabetScreen.prototype = new objLib.BaseScreen();
	p.BaseScreen_initialize = p.initialize;
	p.BaseScreen_unload = p.unload;
	
	//---  V A R I A B L E S  -------------------------------------------------
	//---------------------------------------------------------------------
	p.alphabetHolder;
	p.alphabetArry;
	p.alphabetSubArray;
	p.id;
	p.clickType;
	p.isOverOnSpan;
	//---------------------------------------------------------------------
	p.initialize = function() {
		this.BaseScreen_initialize(); 
		// -----------------------------------
		this.screenName = 'alphabetScreen';
		// -----------------------------------
		this.alphabetHolder = $("#"+this.screenName+" .alphabetHolder");
		this.isOverOnSpan = false;
	}
	p.createObj = function(arr, sound, video){
		for (var i = 0; i < arr.length; i++) {
			arr[i] = {letter:arr[i], sound:sound, video:video}
		}
	}
	p.setUpScreen = function(){
		//

		var This = this;	
		this.id = 0;
		this.dashArray = ["--", "--", "--"];
		this.vowelArray = ["a", "e", "i", "o", "u", "ai", "ay", "ar", "ee", "ea", "er", "ir", "ur", "ie", "_y", "igh", "oi", "oy", "oa", "ow", "oo", "or", "ou", "ue", "ew"];
		this.vowelJoinArray = ["a-e", "i-e", "o-e", "u-e"];
		this.consonant = ["b", "c", "ch", "d", "f", "g", "h", "j", "k", "L", "m", "n", "p", "qu", "r", "s", "sh", "t", "th", "v", "w", "y", "x", "z", "br", "bl", "cr", "cl", "dr", "fl", "fr", "gl", "gr", "kr", "pl", "pr", "sl", "sr", "tr", "thr", "vr", "wr", "st", "str"];
		this.cont_vowel = ["ba","be","bi","bo","bu","bai","bay","bar","bee","bea","ber","bir","bur","bie","by","bigh","boi","boy","boa","bow","boo","bor","bou","bue","bew","ca","ce","ci","co","cu","cai","cay","car","cee","cea","cer","cir","cur","cie","cy","cigh","coi","coy","coa","cow","coo","cor","cou","cue","cew","cha","che","chi","cho","chu","chai","chay","char","chee","chea","cher","chir","chur","chie","chy","chigh","choi","choy","choa","chow","choo","chor","chou","chue","chew","da","de","di","do","du","dai","day","dar","dee","dea","der","dir","dur","die","dy","digh","doi","doy","doa","dow","doo","dor","dou","due","dew","fa","fe","fi","fo","fu","fai","fay","far","fee","fea","fer","fir","fur","fie","fy","figh","foi","foy","foa","fow","foo","for","fou","fue","few","ga","ge","gi","go","gu","gai","gay","gar","gee","gea","ger","gir","gur","gie","gy","gigh","goi","goy","goa","gow","goo","gor","gou","gue","gew","ha","he","hi","ho","hu","hai","hay","har","hee","hea","her","hir","hur","hie","hy","high","hoi","hoy","hoa","how","hoo","hor","hou","hue","hew","ja","je","ji","jo","ju","jai","jay","jar","jee","jea","jer","jir","jur","jy","jigh","joi","joy","joa","jow","joo","jor","jou","jue","jew","ka","ke","ki","ko","ku","kai","kay","kar","kee","kea","ker","kir","kur","kie","ky","kigh","koi","koy","koa","kow","koo","kor","kou","kue","kew","La","Le","Li","Lo","Lu","Lai","Lay","Lar","Lee","Lea","Ler","Lir","Lur","Lie","Ly","Ligh","Loi","Loy","Loa","Low","Loo","Lor","Lou","Lue","Lew","ma","me","mi","mo","mu","mai","may","mar","mee","mea","mer","mir","mur","mie","my","migh","moi","moy","moa","mow","moo","mor","mou","mue","mew","na","ne","ni","no","nu","nai","nay","nar","nee","nea","ner","nir","nur","nie","ny","nigh","noi","noy","noa","now","noo","nor","nou","nue","new","pa","pe","pi","po","pu","pai","pay","par","pee","pea","per","pir","pur","pie","py","pigh","poi","poy","poa","pow","poo","por","pou","pue","pew","qua","que","qui","quo","quai","quay","quar","quee","quea","quer","quir","quie","quy","quigh","quoi","quoy","quoa","quow","quor","quou","quew","ra","re","ri","ro","ru","rai","ray","rar","ree","rea","rer","rur","rie","ry","righ","roi","roy","roa","row","roo","ror","rou","rue","rew","sa","se","si","so","su","sai","say","sar","see","sea","ser","sir","sur","sie","sy","sigh","soi","soy","soa","sow","soo","sor","sou","sue","sew","sha","she","shi","sho","shu","shai","shay","shar","shee","shea","sher","shir","shur","shie","shy","shigh","shoi","shoy","shoa","show","shoo","shor","shou","shue","shew","ta","te","ti","to","tu","tai","tay","tar","tee","tea","ter","tir","tur","tie","ty","tigh","toi","toy","toa","tow","too","tor","tou","tue","tew","tha","the","thi","tho","thu","thai","thay","thar","thee","thea","ther","thir","thur","thie","thy","thigh","thoi","thoy","thoa","thow","thoo","thor","thou","thue","thew","va","ve","vi","vo","vu","vai","vay","var","vee","vea","ver","vir","vur","vie","vy","vigh","voi","voy","voa","vow","voo","vor","vou","vue","vew","wa","we","wi","wo","wu","wai","way","war","wee","wea","wer","wir","wur","wie","wy","wigh","woi","woy","woa","wow","woo","wor","wou","ya","ye","yi","yo","yu","yai","yar","yee","yea","yer","yie","yoa","yoo","yor","you","yue","yew","xa","xe","xo","xu","xai","xay","xee","xea","xer","xur","xie","xy","xoi","xoy","xoa","xor","xou","xue","xew","za","ze","zi","zo","zu","zai","zay","zar","zee","zea","zer","zir","zur","zie","zy","zigh","zoi","zoy","zoa","zow","zoo","zor","zou","zue","zew", "tro","trew","tri","tro","trai","tri","trou","true","tray","tre","troa","troy","troi","try","tra","trea","tre","trie","tru","tree","troo","trigh","wro","wrew","wri","wrai","wrou","wray","wroa","wroy","wroi","wra","flo","flew","fli","flor","flai","flir","flou","flue","flay","fler","floa","floy","floi","fly","fla","flar","flow","flea","fle","flie","flur","flu","flee","floo","fligh","plo","plew","pli","plor","plai","plir","plou","plue","play","pler","ploa","ploy","ploi","ply","pla","plar","plow","plea","ple","plie","plur","plu","plee","ploo","pligh","dro","drew","dri","dror","drai", "drou","drue","dray","drer","droa","droy","droi","dry","dra","drar","drow","drea","dre","drie","drur","dru","dree","droo","drigh","pro","prew","pri","pror","prai","prou","prue","pray","proa","proy","proi","pry","pra","prar","prow","prea","pre","prie","prur","pru","pree","proo","prigh","kro","krew","kri","kror","krai", "krou","krue","kray","krer","kroa","kroy","kroi","kry","kra","krar","krow","krea","kre","krie","krur","kru","kree","kroo","krigh","fro","frew","fri","fror","frai","frou","frue","fray","frer","froa","froy","froi","fry","fra","frar","frow","frea","fre","frie","frur","fru","free","froo","frigh","cro","crew","cri","cror","crai", "crou","crue","cray","crer","croa","croy","croi","cry","cra","crar","crow","crea","cre","crie","crur","cru","cree","croo","crigh","blo","blew","bli","blor","blai","blir","blou","blue","blay","bler","bloa","bloy","bloi","bly","bla","blar","blow","blea","ble","blie","blur","blu","blee","bloo","bligh","slo","slew","sli","slor","slai","slir","slou","slue","slay","sler","sloa","sloy","sloi","sly","sla","slar","slow","slea","sle","slie","slur","slu","slee","sloo","sligh","sro","srew","sri","sror","srai","thro","threw","thri","thrai","throu","thrue","thray","throa","throy","throi","thry","thra","thrar","throw","threa","thre","thrie","thrur","thru","three","throo","thrigh","glo","glew","gli","glor","glai","glir","glou","glue","glay","gler","gloa","gloy","gloi","gly","gla","glar","glow","glea","gle","glie","glur","glu","glee","gloo","gro","grew","gri","grai", "grou","grue","gray", "groa","groy","groi","gry","gra","grar","grow","grea","gre","grie","grur","gru","gree","groo", "clo","clew","cli","clor","clai","clir","clou","clue","clay","cler","cloa","cloy","cloi","cly","cla","clar","clow","clea","cle","clie","clur","clu","clee","cloo","cligh","bro","brew","bri","bror","brai", "brou","brue","bray","brer","broa","broy","broi","bry","bra","brar","brow","brea","bre","brie","brur","bru","bree","broo","brigh" ,"strai","stroi","strur","stree","strer","strea","strie","stray", "strue","stre","stroa", "strigh","stro","stri","strow","stroy","stru","strou","stra","stry","strew","stroo","strar","stai","stoi","stur","stee","ster","stea","stie","stay","stir","stue","ste","stoa","stor","sto","sti","stow","stoy","stu","stou","sta","sty","stew","stoo","star"]

		this.createObj(this.dashArray, "", "");
		this.createObj(this.vowelArray, "sound", "video");
		this.createObj(this.vowelJoinArray, "sound", "video");
		this.createObj(this.consonant, "sound", "video");
		
		this.alphabetArry = [];
		var tempArray = [];
		var  isRandom = this.utils.isRandom;
		
		//---- Random All Alphabet --------------------------------------------------
		if(isRandom){			
			this.vowelArray = baseClass.utils.shuffleToArray(this.vowelArray);
			this.vowelJoinArray = baseClass.utils.shuffleToArray(this.vowelJoinArray);
			this.consonant = baseClass.utils.shuffleToArray(this.consonant);
		}
		this.alphabetArry = this.alphabetArry.concat(this.vowelArray);
		this.alphabetArry = this.alphabetArry.concat(this.dashArray);

		//
		this.alphabetArry = this.alphabetArry.concat(this.vowelJoinArray);
		this.alphabetArry = this.alphabetArry.concat(this.dashArray);

		//
		this.alphabetArry = this.alphabetArry.concat(this.consonant);
		this.alphabetArry = this.alphabetArry.concat(this.dashArray);

		/*tempArray = [];
		for (var i = 0; i < this.consonant.length; i++) {
			for (var j = 0; j < this.vowelArray.length; j++) {
				tempArray.push(this.consonant[i].letter+this.vowelArray[j].letter);
			}
		}
		console.log(tempArray.join('","'));
		this.createObj(tempArray, "", "");
		tempArray = baseClass.utils.shuffleToArray(tempArray);
		this.alphabetArry = this.alphabetArry.concat(tempArray);*/

		this.createObj(this.cont_vowel, "", "")
		this.cont_vowel = baseClass.utils.shuffleToArray(this.cont_vowel);
		this.alphabetArry = this.alphabetArry.concat(this.cont_vowel);

		this.alphabetArry = this.alphabetArry.concat(this.dashArray);
		//---------------------------------------------------------------------------


		function getXY(event){
			if(event.pageX){
				x = event.pageX;
				y = event.pageY;
			}else{
				x = event.originalEvent.targetTouches[0].pageX;
				y = event.originalEvent.targetTouches[0].pageY;
			}
			return {x:x, y:y}
		}
		if(baseClass.utils.isMobile.any()){			
			this.clickType = 'touchstart';
		}else{			
			this.clickType = 'click'
		}
		$("body").unbind(this.clickType);
		$("body").bind(this.clickType, function(event){
			CallFromButton(event);
		});

		
	    $('.alphabetHolder').hover(function(){
	    	 This.isOverOnSpan = true;
	    });
	    $('.alphabetHolder').mouseout(function(){
	    	 This.isOverOnSpan = false;
	    });
	   
		function CallFromButton(event){
			
			var xyObj = getXY(event);
			var bodyHalfWidth = $('body').width()/2;
			if(xyObj.x<=bodyHalfWidth){
				This.showAlphabet(-1);
			}else{					
				This.showAlphabet(1);
			}
		}
		this.showAlphabet(0);
		//
		
		$(".soundBtn").unbind(this.clickType);
		$(".soundBtn").bind(this.clickType, function(event){
			var fileName = "phonic-sound/"+This.alphabetArry[This.id].letter+".mp3";
     		$("#audioA").attr("src",fileName).trigger("play");
     		var audio = document.getElementById('audioA');
     		audio.play();
     		event.stopPropagation();
		});
		$(".videoBtn").unbind(this.clickType);
		$(".videoBtn").bind(this.clickType, function(event){			
			$("#audioA").attr("src","");
			$(".videoHolder").css({display:'block'});
			var fileName = "phonic-sound/"+This.alphabetArry[This.id].letter+".mp4";
  			$("#videoA").attr("src", fileName)
  			$("#videoA").trigger('play');
     		event.stopPropagation();
		});
		$(".videoHolder").unbind(this.clickType);
		$(".videoHolder").bind(this.clickType, function(event){
			$(".videoHolder").css({display:'none'})
			$("#videoA").attr("src", "");
     		event.stopPropagation();
		});
	}

	p.showAlphabet = function(dir){
		//
		if(this.isOverOnSpan){ 
			return;
		}

		this.id+=dir;
		if(this.id>=this.alphabetArry.length){
			this.id = this.alphabetArry.length-1;
		}else if(this.id<0){
			this.id = 0;
		}
		var alphabet = this.alphabetArry[this.id].letter;
		this.alphabetHolder.text(alphabet);
		$(".videoBtn, .soundBtn").css({display:'none'})
		if(this.alphabetArry[this.id].sound=="sound"){
			$(".soundBtn").css({display:'inline'});
		}
		if(this.alphabetArry[this.id].video=="video"){
			$(".videoBtn").css({display:'inline'});
		}

		//console.log(this.id);
		
		//console.log(this.id);
		$(".videoHolder").css({display:'none'});
		$("#videoA").attr("src", "");
		$("#audioA").attr("src","");
		var per = (this.id*100)/this.alphabetArry.length
		$(".progressBar").css({width:per+"%"});
	}

	p.unload = function(){
		$("body").unbind(this.clickType);
		$(".soundBtn").unbind(this.clickType);
		$(".videoBtn").unbind(this.clickType);
		$(".videoHolder").unbind(this.clickType);

		this.BaseScreen_unload();
	}

	//---------------------------------------------------------------------
	objLib.AlphabetScreen = AlphabetScreen;
}());
