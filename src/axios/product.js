import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/product';

export const getProduct = async (id) => {
    try {
        const data = await axios
            .get(`${baseUrl}`, { params: { id } })
            .then((res) => {
                return res.data;
            });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getListProduct = async () => {
    try {
        const data = await axios
            .get(`${baseUrl}/collection`)
            .then((res) => res.data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
