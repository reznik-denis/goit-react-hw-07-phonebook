import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContactsAdd(data) {
    return await axios.post(`/contacts`, data).then(({data}) => data);
}

export async function fetchContactsDelete(id) {
    return await axios.delete(`/contacts/${id}`).then(({data}) => data);
}

export async function fetchContact( ) {
    return await axios.get(`/contacts`).then(res => res.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContactsAdd, fetchContactsDelete, fetchContact };