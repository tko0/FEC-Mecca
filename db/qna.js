import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
  question_id: {
    type: Number,
  },
  product_id: {
    type: Number,
  },
  asker_name: {
    type: String,
  },
  question_body: {
    type: String,
  },
  question_date: {
    type: Date,
  },
  question_helpfulness: {
    type: Number,
  },
  question_reported: {
    type: Number,
  },
});

const answerSchema = new Schema({
  question_id: {
    type: Number,
  },
  answer_id: {
    type: Number,
  },
  answerer_name: {
    type: String,
  },
  answer_body: {
    type: String,
  },
  answer_date: {
    type: Date,
  },
  answer_helpfulness: {
    type: Number,
  },
  answer_reported: {
    type: Number,
  },
});

const photoSchema = new Schema({
  id: {
    type: Number,
  },
  answer_id: {
    type: Number,
  },
  url: {
    type: String,
  },
});

export {
  questionSchema,
  answerSchema,
  photoSchema,
};
