import { Request, Response } from "express";

class ConteudoController {
    public Juros(req: Request, res: Response) {
        return res.render("juros");
    }

    public creditoedebito(req: Request, res: Response) {
        return res.render("creditoedebito");
    }

    public contas(req: Request, res: Response) {
        return res.render("contas");
    }

    public livros(req: Request, res: Response) {
        return res.render("livros");
    }

    public Investimentos(req: Request, res: Response) {
        return res.render("investimentos");
    }
}

export const conteudoController = new ConteudoController();