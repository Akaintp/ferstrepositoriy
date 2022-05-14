import { Router } from "express";
import loginService from "../service/login.service";
import User from "../model/login.model";

const router = Router()


router.get('/', (req, res) => {
  return res.sendStatus(200)
})

router.post('/login', (req, res) => {

})







export default router