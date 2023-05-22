import React, { useEffect, useState } from 'react'
import axios from '../../../../api/axios';
import { PROJECT_JSON_FOLDER } from '../../../../api/routes';
import { fabric } from 'fabric';
import { useFabricJSEditor } from 'fabricjs-react';
import { Button } from '@mui/material';
import { ColorPicker } from '../../../../styles/CreateProjectStyles';


export const Canvas = ({ projectId, projectInfo }) => {
    const [jsonFile, setJsonFile] = useState();
    const currentUser = JSON.parse(localStorage.getItem('autorized'));
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [canvas, setCanvas] = useState('');
    const [color, setColor] = useState()
   
    // const { selectedObjects, editor, onReady } = useFabricJSEditor()
    useEffect(() => {
        if (!color) {
            setColor('rgb(0, 0, 0)')
        }
    }, [])
    const setFigureColor = (color) => {
        setColor(color);
    }
    const addFigure = (canvi, figureName) => {
        let figure = null;

    switch(figureName){
        case 'rect':
            figure = new fabric.Rect({
                height: 280,
                width: 200,
                fill: color
              });
              
            break;
        case 'circle':
            figure = new fabric.Circle({
                radius: 50,
                fill: color,
                stroke: "black",
                strokeWidth: 3
              });
            
            break;
        case 'text':
            figure = new fabric.Textbox('Sample text', {
                width: 200,
                height: 150,
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
    // useEffect(() => {
    //     fabric.Image.fromURL('my_image.png', function (oImg) {
    //         editor?.canvas.add(oImg);
    //     });
    // }, [fabric, editor])


    
    useEffect(() => {
        if (projectInfo) {
            setCanvas(initCanvas());
        }
    }, [projectInfo]);
    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: projectInfo.project.mainInfo.height,
            width: projectInfo.project.mainInfo.width,
            backgroundColor: projectInfo.project.mainInfo.bgColor
        })
    )
    return (

        <>
        <Button onClick={() => addFigure(canvas, 'rect')}>RECT</Button>
        <Button onClick={() => addFigure(canvas, 'circle')}>Circle</Button>
        <Button onClick={() => addFigure(canvas, 'text')}>text</Button>
        <Button onClick={() => addFigure(canvas, 'image')}>image</Button>
        <ColorPicker className={localStorage.getItem('themeMode') === 'dark'  ? "Dark" : "Light"} value={color} label="Background color" onChange={setFigureColor} />

            <canvas id="canvas" />
        </>
    )
}