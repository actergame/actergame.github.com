(function(){
var ns = Q.use("sanguo"), game = ns.game;
var test = ns.test = function(container)
{	
	this.count = 0;
};
test.prototype.xg = function()
{
	this.count++;
	console.log(this.count);
};
})();