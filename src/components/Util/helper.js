export let contactArray = [
    {
        id: 1,
        firstName: 'Tony',
        lastName: 'Stark',
        description: 'A marvel super hero',
        contactNumber: '+1223243535',
    }
];
export const addContact = (contact) => {
    contactArray = [...contactArray, contact]
}

export const deleteContact = (id) => {
    contactArray = contactArray.filter((contact) => contact.id !== parseInt(id));

}