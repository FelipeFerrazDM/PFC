import { Request, Response } from "express";
import { pool } from "../sql/conexao";

class ConteudoController {

    public async juros(req: Request, res: Response) {

        await pool.query(`SELECT nome, to_char(data_pub, 'DD/MM/YYYY') as dataEntrada, conteudo FROM comentario ORDER BY ID DESC`)
            .then((array) => {

                let comentarios = array.rows

                console.log(comentarios);

                return res.render("juros", { comentarios });

            })
            .catch((err) => {

                console.log("erro: " + err.stack)

                return res.render("juros")

            })
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