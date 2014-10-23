"use strict";

describe('Thermostat', function(){
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat();
	});

	describe('by default', function() {
		
		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});
		
		it('power saving mode(TM) will be on', function(){
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can increase the temperature by one degree', function(){
			expect(thermostat.increaseTemperature()).toEqual(21);
		});

		it('can decrease the temperature by one degree', function(){
			expect(thermostat.decreaseTemperature()).toEqual(19);
		});
	});

	describe('custom options', function() {

		it('can increase the temperature by 4', function() {
			thermostat.increaseTemperatureBy(4);
			expect(thermostat.temperature).toEqual(24);
		});

		it('can decrease the temperature by 5', function() {
			thermostat.decreaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(15);
		});

		it('can turn Power saving off', function(){
			thermostat.turnPowerSaverOff();
			expect(thermostat.isPowerSaverOn).toBe(false);
		});

		it('can turn Power saving on', function(){
			thermostat.turnPowerSaverOff();
			thermostat.turnPowerSaverOn();
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can reset the temperature', function(){
			expect(thermostat.resetTemperature()).toEqual(20);
		});
	});

	describe('restrictions', function() {

		it('should never go below 10', function() {
			thermostat.decreaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(10);
		});

		it('if power saver is on cant go above 25', function(){

			expect(thermostat.increaseTemperatureBy(6)).toEqual(25);
		});

		it('if powersaver is off it cant go above 32', function() {
			thermostat.turnPowerSaverOff();
			expect(thermostat.increaseTemperatureBy(13)).toEqual(32);
		});

		it('if powerSaver in turned on and the current temperature > 25 then goes to 25', function(){
			thermostat.turnPowerSaverOff();
			thermostat.increaseTemperatureBy(8);
			thermostat.turnPowerSaverOn();
			expect(thermostat.temperature).toEqual(25);
		});
	});
});