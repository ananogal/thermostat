function Thermostat(){
	this.defaultTemperature= 20;
	this.minTemperature = 10;
	this.maxPowerSaverTemperature = 25;
	this.maxTemperature = 32;
	this.temperature = this.defaultTemperature;
	this.isPowerSaverOn = true;	
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this._isAboveMaxPowerSaverTemperature(degrees)) return this.temperature = this.maxPowerSaverTemperature;
	if(this._isAboveMaxTemperature(degrees)) return this.temperature = this.maxTemperature;
	
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this._isBellowMinTemperature(degrees)) return this.temperature = this.minTemperature;
		 
	return this.temperature -= degrees;
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
};

Thermostat.prototype.turnPowerSaverOn = function() {
	this.isPowerSaverOn = true;
};

Thermostat.prototype.reset = function(){
	return this.temperature = this.defaultTemperature;
};

Thermostat.prototype._isAboveMaxPowerSaverTemperature = function(degrees){
	return (this.isPowerSaverOn) && (this.temperature + degrees > this.maxPowerSaverTemperature );
};

Thermostat.prototype._isAboveMaxTemperature = function(degrees){
	return this.temperature + degrees > this.maxTemperature;
};

Thermostat.prototype._isBelowMinTemperature = function(degrees){
	return this.temperature - degrees < this.minTemperature;
};
