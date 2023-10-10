import { Router } from 'express';
import ContactController from '../../controllers/ContactController';

class contactRoutes {
  appRouter = Router();
  contactCtrl = new ContactController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.appRouter
      .route('/')
      .get((req, res) => this.contactCtrl.getAllContacts(req, res))
      .post((req, res) => this.contactCtrl.addContact(req, res));

    this.appRouter
      .route('/:id')
      .get((req, res) => this.contactCtrl.getContactById(req, res))
      .put((req, res) => this.contactCtrl.updateContact(req, res))
      .delete((req, res) => this.contactCtrl.deleteContact(req, res));
  }
}

export default new contactRoutes().appRouter;
