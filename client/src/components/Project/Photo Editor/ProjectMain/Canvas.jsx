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
    const [canvas, setCanvas] = useState('');
    const [color, setColor] = useState()
    const [canvasBackgroundColor, setCanvasBackgroundColor] = useState();
    // const { selectedObjects, editor, onReady } = useFabricJSEditor()
    useEffect(() => {
        if (!color) {
            setColor('rgb(0, 0, 0)')
        }
        if (!canvasBackgroundColor) {
            setCanvasBackgroundColor(projectInfo.project.mainInfo.bgColor)
        }
    }, [])

    const setFigureColor = (color) => {
        setColor(color);
    }
    const setCanvasBg = (color) => {
        setCanvasBackgroundColor(color);
        // canvas.background = color;
    }
   
    const addFigure = (canvi, figureName) => {
        let figure = null;

        switch (figureName) {
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
            initCanvas(projectInfo);
            // const json = { "objects": [{ "type": "circle", "version": "5.3.0", "originX": "left", "originY": "top", "left": 190, "top": 89, "width": 100, "height": 100, "fill": "rgb(0, 0, 0)", "stroke": "black", "strokeWidth": 3, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeUniform": false, "strokeMiterLimit": 4, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "radius": 50, "startAngle": 0, "endAngle": 360 }, { "type": "rect", "version": "5.3.0", "originX": "left", "originY": "top", "left": 353, "top": 43, "width": 200, "height": 280, "fill": "rgb(0, 0, 0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeUniform": false, "strokeMiterLimit": 4, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "rx": 0, "ry": 0 }, { "type": "textbox", "version": "5.3.0", "originX": "left", "originY": "top", "left": 90, "top": 241, "width": 200, "height": 45.2, "fill": "rgb(0, 0, 0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeDashOffset": 0, "strokeLineJoin": "miter", "strokeUniform": false, "strokeMiterLimit": 4, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "skewX": 0, "skewY": 0, "fontFamily": "Times New Roman", "fontWeight": "normal", "fontSize": 40, "text": "Sample text", "underline": false, "overline": false, "linethrough": false, "textAlign": "left", "fontStyle": "normal", "lineHeight": 1.16, "textBackgroundColor": "", "charSpacing": 0, "styles": [], "direction": "ltr", "path": null, "pathStartOffset": 0, "pathSide": "left", "pathAlign": "baseline", "minWidth": 20, "splitByGrapheme": false }], "background": "rgb(97, 0, 254)" }
            // const loadCanvasFromJSON = () => {
            //     canvas.clear().renderAll();
            //     canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
            // };

            // loadCanvasFromJSON();
        }
    }, [projectInfo]);

    const loadJson = (canvi) => {
        console.log(projectInfo);
        canvi.clear();
        const json = projectInfo.project.projectCanvas.canvas;

        canvi.loadFromJSON(json, canvi.renderAll.bind(canvi));

    }

    const initCanvas = (projectInfo) => {
        setCanvas(new fabric.Canvas('canvas', {
            height: projectInfo.project.mainInfo.height,
            width: projectInfo.project.mainInfo.width,
            backgroundColor: projectInfo.project.mainInfo.bgColor,
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
                    title:  projectInfo.project.mainInfo.title,
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
            const response = await axios.patch(`${UPDATE_PROJECT_URL}/${projectId}/${currentUser.accessToken}`, JSON.stringify(updatedInfo),{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            } )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        document.location.reload()
        
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
            <Button onClick={() => loadJson(canvas)}>loadJson</Button>

            <ColorPicker className={localStorage.getItem('themeMode') === 'dark' ? "Dark" : "Light"} value={color} label="Color" onChange={setFigureColor} />
            <ColorPicker className={localStorage.getItem('themeMode') === 'dark' ? "Dark" : "Light"} value={canvasBackgroundColor} label="Color" onChange={setCanvasBg} />


            <canvas id="canvas" />
        </>
    )
}