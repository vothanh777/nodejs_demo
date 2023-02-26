const mongoose = require("mongoose");

const slug = require("mongoose-slug-generator");

const mongooseDelete = require("mongoose-delete");
const { query } = require("express");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

//custom query helpers
// CourseSchema.query.sortable = (req) => {
//   if (req.query.hasOwnProperty("_sort")) {
//     const isValidType = ["asc", "desc"].includes(req.query.type);
//     return this.sort({
//       [req.query.column]: isValidType ? req.query.type : "desc",
//     });
//   }
//   return this;
// };

//Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Course", CourseSchema);
