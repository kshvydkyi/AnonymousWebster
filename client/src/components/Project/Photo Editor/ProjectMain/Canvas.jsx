import React, { useEffect, useState } from 'react'
import axios from '../../../../api/axios';
import { PROJECT_JSON_FOLDER } from '../../../../api/routes';
import { fabric } from 'fabric';

export const Canvas = ({projectId, projectInfo}) => {
    const [jsonFile, setJsonFile] = useState();
    const currentUser = JSON.parse(localStorage.getItem('autorized'));
    const [isLoadingPage, setIsLoadingPage] = useState(true);

    const getJsonFile = async() => {
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
    console.log(jsonFile)
    const [canvas, setCanvas] = useState('');
  useEffect(() => {
    if(jsonFile){
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
    <div> 
        <h1>sdads</h1>
        <canvas id="canvas" />
    </div>
  )
}
