import express from 'express';
import {getDay, getAllDays, addDay} from '../controllers/dayController.js';

const router=express.Router();

router.get ('/showday/:ourDay', getDay);
router.get ('/alldays', getAllDays);
router.post ('/addday', addDay);

export default router;
