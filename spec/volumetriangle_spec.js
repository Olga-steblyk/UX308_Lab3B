import { volumetriangle } from '../volumetriangle.js'

describe("Volume of equilateral triangle", function() {
    it("If the triangle side was 8 and lenth of prism is 10", function() {
        let flatlength = 10;
        let sidelength = 8;
        let volumetotal = volumetriangle(flatlength, sidelength);
      expect(volumetotal.toFixed(2)).toBe("277.13");
    });
    it("If the triangle side was 7 and lenth of prism is 14", function() {
      let flatlength = 14;
      let sidelength = 7;
      let volumetotal = volumetriangle(flatlength, sidelength);
    expect(volumetotal.toFixed(2)).toBe("297.05");
  });
  });
  