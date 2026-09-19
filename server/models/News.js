import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    category: {
      type: String,
      enum: ["cricket", "football", "kabaddi", "tennis", "olympics"],
      required: true,
    },
    date: String,
    source: String,
    author: String,
    tag: String,
    content: String,
    url: String,
  },
  { timestamps: true },
);

export default mongoose.model("News", newsSchema);
