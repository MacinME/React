import { useEffect, useState } from 'react';
import { onFechAPI } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState( true );

    const onGetImages = async() => {
        const newImages = await onFechAPI( category );
        setImages( newImages );
        setisLoading( false );
    }

    useEffect(() => {
        onGetImages();
    },[]);


  return {
    images,
    isLoading
  }
}
