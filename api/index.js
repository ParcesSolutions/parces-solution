import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

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