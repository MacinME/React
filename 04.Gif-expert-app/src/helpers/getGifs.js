export const onFechAPI = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Re6SBe1Mz3cowscgNGB3NtL4BbmNMYkh&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const images = data.map( img => ({
        id: img.id,
        title: img.title,
        image: img.images.downsized_medium.url
    }));
    return images;
}