const api_key = 'Re6SBe1Mz3cowscgNGB3NtL4BbmNMYkh';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ api_key }`)
    .then( (data) => data.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const image = document.createElement('img');
        image.src = url;
        document.body.append( image );
    })
    .catch( console.error )