import { kelvin2fahr } from '../kelvin2fahrenheit.js'

describe("Converting Kelvin", function() {
    it("converting 4000 kelvin to far", function() {
      let fahr = kelvin2fahr(4000);
      expect(fahr.toFixed(2)).toBe("6740.33");
    });
    it("converting 75 kelvin to far", function() {
      let fahr = kelvin2fahr(75);
      expect(fahr.toFixed(2)).toBe("-324.67");
    });
    //(yard.toFixed(2)
  });
  
  