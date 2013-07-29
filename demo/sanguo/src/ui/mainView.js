(function(){

var ns = Q.use("sanguo"),game = ns.game;
var mainView = ns.mainView = function(container)
{
	this.container = container;
	this.count =0;
	this.load();
};
mainView.prototype.load = function()
{
	var imgLoader = new Q.ImageLoader();
	imgLoader.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
	imgLoader.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
	
	imgLoader.load(ns.R.mainSources);
};
mainView.prototype.onLoadLoaded = function(e)
{
	//console.log('sadf');
};
mainView.prototype.onLoadComplete = function(e)
{
	e.target.removeAllEventListeners();
	this.init(e.images);
};
mainView.prototype.init = function(images)
{
	var me = this;
	ns.R.initMain(images);
	this.bg = new Q.Bitmap({id:"background",image:ns.R.background, transformEnabled:false});
	this.farbg = new Q.Bitmap({id:"farbg",image:ns.R.farbg, transformEnabled:true});
	//this.nearbg = new Q.Bitmap({id:"mainbg",image:ns.R.mainbg, transformEnabled:true});
	
	this.container.addChild(this.bg,this.farbg);
};
mainView.prototype.update = function()
{
	this.count++;
	console.log(this.count);
};
})();