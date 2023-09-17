import { useEffect, useState } from "react";
import { fetchContacts, addContact, deleteContact, updateContact } from "./api";
import Layout from "@/components/layout";
import Table from "@/components/Table";
import Model from "@/components/Model";
import AddContactForm from "@/components/AddContactForm";
import UpdateContactForm from "@/components/UpdateContactForm";
import { DefaultSeo } from "@/components/Seo";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [addContactFormToggle, setAddContactFormToggle] = useState(false);
  const [updateFormToggle, setUpdateFormToggle] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});
  const [queryParams, setQueryParams] = useState<any>({
    sortBy: "name",
    sortOrder: "DESC",
  });

  const handleSort = () => {
    if (queryParams.sortOrder === "DESC") {
      setQueryParams({ ...queryParams, sortBy: "name", sortOrder: "ASC" });
    } else {
      setQueryParams({ ...queryParams, sortBy: "name", sortOrder: "DESC" });
    }
  };

  const handleSearch = (e: any) => {
    setQueryParams({ ...queryParams, name: e.target.value });
  };

  const handleAddContact = (formData: any) => {
    addContact(formData)
      .then((res) => {
        console.log(res.data);
        fetchContacts(queryParams)
          .then((res) => setContacts(res.data.data))
          .catch((e) => {
            console.log(e);
          });
        setAddContactFormToggle(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleUpdateContact = (_id: any, formData: any) => {
    updateContact(_id, formData)
      .then((res) => {
        console.log(res.data);
        setUpdateFormToggle(false);
        fetchContacts(queryParams)
          .then((res) => setContacts(res.data.data))
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleUpdate = (formData: any) => {
    setUpdateFormToggle(true);
    setUpdateFormData(formData);
  };

  const handleDelete = (_id: any) => {
    deleteContact(_id)
      .then((res) => {
        console.log(res.data);
        fetchContacts(queryParams)
          .then((res) => setContacts(res.data.data))
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchContacts(queryParams)
      .then((res) => setContacts(res.data.data))
      .catch((e) => {
        console.log(e);
        setContacts([]);
      });
  }, [queryParams]);

  return (
    <>
      <DefaultSeo />
      <Layout handleSearch={handleSearch} addContactFormToggle={setAddContactFormToggle}>
        <Model isVisible={addContactFormToggle} title="Add Contact" onClose={() => setAddContactFormToggle(false)}>
          <AddContactForm handleAddContact={handleAddContact} />
        </Model>
        <Model isVisible={updateFormToggle} title="Update Contact" onClose={() => setUpdateFormToggle(false)}>
          <UpdateContactForm handleUpdateContact={handleUpdateContact} updateFormData={updateFormData} />
        </Model>
        <Table contacts={contacts} handleSort={handleSort} handleDelete={handleDelete} handleUpdate={handleUpdate} />
      </Layout>
    </>
  );
}
