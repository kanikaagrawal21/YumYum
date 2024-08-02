import mongoose from "mongoose";

const password = encodeURIComponent("bandar123#");
export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://KanikAagrawal:${password}@cluster0.qlfo9nq.mongodb.net/YumYum`
    )
    .then(() => console.log("DBconnected"));
};
