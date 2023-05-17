import React, { useEffect, useState } from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { BoxEl } from '../../../../styles/RegisterStyle'
import { fabric } from 'fabric';
import { Button } from '@mui/material';
import axios from '../../../../api/axios';
import { GET_PROJECT_URL } from '../../../../api/routes';
import { useLocation } from 'react-router-dom';
import { getInfo } from '../../../../requests/getInfo';
import { InfoLoadingSpinner } from '../../../Other/InfoLoadingSpinner';
import { Canvas } from './Canvas';
export const ProjectMain = () => {
    const location = useLocation().pathname.split('/');
    const currentId = location[2];
    console.log(currentId);
    const [mainProjectInfo, setMainProjectInfo] = useState();
  const [isLoadingPage, setIsLoadingPage] = useState(true);

    // const { selectedObjects, editor, onReady } = useFabricJSEditor()
    // const onAddCircle = () => {
    //     editor?.addCircle()
    // }
    // const onAddRectangle = () => {
    //     editor?.addRectangle()
    // }
    // useEffect(() => {
    //     fabric.Image.fromURL('my_image.png', function (oImg) {
    //         editor?.canvas.add(oImg);
    //     });
    // }, [fabric, editor])
    const currentUser = JSON.parse(localStorage.getItem('autorized'));

    useEffect(() => {
        getInfo(setMainProjectInfo, setIsLoadingPage, GET_PROJECT_URL + currentId)
    }, [])
    
    return isLoadingPage ?  <InfoLoadingSpinner size={56} /> : (
        <BoxEl>
            <Canvas projectId={currentId} projectInfo={mainProjectInfo}/> 
        </BoxEl>
    )
}
