const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tech-blog', {
    
})

module.exports = mongoose.connection 