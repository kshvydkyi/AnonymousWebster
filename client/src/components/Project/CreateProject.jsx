import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react'
import { DESCRIPTION_REGEX, TITLE_REGEX } from '../../regex/regex';
import { CreateBox, Settings } from '../../styles/CreateProjectStyles';
import { BoxEl, ErrWarning, TextFieldEl } from '../../styles/RegisterStyle';
import { GetFomats } from './GetFomats';


export const CreateProject = () => {

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [chosenFormatWidth, setChosenFormatWidth] = useState(0)
  const [chosenFormatHeight, setChosenFormatHeight] = useState(0)
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [orientation, setOrientation] = useState()
  const [backgroundColor, setBackgroundColor] = useState()

  console.log(chosenFormatWidth, chosenFormatHeight)
  const handleSubmit = () => {
    setSubmitClicked(true);
    console.log(title, description, orientation, backgroundColor, chosenFormatWidth, chosenFormatHeight)
  }
  return (
    <CreateBox>
      <Settings>
        <div>
          <GetFomats chosenWidthState={setChosenFormatWidth} chosenHeightState={setChosenFormatHeight} />
        </div>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <ErrWarning ref={errRef} className={errMsg ? "warning" : "offscreen"} aria-live="assertive">{errMsg}</ErrWarning>
          <TextFieldEl
            label="Title"
            variant="standard"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            error={TITLE_REGEX.test(title) === false && submitClicked === true}
            helperText={TITLE_REGEX.test(title) === false && submitClicked === true ? 'Title must be' : ' '}
          />
          <TextFieldEl
            label="Description"
            variant="standard"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
            error={DESCRIPTION_REGEX.test(description) === false && submitClicked === true}
            helperText={DESCRIPTION_REGEX.test(description) === false && submitClicked === true ? 'Title must be' : ' '}
          />
        </Box>
      </Settings>
    </CreateBox>
  )
}
