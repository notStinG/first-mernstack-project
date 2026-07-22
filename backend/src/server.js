import express from 'express';
import notesRoutes from 'routes/notesRoutes'

const app = express();

app.use('/api/notes', notesRoutes)

app.listen(3000, ()=> {
    console.log('server started on port 3000')
})