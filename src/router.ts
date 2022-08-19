import { Router } from "express";
import { homeController } from "./app/controller/HomeController";

const router: Router = Router()

router.get("/", homeController.home);

export { router };