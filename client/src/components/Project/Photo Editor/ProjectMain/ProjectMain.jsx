import React, { useEffect } from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { BoxEl } from '../../../../styles/RegisterStyle'
import { fabric } from 'fabric';
import { Button } from '@mui/material';
import axios from '../../../../api/axios';
import { GET_PROJECT_URL } from '../../../../api/routes';
import { useLocation } from 'react-router-dom';
export const ProjectMain = () => {
    const location = useLocation().pathname.split('/');
    const currentId = location[2];
    console.log(currentId);
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

    const getProject = async () => {
        try {
            const response = await axios.get(GET_PROJECT_URL + currentId)
            console.log(response);
        }
        catch (e) {
            console.log(e);

        }
    }
    useEffect(() => {
        getProject()
    }, [])
    return (
        <BoxEl>
            {/* <FabricJSCanvas style={{ backgroundColor: "white", width: "700px", height: '400px' }} className="sample-canvas" onReady={onReady} /> */}
        </BoxEl>
    )
}
