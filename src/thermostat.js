function Thermostat(){
	this.defaultTemperature= 20;
	this.minTemperature = 10;
	this.maxPowerSaverOnTemperature = 25;
	this.maxPowerSaverOffTemperature = 32;
	this.temperature = this.defaultTemperature;
	this.isPowerSaverOn = true;
	this.maxTemperature = this._setMaxTemperature();	
}

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this._isTemperatureAboveMaxTemperature(degrees)) return this.temperature = this.maxTemperature;
	
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this._isBelowMinTemperature(degrees)) return this.temperature = this.minTemperature;
		 
	return this.temperature -= degrees;
};

Thermostat.prototype.turnPowerSaverOff = function() {
	this.isPowerSaverOn = false;
	this._setMaxTemperature();
};

Thermostat.prototype.turnPowerSaverOn = function() {
	this.isPowerSaverOn = true;
	this._setMaxTemperature();
	if(this.temperature > this.maxTemperature) return this.temperature = this.maxTemperature
};

Thermostat.prototype.resetTemperature = function(){
	return this.temperature = this.defaultTemperature;
};

Thermostat.prototype._isTemperatureAboveMaxTemperature = function(degrees){
	return (this.temperature + degrees) > this.maxTemperature;
};

Thermostat.prototype._isBelowMinTemperature = function(degrees){
	return (this.temperature - degrees) < this.minTemperature;
};

Thermostat.prototype._setMaxTemperature = function(){
	return this.maxTemperature = this.isPowerSaverOn ? this.maxPowerSaverOnTemperature : this.maxPowerSaverOffTemperature;
};


