
export const getImagen = async() => {

    try {
        const api_key = 'Re6SBe1Mz3cowscgNGB3NtL4BbmNMYkh';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'Fail to fetch at GIPHY API'
    }
      
}




