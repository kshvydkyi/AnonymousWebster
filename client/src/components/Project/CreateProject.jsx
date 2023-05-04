import React, { useEffect, useState } from 'react'
import { GET_CATEGORIES_URL, GET_FORMATS_URL } from '../../api/routes';
import { getInfo } from '../../requests/getInfo';
import { Body } from '../../styles/RegisterStyle';
import { InfoLoadingSpinner } from '../Other/InfoLoadingSpinner';

export const CreateProject = () => {
    const [formats, setFormats] = useState([])
    const [categories, setCategories] = useState([])
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        getInfo(setFormats, setIsLoadingPage, GET_FORMATS_URL);
        getInfo(setCategories, setIsLoadingPage, GET_CATEGORIES_URL);
    }, [])


  return isLoadingPage ? <InfoLoadingSpinner size={56} /> : (
    <Body>

        
    </Body>
  )
}
