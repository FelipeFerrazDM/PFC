import express from "express";
import { router } from "./router";
import { engine } from "express-handlebars";
export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {

        this.server.set('views', __dirname + '/app/views');
        this.server.engine('.hbs', engine({

            defaultLayout: 'main',

            extname: '.hbs'

        }));
        this.server.set('view engine', '.hbs');

        // linkagem dos diretorios static
        this.server.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
        this.server.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
        this.server.use('/jquery', express.static('./node_modules/jquery/dist'));
        this.server.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
        this.server.use('/hbs', express.static('./node_modules/handlebars/dist/'));
        this.server.use('/public', express.static(__dirname + "/app/public"));
        this.server.use('/sql', express.static(__dirname + '/app/sql'));

        // configuração do bodyparse
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    // definindo rota
    private router() {
        this.server.use(router);
    }
}