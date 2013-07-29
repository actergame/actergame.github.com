(function(){

var ns = Q.use("sanguo"),game = ns.game;
var heroSelectView = ns.heroSelectView = function(container)
{
	this.container = container;
	this.load();
};
heroSelectView.prototype.load = function()
{
	var imgLoader = new Q.ImageLoader();
	imgLoader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
	imgLoader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
	imgLoader.load(ns.R.HeroSelectSources);
};
heroSelectView.prototype.onLoadLoaded = function(e)
{
	//console.log('sadf');
}
heroSelectView.prototype.onLoadComplete = function(e)
{
	e.target.removeAllEventListeners();
	this.init(e.images);
}
heroSelectView.prototype.init = function(images)
{
	var me = this;
	ns.R.initHeroSelect(images);
	this.bg = new Q.Bitmap({id:"bg",image:ns.R.regbg, transformEnabled:false});
	this.herobg = new Q.Bitmap({id:"herobg",image:ns.R.reghero, transformEnabled:false});
	this.herotype = new Q.Bitmap({id:"herotype",image:ns.R.herotype,x:135,y:465,rect:[0,0,61,31],transformEnabled:false});
	this.heroms = new Q.Bitmap({id:"heroms",image:ns.R.heroms,x:15,y:510,rect:[0,0,691,84],transformEnabled:false});
	this.regbtn = new Q.Button(ns.R.regbtn);
	this.regbtn.on("mousedown",function(e){
		console.log(me.hero.humantype);
		alert("you  select the hero"+me.hero.humantype);
	});
	/*this.regbtn.onEvent = function(e)
	{
		
		if(e.type == ns.game.events[0])
		{
			console.log(me.hero.humantype);
			//alert("you  select the hero"+game.hero.humantype);
		}
	}*/

	this.hero = new Q.MovieClip(ns.R.hero1);
	this.hero.x = -15;
	this.hero.y = 190;
	this.hero.humantype = 1;

	this.talk = new Q.MovieClip(ns.R.talk1);
	this.talk.x = 100;
	this.talk.y = 70;

	this.star = new Q.MovieClip(ns.R.star1);

	this.star.x = 670;
	this.star.y = 208;

	this.selectBtn = new Q.Bitmap({id:"selectBtn",image:ns.R.selectBtn,x:267,y:187,transformEnabled:false});

	this.heroContainer = new Q.DisplayObjectContainer({id:"heroContainer",x:280,y:200,width:370,height:180,eventChildren:false,
		transformEnabled:false,useHandCursor:true});
	this.heroContainer.on("mousedown",function(e){
		if(e.eventX < 374 )
			{
				if(e.eventY > 270)
				{
					
					me.selectBtn.y = 272;				
					me.hero.setDrawable(ns.R.hero2.image);
					me.talk.setDrawable(ns.R.talk2.image);
					humantype = 2;
				}else{
					me.selectBtn.y = 187;
					me.hero.setDrawable(ns.R.hero1.image);
					me.talk.setDrawable(ns.R.talk1.image);
					
					humantype = 1;
				}
				me.selectBtn.x = 267;
				me.star.setDrawable(ns.R.star1.image);

				//console.log(me.herotype);
				me.herotype.setRect([0,0,61,31]);

				me.heroms.rectY = 0;
			}else if(e.eventX > 374 && e.eventX < 464){
				hX = 61;
				hY = 87;
				if(e.eventY > 270)
				{
					me.selectBtn.y = 272;

					me.hero.setDrawable(ns.R.hero4.image);
					me.talk.setDrawable(ns.R.talk4.image);
					
					humantype = 4; 
				}else{
					me.selectBtn.y = 187;

					me.hero.setDrawable(ns.R.hero3.image);
					me.talk.setDrawable(ns.R.talk3.image);
					
					humantype = 3;
				}
				me.selectBtn.x = 357;
				me.star.setDrawable(ns.R.star2.image);
				me.herotype.setRect([61,0,61,31]);
				//me.herotype.rectX=61;
				me.heroms.rectY = 87;
			}else if(e.eventX >464 && e.eventX < 554)
			{
				hX = 122;
				hY = 174;
				if(e.eventY > 270)
				{
					me.selectBtn.y = 272;

					me.hero.setDrawable(ns.R.hero6.image);
					me.talk.setDrawable(ns.R.talk6.image);
					
					humantype = 6;
				}else{
					me.selectBtn.y = 187;

					me.hero.setDrawable(ns.R.hero5.image);
					me.talk.setDrawable(ns.R.talk5.image);
					
					humantype = 5;
				}
				me.selectBtn.x = 447;
				me.star.setDrawable(ns.R.star3.image);
				me.herotype.setRect([122,0,61,31]);
				me.heroms.rectY = 174;
			}
			else if(e.eventX >554)
			{
				hX = 183;
				hY = 262;
				if(e.eventY > 270)
				{
					me.selectBtn.y = 272;

					me.hero.setDrawable(ns.R.hero8.image);
					me.talk.setDrawable(ns.R.talk8.image);
					
					humantype = 8;
				}else{
					me.selectBtn.y = 187;

					me.hero.setDrawable(ns.R.hero7.image);
					me.talk.setDrawable(ns.R.talk7.image);
					
					humantype = 7;
				}
				me.selectBtn.x = 537;
				me.star.setDrawable(ns.R.star4.image);
				me.herotype.setRect([183,0,61,31]);
				me.heroms.rectY = 262;
			}

			me.container.removeChild(me.selectBtn);
			me.container.addChild(me.selectBtn);
			
		    me.hero.humantype = humantype;
		    
			me.hero.addFrame(ns.R.hero1.frames);
			me.hero.gotoAndPlay(0);

			me.star.addFrame(ns.R.star1.frames);
			me.star.gotoAndPlay(0);

			me.talk.addFrame(ns.R.talk1.frames);
			me.talk.gotoAndPlay(0);

			me.container.removeChild(me.herotype);
			me.container.addChild(me.herotype);

			me.container.removeChild(me.heroms);
			me.container.addChild(me.heroms);
	});
	/*
	this.heroContainer.onEvent = function(e)
	{
		
		if(e.type == ns.game.events[0])
      	{
        	if(e.eventX < 374 )
			{
				if(e.eventY > 270)
				{
					
					me.selectBtn.y = 272;				
					me.hero.setDrawable(ns.R.hero2.image);
					me.talk.setDrawable(ns.R.talk2.image);
					humantype = 2;
				}else{
					me.selectBtn.y = 187;
					me.hero.setDrawable(ns.R.hero1.image);
					me.talk.setDrawable(ns.R.talk1.image);
					
					humantype = 1;
				}
				me.selectBtn.x = 267;
				me.star.setDrawable(ns.R.star1.image);

				//console.log(me.herotype);
				me.herotype.setRect([0,0,61,31]);

				me.heroms.rectY = 0;
			}else if(e.eventX > 374 && e.eventX < 464){
				hX = 61;
				hY = 87;
				if(e.eventY > 270)
				{
					me.selectBtn.y = 272;

					me.hero.setDrawable(ns.R.hero4.image);
					me.talk.setDrawable(ns.R.talk4.image);
					
					humantype = 4; 
				}else{
					me.selectBtn.y = 187;

					me.hero.setDrawable(ns.R.hero3.image);
					me.talk.setDrawable(ns.R.talk3.image);
					
					humantype = 3;
				}
				me.selectBtn.x = 357;
				me.star.setDrawable(ns.R.star2.image);
				me.herotype.setRect([61,0,61,31]);
				//me.herotype.rectX=61;
				me.heroms.rectY = 87;
			}else if(e.eventX >464 && e.eventX < 554)
			{
				hX = 122;
				hY = 174;
				if(e.eventY > 270)
				{
					me.selectBtn.y = 272;

					me.hero.setDrawable(ns.R.hero6.image);
					me.talk.setDrawable(ns.R.talk6.image);
					
					humantype = 6;
				}else{
					me.selectBtn.y = 187;

					me.hero.setDrawable(ns.R.hero5.image);
					me.talk.setDrawable(ns.R.talk5.image);
					
					humantype = 5;
				}
				me.selectBtn.x = 447;
				me.star.setDrawable(ns.R.star3.image);
				me.herotype.setRect([122,0,61,31]);
				me.heroms.rectY = 174;
			}
			else if(e.eventX >554)
			{
				hX = 183;
				hY = 262;
				if(e.eventY > 270)
				{
					me.selectBtn.y = 272;

					me.hero.setDrawable(ns.R.hero8.image);
					me.talk.setDrawable(ns.R.talk8.image);
					
					humantype = 8;
				}else{
					me.selectBtn.y = 187;

					me.hero.setDrawable(ns.R.hero7.image);
					me.talk.setDrawable(ns.R.talk7.image);
					
					humantype = 7;
				}
				me.selectBtn.x = 537;
				me.star.setDrawable(ns.R.star4.image);
				me.herotype.setRect([183,0,61,31]);
				me.heroms.rectY = 262;
			}

			me.container.removeChild(me.selectBtn);
			me.container.addChild(me.selectBtn);
			
		    me.hero.humantype = humantype;
		    
			me.hero.addFrame(ns.R.hero1.frames);
			me.hero.gotoAndPlay(0);

			me.star.addFrame(ns.R.star1.frames);
			me.star.gotoAndPlay(0);

			me.talk.addFrame(ns.R.talk1.frames);
			me.talk.gotoAndPlay(0);

			me.container.removeChild(me.herotype);
			me.container.addChild(me.herotype);

			me.container.removeChild(me.heroms);
			me.container.addChild(me.heroms);

      	}
	};
	*/

	this.container.addChild(this.bg,this.herobg,this.heroContainer,this.herotype,this.heroms,this.regbtn,this.hero,this.talk,
		this.star,this.selectBtn);
}
})();