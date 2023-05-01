import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteContactApi, getAllContactsApi, getContactByIdApi, saveContactApi} from "../Api/contactsApi";

const initialState = {
    contacts: [], // list of contacts
    selectedContact: null, // currently selected contact
}

export const getAllContacts = createAsyncThunk(
    'contact/getAllContacts',
    async (_, thunkAPI) => {
        const response = await getAllContactsApi(); // return get response from the api
        thunkAPI.dispatch(updateContacts(response.data)); // passing the response to the reducer function including the response
        return response.data
    }
);

export const getContactById = createAsyncThunk(
    'contact/getContactById',
    async (contactId, thunkAPI) => {
        const response = await getContactByIdApi(contactId); // return get response from the api
        thunkAPI.dispatch(updateSelectedContact(response.data)); // passing the response to the reducer function including the response
        return response.data
    }
);

export const saveContact = createAsyncThunk(
    'contact/saveContact',
    async (contact, thunkAPI) => {
        const response = await saveContactApi(contact); // will execute save api call and return a response
        thunkAPI.dispatch(getAllContacts()); // dispatch get all contacts function
        return response.data
    }
);

export const deleteContactById = createAsyncThunk(
    'contact/deleteContactById',
    async (contactId, thunkAPI) => {
        const response = await deleteContactApi(contactId); // return get response from the api
        thunkAPI.dispatch(getAllContacts()); // dispatch get all contacts function
        return response.data
    }
);

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateContacts: (state, action) => {
            state.contacts = action.payload
        },
        updateSelectedContact: (state, action) => {
            state.selectedContact = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {updateContacts, updateSelectedContact} = contactSlice.actions

export default contactSlice.reducer