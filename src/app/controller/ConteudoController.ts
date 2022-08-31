import { Request, Response } from "express";

class ConteudoController {

    public juros(req:Request, res:Response) {
        return res.render("juros");
    }

    public creditoedebito(req:Request, res:Response) {
        return res.render("creditoedebito");
    }

    public contas(req:Request, res:Response) {
        return res.render("contas");
    }
}

export const conteudoController = new ConteudoController();