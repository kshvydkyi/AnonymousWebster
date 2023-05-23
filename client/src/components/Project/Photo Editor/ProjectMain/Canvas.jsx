import React, { useEffect, useState } from 'react'
import axios from '../../../../api/axios';
import { PROJECT_JSON_FOLDER, UPDATE_PROJECT_URL } from '../../../../api/routes';
import { fabric } from 'fabric';
import { useFabricJSEditor } from 'fabricjs-react';
import { Button } from '@mui/material';
import { ColorPicker } from '../../../../styles/CreateProjectStyles';
import { dataURLtoFile } from '../../../../scripts/base64ToFile';


export const Canvas = ({ projectId, projectInfo }) => {
  // const [jsonFile, setJsonFile] = useState();
  const currentUser = JSON.parse(localStorage.getItem('autorized'));
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [canvas, setCanvas] = useState();
  const [color, setColor] = useState()
  const [kostyl, setKostyl] = useState(false);
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState();
  const [outlineColor, setOutlineColor] = useState();
  const [drawingColor, setDrawingColor] = useState('#000000')
  const [shadowColor, setShadowColor] = useState('#000000')

  const changeColor = (color) => {
    setDrawingColor(color);
  }
  const changeShadowColor = (color) => {
    setShadowColor(color)
  }
  // const { selectedObjects, editor, onReady } = useFabricJSEditor()
  useEffect(() => {
    if (!color) {
      setColor('rgb(0, 0, 0)')
    }
    if (!canvasBackgroundColor) {
      setCanvasBackgroundColor(projectInfo.project.mainInfo.bgColor)
    }
    if (!outlineColor) {
      setOutlineColor('rgb(0, 0, 0)')
    }
  }, [])

  const setFigureColor = (color) => {
    setColor(color);
  }
  const setCanvasBg = (color) => {
    setCanvasBackgroundColor(color);
  }
  const setOutline = (color) => {
    setOutlineColor(color);
  }

  const addFigure = (canvi, figureName) => {
    let figure = null;

    switch (figureName) {
      case 'rect':
        figure = new fabric.Rect({
          height: 280,
          width: 200,
          stroke: outlineColor,
          fill: color
        });

        break;
      case 'circle':
        figure = new fabric.Circle({
          radius: 50,
          fill: color,
          stroke: outlineColor,
          strokeWidth: 3
        });

        break;
      case 'text':
        figure = new fabric.Textbox('Sample text', {
          width: 200,
          height: 150,
          stroke: outlineColor,
          fill: color,
        });
        break;
      case "image":

        break;
      default:
        break;
    }
    canvi.add(figure);
    canvi.renderAll();

  }
  const deleteObject = (event) => {
    canvas.remove(canvas.getActiveObject());
  }


  const loadJson = (canvi) => {
    console.log(projectInfo);
    canvi.clear();
    const json = projectInfo.project.projectCanvas.canvas;
    canvi.loadFromJSON(json, canvi.renderAll.bind(canvi));

  }

  useEffect(() => {
    if (projectInfo) {
      initCanvas(projectInfo);
    }
  }, [projectInfo]);

  //freeDrawing
  useEffect(() => {
    
    fabric.Object.prototype.transparentCorners = false;
    
    const clearCanvas = () => {
      canvas.clear();
    };
    const toggleDrawingMode = () => {
      canvas.isDrawingMode = !canvas.isDrawingMode;
      const drawingModeEl = document.getElementById('drawing-mode');
      const drawingOptionsEl = document.getElementById('drawing-mode-options');
      if (canvas.isDrawingMode) {
        drawingModeEl.innerHTML = 'Cancel drawing mode';
        drawingOptionsEl.style.display = '';
      } else {
        drawingModeEl.innerHTML = 'Enter drawing mode';
        drawingOptionsEl.style.display = 'none';
      }
    };

    const handleDrawingModeSelectorChange = () => {
      const selectedValue = document.getElementById('drawing-mode-selector').value;

      const vLinePatternBrush = new fabric.PatternBrush(canvas);
      vLinePatternBrush.getPatternSrc = function () {
        const patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        const ctx = patternCanvas.getContext('2d');
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();
        return patternCanvas;
      };

      const hLinePatternBrush = new fabric.PatternBrush(canvas);
      hLinePatternBrush.getPatternSrc = function () {
        const patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        const ctx = patternCanvas.getContext('2d');
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(5, 0);
        ctx.lineTo(5, 10);
        ctx.closePath();
        ctx.stroke();
        return patternCanvas;
      };

      const squarePatternBrush = new fabric.PatternBrush(canvas);
      squarePatternBrush.getPatternSrc = function () {
        const squareWidth = 10, squareDistance = 2;
        const patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
        const ctx = patternCanvas.getContext('2d');
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, squareWidth, squareWidth);
        return patternCanvas;
      };

      const diamondPatternBrush = new fabric.PatternBrush(canvas);
      diamondPatternBrush.getPatternSrc = function () {
        const squareWidth = 10, squareDistance = 5;
        const patternCanvas = fabric.document.createElement('canvas');
        const rect = new fabric.Rect({
          width: squareWidth,
          height: squareWidth,
          angle: 45,
          fill: this.color
        });
        const canvasWidth = rect.getBoundingRect().width;
        patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
        rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });
        const ctx = patternCanvas.getContext('2d');
        rect.render(ctx);
        return patternCanvas;
      };
      const texturePatternBrush = new fabric.PatternBrush(canvas);
      texturePatternBrush.source = new Image();
      texturePatternBrush.source.src = '../assets/honey_im_subtle.png';

      if (selectedValue === 'hline') {
        canvas.freeDrawingBrush = hLinePatternBrush;
      } else if (selectedValue === 'vline') {
        canvas.freeDrawingBrush = vLinePatternBrush;
      } else if (selectedValue === 'square') {
        canvas.freeDrawingBrush = squarePatternBrush;
      } else if (selectedValue === 'diamond') {
        canvas.freeDrawingBrush = diamondPatternBrush;
      } else if (selectedValue === 'texture') {
        canvas.freeDrawingBrush = texturePatternBrush;
      }
      else {
        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      }

      const drawingColorEl = document.getElementById('drawing-color');
      const drawingLineWidthEl = document.getElementById('drawing-line-width');
      const drawingShadowColorEl = document.getElementById('drawing-shadow-color');
      const drawingShadowWidth = document.getElementById('drawing-shadow-width');
      const drawingShadowOffset = document.getElementById('drawing-shadow-offset');

      if (canvas.freeDrawingBrush) {
        const brush = canvas.freeDrawingBrush;
        brush.color = drawingColorEl.value;
        if (brush.getPatternSrc) {
          brush.source = brush.getPatternSrc.call(brush);
        }
        brush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
        brush.shadow = new fabric.Shadow({
          blur: parseInt(drawingShadowWidth.value, 10) || 0,
          offsetX: 0,
          offsetY: 0,
          affectStroke: true,
          color: drawingShadowColorEl.value
        });
      }
    };

    const handleDrawingColorChange = (event) => {
      const brush = canvas.freeDrawingBrush;
      brush.color = event.target.value;
      if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush);
      }
    };

    const handleDrawingShadowColorChange = (event) => {
      canvas.freeDrawingBrush.shadow.color = event.target.value;
    };

    const handleDrawingLineWidthChange = () => {
      canvas.freeDrawingBrush.width = parseInt(document.getElementById('drawing-line-width').value, 10) || 1;
      document.getElementById('drawing-line-width-value').innerHTML = document.getElementById('drawing-line-width').value;
    };

    const handleDrawingShadowWidthChange = () => {
      canvas.freeDrawingBrush.shadow.blur = parseInt(document.getElementById('drawing-shadow-width').value, 10) || 0;
      document.getElementById('drawing-shadow-width-value').innerHTML = document.getElementById('drawing-shadow-width').value;
    };

    const handleDrawingShadowOffsetChange = () => {
      canvas.freeDrawingBrush.shadow.offsetX = parseInt(document.getElementById('drawing-shadow-offset').value, 10) || 0;
      canvas.freeDrawingBrush.shadow.offsetY = parseInt(document.getElementById('drawing-shadow-offset').value, 10) || 0;
      document.getElementById('drawing-shadow-offset-value').innerHTML = document.getElementById('drawing-shadow-offset').value;
    };

    document.getElementById('clear-canvas').addEventListener('click', clearCanvas);
    document.getElementById('drawing-mode').addEventListener('click', toggleDrawingMode);
    document.getElementById('drawing-mode-selector').addEventListener('change', handleDrawingModeSelectorChange);
    document.getElementById('drawing-color').addEventListener('change', handleDrawingColorChange);
    document.getElementById('drawing-shadow-color').addEventListener('change', handleDrawingShadowColorChange);
    document.getElementById('drawing-line-width').addEventListener('change', handleDrawingLineWidthChange);
    document.getElementById('drawing-shadow-width').addEventListener('change', handleDrawingShadowWidthChange);
    document.getElementById('drawing-shadow-offset').addEventListener('change', handleDrawingShadowOffsetChange);

    return () => {
      document.getElementById('clear-canvas').removeEventListener('click', clearCanvas);
      document.getElementById('drawing-mode').removeEventListener('click', toggleDrawingMode);
      document.getElementById('drawing-mode-selector').removeEventListener('change', handleDrawingModeSelectorChange);
      document.getElementById('drawing-color').removeEventListener('change', handleDrawingColorChange);
      document.getElementById('drawing-shadow-color').removeEventListener('change', handleDrawingShadowColorChange);
      document.getElementById('drawing-line-width').removeEventListener('change', handleDrawingLineWidthChange);
      document.getElementById('drawing-shadow-width').removeEventListener('change', handleDrawingShadowWidthChange);
      document.getElementById('drawing-shadow-offset').removeEventListener('change', handleDrawingShadowOffsetChange);
    };
  }, [canvas]);

useEffect(() => {
  if(canvas){
    loadJson(canvas)
  }
}, [canvas])

  const initCanvas = (projectInfo) => {
    setCanvas(new fabric.Canvas('c', {
      height: projectInfo.project.mainInfo.height,
      width: projectInfo.project.mainInfo.width,
      backgroundColor: projectInfo.project.mainInfo.bgColor,
      isDrawingMode: false
    }))
  }

  const saveProgres = async (canvi) => {
    const projectJSON = JSON.stringify(canvi);
    const parsedProject = JSON.parse(projectJSON)
    parsedProject.background = canvasBackgroundColor;
    console.log(parsedProject);

    const updatedInfo = {
      project: {
        mainInfo: {
          title: projectInfo.project.mainInfo.title,
          description: projectInfo.project.mainInfo.description,
          width: +projectInfo.project.mainInfo.width,
          height: +projectInfo.project.mainInfo.height,
          bgColor: canvasBackgroundColor,

        },
        projectCanvas: {
          canvas: parsedProject
        }
      }
    }
    console.log(updatedInfo)
    try {
      const response = await axios.patch(`${UPDATE_PROJECT_URL}/${projectId}/${currentUser.accessToken}`, JSON.stringify(updatedInfo), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      console.log(response)
      document.location.reload()
    } catch (error) {
      console.log(error)
    }
   

  }
  const saveAsPNG = async () => {
    const data64 = canvas.toDataURL('png')
    const file = dataURLtoFile(data64, projectInfo.project.mainInfo.title)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = projectInfo.project.mainInfo.title;
    link.click();
    URL.revokeObjectURL(link.href);
  }
  return (

    <>
      <Button onClick={() => addFigure(canvas, 'rect')}>RECT</Button>
      <Button onClick={() => addFigure(canvas, 'circle')}>Circle</Button>
      <Button onClick={() => addFigure(canvas, 'text')}>text</Button>
      <Button onClick={() => addFigure(canvas, 'image')}>image</Button>
      <Button onClick={() => saveProgres(canvas)}>save</Button>
      <Button onClick={() => saveAsPNG()}>Save as png</Button>
      <Button onClick={() => deleteObject()}>delete</Button>
      {/* <Button onClick={() => drawLine()}>draw</Button> */}

      <ColorPicker className={localStorage.getItem('themeMode') === 'dark' ? "Dark" : "Light"} value={color} label="Color" onChange={setFigureColor} />
      <ColorPicker className={localStorage.getItem('themeMode') === 'dark' ? "Dark" : "Light"} value={canvasBackgroundColor} label="BG Color" onChange={setCanvasBg} />
      <ColorPicker className={localStorage.getItem('themeMode') === 'dark' ? "Dark" : "Light"} value={outlineColor} label="Outline color" onChange={setOutline} />


      <canvas id="c" ></canvas>
      <div id="controls">
        <Button id="clear-canvas">Clear Canvas</Button>
        <Button id="drawing-mode">Enter drawing mode</Button>
        <div id="drawing-mode-options">
          <div className="drawFlex">
          <label htmlFor="drawing-mode-selector">Mode:</label>
          <select id="drawing-mode-selector" defaultValue='pencil'>
            <option value="pencil">Pencil</option>
            <option value="hline">Horizontal Line</option>
            <option value="vline">Vertical Line</option>
            <option value="square">Square</option>
            <option value="diamond">Diamond</option>
            <option value="texture">Texture</option>
          </select>
          </div>
          <div className="drawFlex">
            <label className="draw-color-picker-label" htmlFor="drawing-color">Color:</label>
            <input type="color" className='draw-color-picker ' id="drawing-color" value={drawingColor} onChange={(e) => changeColor(e.target.value)} />
          </div>
          <div className="drawFlex">
            <label className="draw-color-picker-label" htmlFor="drawing-shadow-color">Shadow Color:</label>
            <input type="color" className='draw-color-picker ' id="drawing-shadow-color" value={shadowColor} onChange={(e) => changeShadowColor(e.target.value)} />

          </div>
          <div className="drawFlex">
            <label htmlFor="drawing-line-width">Line Width:</label>
            <input type="range" id="drawing-line-width" min="1" max="150" />
            <span id="drawing-line-width-value"></span>
          </div>
          <div className="drawFlex">
            <label htmlFor="drawing-shadow-width">Shadow Width:</label>
            <input type="range" id="drawing-shadow-width" min="0" max="50" />
            <span id="drawing-shadow-width-value"></span>
          </div>
          <div className="drawFlex" >
            <label htmlFor="drawing-shadow-offset">Shadow Offset:</label>
            <input type="range" id="drawing-shadow-offset" min="0" max="50" />
            <span id="drawing-shadow-offset-value"></span>
          </div>
        </div>
      </div>
    </>
  )
}