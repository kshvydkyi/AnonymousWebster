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
    const { selectedObjects, editor, onReady } = useFabricJSEditor()
    const onAddCircle = () => {
        canvas.add(fabric.Rect)
    }
    const onAddRectangle = () => {
        editor?.addRectangle()
    }
    const addRect = canvi => {
        const rect = new fabric.Rect({
          height: 280,
          width: 200,
          fill: 'yellow'
        });
        canvi.add(rect);
        canvi.renderAll();
      }
    useEffect(() => {
        fabric.Image.fromURL('my_image.png', function (oImg) {
            editor?.canvas.add(oImg);
        });
    }, [fabric, editor])


    
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
        <Button onClick={() => addRect(canvas)}>O</Button>
            <canvas id="canvas" />
        </>
    )
}
