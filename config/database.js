const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/parks', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});
