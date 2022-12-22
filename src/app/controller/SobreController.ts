import { Request, Response } from "express";

class SobreController {

    public Sobre(req: Request, res: Response) {
        return res.render("Sobre");
    }
}

export const sobreController = new SobreController();