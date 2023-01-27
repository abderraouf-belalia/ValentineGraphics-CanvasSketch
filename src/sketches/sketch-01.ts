import canvasSketch from "canvas-sketch";

const settings = {
    dimensions: [ 
      2048, 
      2048 
    ]
  };

function sketch(){
  return function({ context , width, height }: {context: CanvasRenderingContext2D, width: number, height: number}){
    // Draw here ...
  };
};
  
canvasSketch(sketch, settings);