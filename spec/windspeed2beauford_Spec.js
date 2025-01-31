import { windspeed2beau} from '../windspeed2beauford.js'

describe("Testing to see if knots translate properly into beaufort", function() {
    it("A windspeed of 45 Knots", function() {
      let knots = windspeed2beau(45);
      expect(knots).toBe("Strong Gale, BN:9");
    });
    it("A windspeed of 30 Knots", function() {
      let knots = windspeed2beau(30);
      expect(knots).toBe("Near Gale, BN:7");
    });
  });
  
  