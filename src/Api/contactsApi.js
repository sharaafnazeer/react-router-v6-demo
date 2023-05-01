import {API} from "./index";

export const getAllContactsApi = async () => {
    return await API.get('/contacts');
}

export const getContactByIdApi = async (id) => {
    return await API.get(`/contacts/${id}`);
}

export const saveContactApi = async (data) => {
    return await API.post(`/contacts`, data);
}

export const deleteContactApi = async (id) => {
    return await API.delete(`/contacts/${id}`);
}

export const updateContactApi = async (contact) => {
    return await API.put(`/contacts/${contact.id}`, contact);
}