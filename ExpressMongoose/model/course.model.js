const { string } = require("joi");
const mongoose = require("mongoose");

const courseSchema = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 50,
    },
    category: {
      type: String,
      enum: ["web dev", "desktop dev", "mobile dev"],
      lowercase: true,
      trim: true,
    },
    author: {
      type: String,
      minlength: 4,
      maxlength: 50,
    },
    tags: {
      type: [String],
    },
    //tags:{type:Array}
    date: {
      type: Date,
      default: Date.now,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    price: {
      type: Number,
      min: 10,
      max: 1000,
      required: function () {
        return this.isPublished;
      },
    },
  })
);

module.exports = courseSchema;
