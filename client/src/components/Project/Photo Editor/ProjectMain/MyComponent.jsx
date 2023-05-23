// import React, { useEffect } from 'react';
// import { fabric } from 'fabric';
// import { Button, Select, FormControl, InputLabel, MenuItem, Slider, Typography } from '@mui/material';

// const MyComponent = () => {
//   useEffect(() => {
//     const canvas = new fabric.Canvas('c', {
//       isDrawingMode: true
//     });
//     fabric.Object.prototype.transparentCorners = false;

//     const clearCanvas = () => {
//       canvas.clear();
//     };

//     const toggleDrawingMode = () => {
//       canvas.isDrawingMode = !canvas.isDrawingMode;
//       const drawingModeEl = document.getElementById('drawing-mode');
//       const drawingOptionsEl = document.getElementById('drawing-mode-options');
//       if (canvas.isDrawingMode) {
//         drawingModeEl.innerHTML = 'Cancel drawing mode';
//         drawingOptionsEl.style.display = '';
//       } else {
//         drawingModeEl.innerHTML = 'Enter drawing mode';
//         drawingOptionsEl.style.display = 'none';
//       }
//     };

//     const handleDrawingModeSelectorChange = () => {
//       const selectedValue = document.getElementById('drawing-mode-selector').value;

//       const vLinePatternBrush = new fabric.PatternBrush(canvas);
//       // ... (pattern brush definitions)

//       const texturePatternBrush = new fabric.PatternBrush(canvas);
//       texturePatternBrush.source = new Image();
//       texturePatternBrush.source.src = '../assets/honey_im_subtle.png';

//       if (selectedValue === 'hline') {
//         canvas.freeDrawingBrush = hLinePatternBrush;
//       } else if (selectedValue === 'vline') {
//         canvas.freeDrawingBrush = vLinePatternBrush;
//       } else if (selectedValue === 'square') {
//         canvas.freeDrawingBrush = squarePatternBrush;
//       } else if (selectedValue === 'diamond') {
//         canvas.freeDrawingBrush = diamondPatternBrush;
//       } else if (selectedValue === 'texture') {
//         canvas.freeDrawingBrush = texturePatternBrush;
//       } else {
//         canvas.freeDrawingBrush = new fabric[selectedValue + 'Brush'](canvas);
//       }

//       // ...
//     };

//     const handleDrawingColorChange = (event) => {
//       const brush = canvas.freeDrawingBrush;
//       brush.color = event.target.value;
//       if (brush.getPatternSrc) {
//         brush.source = brush.getPatternSrc.call(brush);
//       }
//     };

//     const handleDrawingShadowColorChange = (event) => {
//       canvas.freeDrawingBrush.shadow.color = event.target.value;
//     };

//     const handleDrawingLineWidthChange = (event, value) => {
//       canvas.freeDrawingBrush.width = value || 1;
//     };

//     const handleDrawingShadowWidthChange = (event, value) => {
//       canvas.freeDrawingBrush.shadow.blur = value || 0;
//     };

//     const handleDrawingShadowOffsetChange = (event, value) => {
//       canvas.freeDrawingBrush.shadow.offsetX = value || 0;
//       canvas.freeDrawingBrush.shadow.offsetY = value || 0;
//     };

//     return () => {
//       // ...
//     };
//   }, []);

//   return (
//     <div>
//       <canvas id="c" width="500" height="500"></canvas>
//       <div id="controls">
//         <Button variant="contained" onClick={clearCanvas}>Clear Canvas</Button>
//         <Button variant="contained" onClick={toggleDrawingMode}>Enter drawing mode</Button>
//         <div id="drawing-mode-options">
//           <FormControl>
//             <InputLabel id="drawing-mode-selector-label">Mode:</InputLabel>
//             <Select
//               labelId="drawing-mode-selector-label"
//               id="drawing-mode-selector"
//               defaultValue="pencil"
//               onChange={handleDrawingModeSelectorChange}
//             >
//               <MenuItem value="pencil">Pencil</MenuItem>
//               <MenuItem value="hline">Horizontal Line</MenuItem>
//               <MenuItem value="vline">Vertical Line</MenuItem>
//               <MenuItem value="square">Square</MenuItem>
//               <MenuItem value="diamond">Diamond</MenuItem>
//               <MenuItem value="texture">Texture</MenuItem>
//             </Select>
//           </FormControl>
//           <br />
//           <FormControl>
//             <InputLabel htmlFor="drawing-color">Color:</InputLabel>
//             <input type="color" id="drawing-color" defaultValue="#000000" onChange={handleDrawingColorChange} />
//           </FormControl>
//           <br />
//           <FormControl>
//             <InputLabel htmlFor="drawing-shadow-color">Shadow Color:</InputLabel>
//             <input type="color" id="drawing-shadow-color" defaultValue="#000000" onChange={handleDrawingShadowColorChange} />
//           </FormControl>
//           <br />
//           <Typography id="drawing-line-width-label" gutterBottom>
//             Line Width: <span id="drawing-line-width-value"></span>
//           </Typography>
//           <Slider
//             id="drawing-line-width"
//             min={1}
//             max={150}
//             defaultValue={1}
//             onChange={handleDrawingLineWidthChange}
//           />
//           <Typography id="drawing-shadow-width-label" gutterBottom>
//             Shadow Width: <span id="drawing-shadow-width-value"></span>
//           </Typography>
//           <Slider
//             id="drawing-shadow-width"
//             min={0}
//             max={50}
//             defaultValue={0}
//             onChange={handleDrawingShadowWidthChange}
//           />
//           <Typography id="drawing-shadow-offset-label" gutterBottom>
//             Shadow Offset: <span id="drawing-shadow-offset-value"></span>
//           </Typography>
//           <Slider
//             id="drawing-shadow-offset"
//             min={0}
//             max={50}
//             defaultValue={0}
//             onChange={handleDrawingShadowOffsetChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;