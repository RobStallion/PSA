import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

export const PageOne = new Mongo.Collection('pageone');
