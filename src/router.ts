import { Router } from "express";
import { homeController } from "./app/controller/HomeController";
import { quemSomosController } from "./app/controller/QuemSomosController";
import { conteudoController } from "./app/controller/ConteudoController";
import { sobreController } from "./app/controller/SobreController";

const router: Router = Router()

router.get("/", homeController.home);
router.get("/QuemSomos", quemSomosController.quemsomos);
router.get("/Conteudo/Juros", conteudoController.Juros);
router.get("/Conteudo/CreditoeDebito", conteudoController.creditoedebito);
router.get("/Conteudo/Contas", conteudoController.contas);
router.get("/Conteudo/Livros", conteudoController.livros);
router.get("/Conteudo/Investimentos", conteudoController.Investimentos);
router.get("/Sobre", sobreController.Sobre);

export { router };