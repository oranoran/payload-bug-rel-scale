import express from 'express';
import payload, { Payload } from 'payload';
import { populate } from './populate';

require('dotenv').config();
const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: async (p: Payload) => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    await populate(p)
  },
});

// Add your own express routes here

app.listen(3000);
