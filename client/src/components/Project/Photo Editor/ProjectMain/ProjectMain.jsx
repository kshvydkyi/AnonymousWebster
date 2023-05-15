import React, { useEffect } from 'react'
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { BoxEl } from '../../../../styles/RegisterStyle'
import { fabric } from 'fabric';
import { Button } from '@mui/material';
export const ProjectMain = () => {
    const { selectedObjects, editor, onReady } = useFabricJSEditor()
    const onAddCircle = () => {
        editor?.addCircle()
    }
    const onAddRectangle = () => {
        editor?.addRectangle()
    }
    useEffect(() => {
        fabric.Image.fromURL('my_image.png', function (oImg) {
          editor?.canvas.add(oImg);
        });
      }, [fabric, editor])
    return (
        <BoxEl>
             <Button onClick={onAddCircle}>Add circle</Button>
                <Button onClick={onAddRectangle}>Add Rectangle</Button>
            <div style={{backgroundColor: "white", width: "700px", height: '400px'}}>
               
                <FabricJSCanvas style={{backgroundColor: "white", width: "700px", height: '400px' }} className="sample-canvas" onReady={onReady} />
            </div>
        </BoxEl>
    )
}
