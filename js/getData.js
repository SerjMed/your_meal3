export const getData = async (url) => {
    const response = await fetch(url); //обычный запрос на сервер
    if (response.ok) {
        return response.json()
    }
}