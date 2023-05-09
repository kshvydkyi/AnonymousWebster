import React, { useEffect, useRef, useState } from 'react'
import { DESCRIPTION_REGEX, NUMBER_REGEX, TITLE_REGEX } from '../../regex/regex';
import { ColorPicker, CreateBox, Settings, TypographyBox } from '../../styles/CreateProjectStyles';
import { ButtonEl, ErrWarning, TextFieldEl } from '../../styles/RegisterStyle';
import { SettingsForm } from '../../styles/CreateProjectStyles';
import { CircularProgress } from '@mui/material';
export const CreateForm = ({ widthValue, heightValue }) => {
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [width, setWidth] = useState(widthValue)
    const [height, setHeight] = useState(heightValue);
    // const [orientation, setOrientation] = useState()
    const [backgroundColor, setBackgroundColor] = useState()
    useEffect(() => {
        setWidth(widthValue)
        setHeight(heightValue)
    }, [widthValue, heightValue])

    useEffect(() => {
       if(!backgroundColor){
        setBackgroundColor('rgb(0, 0, 0)')
       }
    }, [])
    const handleSubmit = (e) => {
        setSubmitClicked(true);
        setErrMsg('');
        e.preventDefault();
        console.log(title, description, +width, +height, backgroundColor);
        try {
            setIsLoading(true)
            //here must be an axios statement and json logic
            setIsLoading(false)
        } catch (error) {
            setErrMsg('Error')
            setIsLoading(false)
        }

    }
    const setColor = (color) => {
        setBackgroundColor(color)
    }
    return (
        <>
            <SettingsForm
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <ErrWarning ref={errRef} className={errMsg ? "warning" : "offscreen"} aria-live="assertive">{errMsg}</ErrWarning>
                <TextFieldEl
                    label="Title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    error={TITLE_REGEX.test(title) === false && submitClicked === true}
                    helperText={TITLE_REGEX.test(title) === false && submitClicked === true ? 'Title required (minimum 3 characters)' : ' '}
                />
                <TextFieldEl
                    label="Description"
                    required
                    multiline
                    rows={4}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    error={DESCRIPTION_REGEX.test(description) === false && submitClicked === true}
                    helperText={DESCRIPTION_REGEX.test(description) === false && submitClicked === true ? 'Description required (minimum 10 characters)' : ' '}
                />
                <div style={{ display: "flex" }}>
                    <TextFieldEl
                        label="Width"
                        required
                        value={width}
                        onChange={e => setWidth(e.target.value)}
                        error={NUMBER_REGEX.test(width) === false && submitClicked === true}
                        helperText={NUMBER_REGEX.test(width) === false && submitClicked === true ? 'Width must be a number' : ' '}
                    />
                    <TextFieldEl
                        label="Height"
                        required
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        error={NUMBER_REGEX.test(height) === false && submitClicked === true}
                        helperText={NUMBER_REGEX.test(height) === false && submitClicked === true ? 'Height must be a number' : ' '}
                    />
                </div>
                <ColorPicker value={backgroundColor} label="Background color" onChange={setColor} />
                <ButtonEl type="submit" variant="contained">
                    {
                        isLoading ? <CircularProgress size={24} /> :
                            <p>Create</p>
                    }

                </ButtonEl>
            </SettingsForm></>
    )
}