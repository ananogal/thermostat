function ThermostatView(element){
	this.el = $(element);
	this.thermostat = new Thermostat();
	this.el.text(this.thermostat.temperature);
	this.coldTemperature = 18;
	this.warmTemperature = 25;
	this.bindTo('.increse_temperature', this.thermostat, this.thermostat.increaseTemperature);
	this.bindTo('.decrese_temperature', this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo('.reset', this.thermostat, this.thermostat.resetTemperature);
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function(){
		this.el.text(func.call(obj)).toggleClass(this.setColor());
	});
};

ThermostatView.prototype.setColor = function(){
	if (parseInt(this.el.text) < this.coldTemperature) return "green"; 
	if (parseInt(this.el.text) < this.warmTemperature) return "yellow"; 
	return "red"; 
} 