import mongoose from "mongoose";
const mongoDBURI = 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name';

const mongooseOptions = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,  // Although deprecated, including it won't harm and keeps backward compatibility
  useUnifiedTopology: true,  // Although deprecated, including it won't harm and keeps backward compatibility
};

mongoose.connect(process.env.MONGO_URI, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });