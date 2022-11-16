

export const getImagen = async () => {
    try {
        //mi key 3XNEEHns0gmoVSVGhHAKMR3v31wMpxde
        const apiKey = '';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        
        return 'No se encontro la imagen';
    }
    

};