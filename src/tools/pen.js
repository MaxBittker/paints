import { pixelArtLine } from "../utils.js"

class Pen {
  constructor(ctx, ctx2) {
    this.name = 'pen';
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.isDrawing = false;
  }
  select(){
    
  }
  drawStart({x,y,lastX,lastY}) {
  }
  drawMove({x, y, lastX,lastY}) {
    pixelArtLine(this.ctx, x, y, lastX, lastY);
  }
  drawEnd() {
  }
  tick() {

  }

}

export default Pen