import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

export const StorePageOneData = new Mongo.Collection('storePageOneData');
