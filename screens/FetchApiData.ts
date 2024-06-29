export const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const restJson = await response.json()
return restJson
}