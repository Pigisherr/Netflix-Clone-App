import mongoose from "mongoose"
import express from "express"
import axios from "axios"

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define a sample Mongoose schema and model
const SampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const SampleModel = mongoose.model('Sample', SampleSchema);

// Add CORS middleware
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});