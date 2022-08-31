import { Request, Response } from "express";

class QuemSomosController {

    public quemsomos(req:Request, res:Response) {
        return res.render("quemSomos");
    }
}

export const quemSomosController = new QuemSomosController();