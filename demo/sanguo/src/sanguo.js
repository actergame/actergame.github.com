(function(){
window.onload = function()
{
	setTimeout(function()
	{
		game.load();
	}, 10);
};

var ns = Q.use("sanguo");
var game = ns.game = 
{	
	container: null,
	width: 900,
	height: 600,
	fps: 60,
	frames: 0,
	params: null,
	events: Q.supportTouch ? ["touchstart","touchmove", "touchend"] : ["mousedown","mousemove", "mouseup","mouseout"],
	params:null,
	fireInterval: 30,
	fireCount: 0,
};
game.load = function(container)
{
	var params = this.params = Q.getUrlParams();
	if(params.mode == undefined) params.mode = 1;
	if(params.fps) this.fps = params.fps;
	//设置宽高
	if(Q.isIpod || Q.isIphone)
	{
		this.width = 980;
		this.height = 545;
		Q.addMeta({name:"viewport", content:"user-scalable=no"});
	}else
	{		
		Q.addMeta({name:"viewport", content:"user-scalable=no, initial-scale=1.0, minimum-scale=1, maximum-scale=1"});
		this.width = Math.min(900, window.innerWidth);
		this.height = Math.min(600, window.innerHeight);
	}	
	//初始化容器设置
	this.container = container || Q.getDOM("container");
	this.container.style.overflow = "hidden";
	this.container.style.width = this.width + "px";
	this.container.style.height = this.height + "px";
	this.screenWidth = window.innerWidth;
	this.screenHeight = window.innerHeight;
	if(this.params.mode ==1)
	{
		var canvas = Q.createDOM("canvas", {id:"canvas", width:this.width, height:this.height, style:{position:"absolute"}});
		this.container.appendChild(canvas);
		this.context = new Q.CanvasContext({canvas:canvas});
	}else{
		this.context = new Q.DOMContext({canvas:this.container});
	}
	
	this.stage = new Q.Stage({width:this.width, height:this.height, context:this.context, update:Q.delegate(this.update, this)});
	this.stage.scaleX = this.stage.scaleY = this.params.scale || 1;

	var timer = this.timer = new Q.Timer(1000 / this.fps);
	timer.addListener(this.stage);
	timer.addListener(Q.Tween);
	timer.start();
	
	this.hideNavBar();
    if(Q.supportOrientation)
    {
        window.onorientationchange = function(e)
        {
            game.hideNavBar();
           if(game.stage) game.stage.updatePosition();
        };
    }
   
   if(params.isloadgame == undefined) params.isloadgame = 2;
  	this.mainContainer = new Q.DisplayObjectContainer({id:"mainContainer", width:this.width, height:this.height,
     eventChildren:true, transformEnabled:true,useHandCursor:false});
	if(this.params.isloadgame ==1)
	{
		this.view = new ns.heroSelectView(this.mainContainer);
		 
	}else{
		this.mainView = new ns.mainView(this.mainContainer);
	}
	this.stage.addChild(this.mainContainer);
	this.stage.on(ns.game.events[1],function(e){
		console.log("x:"+e.eventX);
		console.log("y:"+e.eventY);
		var x ;
		if(e.eventX >400)
			{
				x = e.eventX-160;
				//game.mainView.farbg.x = e.eventX-160;
				//game.mainView.nearbg.rectX = e.eventX+170;
			}else{
				x = e.eventX
				//game.mainView.farbg.x = e.eventX;
				//game.mainView.nearbg.rectX = e.eventX;
			}
			
			game.mainView.farbg.setRect([x,0,900,600]);
			console.log("farbg.rectX:"+game.mainView.farbg.rectX);
			//console.log("farbg:"+game.mainView.farbg.rectY);
			
	});
	var em = new Q.EventManager();
	
	em.registerStage(this.stage, this.events);	

	this.showFPS();
};
game.update = function(timeInfo)
{
	this.frames++;
};
game.hideNavBar = function()
{
    window.scrollTo(0, 1);
};
game.showFPS = function()
{
	var me = this, fpsContainer = Quark.getDOM("fps");
	if(fpsContainer)
	{
		setInterval(function()
		{
			fpsContainer.innerHTML = "FPS:" + me.frames;
			me.frames = 0;
		}, 1000);
	}
};
})();
