import axios from "axios";

export const getData = async (URL) => {
    let result = await axios.get(URL)
        .then((response) => {
            return response.data
        })
    return result
}