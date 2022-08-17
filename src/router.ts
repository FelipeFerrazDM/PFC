import { Router } from "express";
import { exemploController} from "./controller/ExemploController";

const router: Router = Router()

router.get("/", exemploController.teste);

export { router };