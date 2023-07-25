import axios from 'axios';

axios.defaults.baseURL =
  'https://64bfa7c30d8e251fd11133ca.mockapi.io/phonebook';

export const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const postContact = async newContact => {
  await axios.post(`/contacts`, newContact);
};

export const delContact = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
};
