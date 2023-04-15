export const getGifs = async ( category ) => {
    const api_key = 'zgsTbMUSwa35QVVovG0HPPPDl8jiBHUe'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=20`
    const request = await fetch(url)
    const { data } = await request.json()

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.fixed_height.url,
        size: gif.images.fixed_height.height
    }))
    console.log(data)
    return gifs
}