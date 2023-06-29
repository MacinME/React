
const getImage = async () => {

    const api_key = 'Re6SBe1Mz3cowscgNGB3NtL4BbmNMYkh';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);
    const data = await resp.json();

    const img = data.data.images.original.url;
    
    const image = document.createElement('img');
    image.src = img;
    document.body.append( image );

}

getImage();
