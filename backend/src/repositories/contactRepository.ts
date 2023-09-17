import ContactModel from '../models/contactModel';
import { Icontact } from '../types/ContactTypes';
import BaseRepo from './baseRepository';

export default class ContactRepo extends BaseRepo {
  defaultSortingOrder: any = ['name', 'DESC'];

  async addNewContact(data: Icontact) {
    return await ContactModel.create(data);
  }

  async getAllContacts(query: any) {
    let order = {};
    let filters: any = {};
    this.setOrder(query, this.defaultSortingOrder, order);

    if (query.name) {
      let regx = new RegExp(query.name, 'i');
      filters.name = { $regex: regx };
    }

    let getAllContactsRes = await ContactModel.find(filters).sort(order);
    let count = await ContactModel.countDocuments(filters);

    return { getAllContactsRes, count };
  }

  async getContactById(id: any) {
    return await ContactModel.findById(id);
  }

  async updateContact(id: any, data: Icontact) {
    return await ContactModel.findByIdAndUpdate(id, data);
  }

  async deleteContact(id: any) {
    return await ContactModel.findByIdAndDelete(id);
  }
}
