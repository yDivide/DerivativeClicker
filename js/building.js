function Building(factor, moneyCost, proofCost){
	this.owned = 0;
	this.manual = 0;
	this.factor = factor;
	this.moneyCost = moneyCost;
	this.proofCost = proofCost;
}

Building.prototype.add = function(num){
	this.owned += num;
}

function CurrBuyable(cost){
	this.owned = false;
	this.cost = cost;
}

CurrBuyable.prototype.buy = function(){
	this.owned = true;
}