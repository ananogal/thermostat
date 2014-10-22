function ThermostatView(element){
	this.el = element;
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('.increse_temperature', this.thermostat, this.thermostat.increaseTemperature);
	
};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function(){
		this.el.text(func.call(obj));
	});
};

$(document).ready(function() {
	new ThermostatView('.temperature h1');

});