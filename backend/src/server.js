import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 3000


// Middleware

// parse json body
app.use(express.json());
app.use(rateLimiter);

/*
// simple logger to demo middleware

app.use((req, res, next) => {
    console.log(`Request method is ${req.method} & Request URL is ${req.url}`)
    next();
});

*/

app.use('/api/notes', notesRoutes)

connectDB().then(() => {
        app.listen(PORT, ()=> {
        console.log('server started on port 3000', PORT);
    });
});