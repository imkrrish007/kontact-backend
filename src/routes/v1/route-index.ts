import { Application } from 'express';
import contactRoutes from './contactsRoutes';

export default class Routes {
  constructor(app: Application) {
    app.use('/api/contacts', contactRoutes);
  }
}