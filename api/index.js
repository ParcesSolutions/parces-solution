import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import uniformRoutes from './routes/uniform.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

/*access env file*/
dotenv.config();

/*connect to mongoDB*/
mongoose
    .connect(process.env.MONGO)
        .then(() => {
            console.log('MongoDB is connected');
        })
        .catch((err) => {
            console.log(err);
        });

        const _dirname = path.resolve();

const app = express();

/* Turn res from DB into json in order to manipulate*/
app.use(express.json());

// initialize cookie-parser in order to get access to cookies
app.use(cookieParser());

/* connect get route */
app.listen(3000, () => {
    console.log('server is running on port 3000')
});

/* routes */
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/uniform', uniformRoutes);

app.use(express.static(path.join(_dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'));
});

/*Middleware to handle errors for signup route*/
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});