
export class tooltip {
	
}

tooltip.showTooltip = function(evt, text) {
	if(!this.tooltip)
		this.tooltip = document.getElementById("tooltip");
	this.tooltip.innerHTML = text;
	this.tooltip.style.display = "block";
	this.tooltip.style.left = evt.pageX + 10 + 'px';
	this.tooltip.style.top = evt.pageY + 10 + 'px';
};

tooltip.hideTooltip = function() {
	if(!this.tooltip)
		this.tooltip = document.getElementById("tooltip");
	this.tooltip.style.display = "none";
}