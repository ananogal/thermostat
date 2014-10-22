function Thermostat(){
	this.defaultTemperature= 20;
	this.minTemperature = 10;
	this.temperature = this.defaultTemperature;
	this.isPowerSaverOn = true;	
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - degrees < this.minTemperature) return this.temperature = this.minTemperature;
		 
	return this.temperature -= degrees;
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
};

Thermostat.prototype.turnPowerSaverOn = function() {
	this.isPowerSaverOn = true;
};
