import { Request, Response } from "express";
import { pool } from "../sql/conexao";

class ContatoController1 {

    public async contato(req: Request, res: Response) {

        await pool.query(`SELECT nome, to_char(data_pub, 'DD/MM/YYYY') as dataEntrada, conteudo FROM comentario ORDER BY ID ASC`)
            .then((array) => {

                let comentarios = array.rows

                console.log(comentarios);

                return res.render("contato", { comentarios });

            })
            .catch((err) => {

                console.log("erro: " + err.stack)

                return res.render("contato")

            })

    }

    public async comentario(req: Request, res: Response) {

        const data = new Date().toLocaleDateString();

        const { nome, email, conteudo } = req.body

        await pool.query(`INSERT INTO comentario (nome , data_pub , email , conteudo) 
                    VALUES ('${nome}','${data}','${email}','${conteudo}')`)
            .then(() => {

                console.log("cadastro realizado com sucesso");

                res.redirect("/Conteudo/Juros")

            })
            .catch((err) => {

                console.log("erro: " + err);

                res.redirect("/Conteudo/Juros")

            })

    }

}

export const contatoController1 = new ContatoController1()