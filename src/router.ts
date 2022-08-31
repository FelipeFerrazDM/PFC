import { Router } from "express";
import { homeController } from "./app/controller/HomeController";
import { quemSomosController } from "./app/controller/QuemSomosController";
import { conteudoController } from "./app/controller/ConteudoController";

const router: Router = Router()

router.get("/", homeController.home);
router.get("/QuemSomos", quemSomosController.quemsomos);
router.get("/Conteudo/Juros", conteudoController.juros);
router.get("/Conteudo/CreditoeDebito", conteudoController.creditoedebito);
router.get("/Conteudo/Contas", conteudoController.contas)

export { router };