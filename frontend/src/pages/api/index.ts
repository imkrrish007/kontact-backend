import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

//Contacts
export const fetchContacts = async (queryParams: any) => await api.get("/api/contacts", { params: queryParams });

//AddContact
export const addContact = async (formData: any) => await api.post("/api/contacts", formData);

//UpdateContact
export const updateContact = async (_id: any, formData: any) => await api.put(`/api/contacts/${_id}`, formData);

//DeleteContact
export const deleteContact = async (_id: any) => await api.delete(`/api/contacts/${_id}`);
