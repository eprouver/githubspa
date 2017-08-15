'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './thing.events';

var ThingSchema = new mongoose.Schema({
  name: String,
  email: String,
  timestamp: String,
  username: String,
  commit: String,
  message: String
});

registerEvents(ThingSchema);
export default mongoose.model('Thing', ThingSchema);
