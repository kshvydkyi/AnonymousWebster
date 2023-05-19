import React, { useEffect, useState } from 'react'
import axios from '../../../../api/axios';
import { PROJECT_JSON_FOLDER } from '../../../../api/routes';
import { fabric } from 'fabric';
import { useFabricJSEditor } from 'fabricjs-react';
import { Button } from '@mui/material';


export const Canvas = ({ projectId, projectInfo }) => {
    const [jsonFile, setJsonFile] = useState();
    const currentUser = JSON.parse(localStorage.getItem('autorized'));
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [canvas, setCanvas] = useState('');
    const getJsonFile = async () => {
        try {
            const response = await axios.get(`${PROJECT_JSON_FOLDER}${currentUser.login}/${projectInfo.title}/${projectInfo.json_file}`);
            setJsonFile(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getJsonFile();
    }, [projectInfo]);
    // const { selectedObjects, editor, onReady } = useFabricJSEditor()
 
    const addFigure = (canvi, figureName) => {
        let figure = null;

    switch(figureName){
        case 'rect':
            figure = new fabric.Rect({
                height: 280,
                width: 200,
                fill: 'white'
              });
              
            break;
        case 'circle':
            figure = new fabric.Circle({
                radius: 50,
                fill: 'white',
                stroke: "black",
                strokeWidth: 3
              });
            
            break;
        case 'text':
            figure = new fabric.Textbox('text', {
                width: 100,
                fill: 'white',
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
        if (jsonFile) {
            setCanvas(initCanvas());
        }
    }, [jsonFile]);
    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: jsonFile.project.mainInfo.height,
            width: jsonFile.project.mainInfo.width,
            backgroundColor: jsonFile.project.mainInfo.bgColor
        })
    )
    return (

        <>
        <Button onClick={() => addFigure(canvas, 'rect')}>RECT</Button>
        <Button onClick={() => addFigure(canvas, 'circle')}>Circle</Button>
        <Button onClick={() => addFigure(canvas, 'text')}>text</Button>
        <Button onClick={() => addFigure(canvas, 'image')}>image</Button>

            <canvas id="canvas" />
        </>
    )
}
