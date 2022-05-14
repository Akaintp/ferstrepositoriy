import express from "express";
import { engine } from "express-handlebars";
import session from "express-session";
import cors from "cors"
import User from "./model/login.model";

const app = express()

declare module 'express-session' {
    export interface SessionData {
        user: User
    }
}

app.use(session({
    secret: process.env.SESSION_SECRET!,
    saveUninitialized: true,
    proxy: true
}))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './pages')

app.listen(process.env.PORT || 1234, () => {
    console.log('Server is running... ')
})