/**
 * Resource Manager.
 */

(function(){

var ns = Q.use("sanguo");

var R = ns.R = {};
R.mainSources =
[
	{id:"background", size:1672, src:"image/main/background.png"},
	{id:"farscene", size:396, src:"image/main/farscene.png"},
	{id:"mainbg", size:1672, src:"image/main/mainscene.png"},
];
R.initMain = function(images)
{
	this.images = images;
	this.background = this.getImage("background");
	//this.mainbg = this.getImage("mainbg");
	
	this.farbg = this.getImage("farscene");
};
R.initHeroSelect = function(images)
{
	this.images = images;
	this.regbg = this.getImage("regbg");
	this.reghero = this.getImage("reghero");
	this.herotype = this.getImage("herotype");
	this.heroms = this.getImage("heroms");
	this.selectBtn = this.getImage("selectBtn");
	this.regbtn = {id:"regbtn",image:this.getImage("regbtn"),x:720,y:460,width:180,height:47,
	up:{rect:[0,0,180,47]},
	over:{rect:[180,0,180,47]},
	down:{rect:[540,0,180,47]}
	};
	this.hero1 = 
	{
		image:this.getImage("hero1"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero2 = 
	{
		image:this.getImage("hero2"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero3 = 
	{
		image:this.getImage("hero3"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero4 = 
	{
		image:this.getImage("hero4"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero5 = 
	{
		image:this.getImage("hero5"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero6 = 
	{
		image:this.getImage("hero6"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero7 = 
	{
		image:this.getImage("hero7"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	this.hero8 = 
	{
		image:this.getImage("hero8"),
		frames:[
		{rect:[0,0,315,274]},
		{rect:[15,274,315,274]},
		{rect:[25,548,315,274]},
		{rect:[35,822,315,274],stop:1}
		], interval:50
	};
	//talk
	this.talk1 = 
	{
		image:this.getImage("talk1"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk2 = 
	{
		image:this.getImage("talk2"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk3 = 
	{
		image:this.getImage("talk3"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk4 = 
	{
		image:this.getImage("talk4"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk5 = 
	{
		image:this.getImage("talk5"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk6 = 
	{
		image:this.getImage("talk6"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk7 = 
	{
		image:this.getImage("talk7"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	this.talk8 = 
	{
		image:this.getImage("talk8"),
		frames:[
		{rect:[0,0,0,0]},
		{rect:[0,126,263,126]},
		{rect:[0,252,263,126]},
		{rect:[0,126,263,126],stop:1},
		], interval:150
	};
	//star
	this.star1 =
	{
		image:this.getImage("star1"),
		frames:[
		{rect:[0,0,187,117]},
		{rect:[187,0,187,117]},
		{rect:[374,0,187,117]},
		{rect:[561,0,187,117]},
		{rect:[187,117,187,117]},
		{rect:[374,117,187,117]},
		{rect:[561,117,187,117],stop:1},
		],interval:100
	};
	this.star2 =
	{
		image:this.getImage("star2"),
		frames:[
		{rect:[0,0,187,117]},
		{rect:[187,0,187,117]},
		{rect:[374,0,187,117]},
		{rect:[561,0,187,117]},
		{rect:[187,117,187,117]},
		{rect:[374,117,187,117]},
		{rect:[561,117,187,117],stop:1},
		],interval:100
	};
	this.star3 =
	{
		image:this.getImage("star3"),
		frames:[
		{rect:[0,0,187,117]},
		{rect:[187,0,187,117]},
		{rect:[374,0,187,117]},
		{rect:[561,0,187,117]},
		{rect:[187,117,187,117]},
		{rect:[374,117,187,117]},
		{rect:[561,117,187,117],stop:1},
		],interval:100
	};
	this.star4 =
	{
		image:this.getImage("star4"),
		frames:[
		{rect:[0,0,187,117]},
		{rect:[187,0,187,117]},
		{rect:[374,0,187,117]},
		{rect:[561,0,187,117]},
		{rect:[187,117,187,117]},
		{rect:[374,117,187,117]},
		{rect:[561,117,187,117],stop:1},
		],interval:100
	};
};

R.getImage = function(id){
	return this.images[id].image;
};
})();