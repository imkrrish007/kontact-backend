import { Response, Request } from 'express';
import ContactRepo from '../repositories/contactRepository';
import { Icontact } from '../types/ContactTypes';
import Logger from '../utils/winston.utils';
import BaseController from './baseController';
import Status from '../utils/status-codes-messages.utils';

class ContactController extends BaseController {
  contactRepo = new ContactRepo();

  async addContact(req: Request, res: Response) {
    let data: Icontact = req.body;

    let contactRes: any = await this.contactRepo.addNewContact(data).catch((reason) => {
      console.error('addNewContact: Failed to add Contact reason - ', reason.message);
      Logger.error('addNewContact: ' + reason);
      return this.getDbError(reason);
    });

    if (contactRes.error) {
      this.sendError(res, this.getModifiedError(contactRes, Status.ERROR_CODES.contacts.add_db_error_msg));
      return;
    }

    Logger.info('addNewContact: ' + Status.SERVER_SUCCESS.contacts.data_added);
    this.sendSuccess(res, Status.HTTP_CODES.CREATED, contactRes);
  }

  async getAllContacts(req: Request, res: Response) {
    let reqQuery = req.query;
    // let queryError = this.checkQueryValidate(reqQuery);

    // if (queryError) {
    //   Logger.error('getAllInsights: queryValidate: ' + queryError);
    //   let error = this.getQueryError(queryError);
    //   this.sendError(res, this.getModifiedError(error, Status.ERROR_CODES.insights.get_db_error_msg));
    //   return;
    // }

    let { getAllContactsRes, count }: any = await this.contactRepo.getAllContacts(reqQuery).catch((reason) => {
      console.error('getAllContacts: Failed to get Contacts reason - ', reason.message);
      Logger.error('getAllContacts: ' + reason);
      return this.getDbError(reason);
    });

    
    if (getAllContactsRes.error) {
      this.sendError(res, this.getModifiedError(getAllContactsRes, Status.ERROR_CODES.contacts.get_db_error_msg));
    }
    
    if (getAllContactsRes.length === 0) {
      Logger.error('getAllContacts: ' + Status.SERVER_ERRORS.contact_not_found);
      this.sendError(res, Status.ERROR_CODES.contacts.contact_not_found_msg);
      return;
    }

    Logger.info('getAllContacts: ' + Status.SERVER_SUCCESS.contacts.data_fetched);
    this.sendSuccess(res, Status.HTTP_CODES.SUCCESS, getAllContactsRes, count);
  }

  async getContactById(req: Request, res: Response) {
    let contactId = req.params.id;

    let getContactByIdRes: any = await this.contactRepo.getContactById(contactId).catch((reason) => {
      console.error('getContactById: Failed to get Contact reason - ', reason.message);
      Logger.error('getContactById: ' + reason);
      return this.getDbError(reason);
    });

    if (getContactByIdRes == null || getContactByIdRes.error) {
      Logger.error('getContactById: ' + Status.SERVER_ERRORS.invalid_id);
      this.sendError(res, Status.ERROR_CODES.contacts.get_invalid_id_msg);
      return;
    }

    Logger.info('getContactById: ' + Status.SERVER_SUCCESS.contacts.data_fetched);
    this.sendSuccess(res, Status.HTTP_CODES.SUCCESS, getContactByIdRes);
  }

  async updateContact(req: Request, res: Response) {
    let contactId = req.params.id;
    let data: Icontact = req.body;

    let updateContactRes: any = await this.contactRepo.updateContact(contactId, data).catch((reason) => {
      console.error('updateContact: Failed to update Contact reason - ', reason.message);
      Logger.error('updateContact: ' + reason);
      return this.getDbError(reason);
    });

    if (updateContactRes == null || updateContactRes.error) {
      Logger.error('updateContact: ' + Status.SERVER_ERRORS.update_failed);
      this.sendError(res, Status.ERROR_CODES.contacts.update_db_error_msg);
      return;
    }

    Logger.info('updateContact: ' + Status.SERVER_SUCCESS.contacts.data_updated);
    this.sendSuccess(res, Status.HTTP_CODES.SUCCESS, updateContactRes);
  }

  async deleteContact(req: Request, res: Response) {
    let contactId = req.params.id;

    let deleteContactRes: any = await this.contactRepo.deleteContact(contactId).catch((reason) => {
      console.error('deleteContact: Failed to delete Contact reason - ', reason.message);
      Logger.error('deleteContact: ' + reason);
      return this.getDbError(reason);
    });

    if (deleteContactRes == null || deleteContactRes.error) {
      Logger.error('deleteContact: ' + Status.SERVER_ERRORS.delete_failed);
      this.sendError(res, Status.ERROR_CODES.contacts.delete_db_error_msg);
      return;
    }

    Logger.info('deleteContact: ' + Status.SERVER_SUCCESS.contacts.data_deleted);
    this.sendSuccess(res, Status.HTTP_CODES.SUCCESS, deleteContactRes);
  }
}

export default ContactController;
