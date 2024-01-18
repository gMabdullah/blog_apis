import mongoose from "mongoose";
const mongoDBURI = 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name';

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.PORT, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });