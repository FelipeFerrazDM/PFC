import { Router } from "express";
import { homeController } from "./app/controller/HomeController";
import { quemSomosController } from "./app/controller/QuemSomosController";
import { conteudoController } from "./app/controller/ConteudoController";
import { contatoController1 } from "./app/controller/ContatoController1";

const router: Router = Router()

router.get("/", homeController.home);
router.get("/QuemSomos", quemSomosController.quemsomos);
router.get("/Conteudo/Juros", conteudoController.juros, contatoController1.contato);
router.get("/Conteudo/CreditoeDebito", conteudoController.creditoedebito);
router.get("/Conteudo/Contas", conteudoController.contas);
router.get("/Conteudo/Livros", conteudoController.livros);
/* router.post("/salvar/comentario", contatoController1.comentario) */

export { router };