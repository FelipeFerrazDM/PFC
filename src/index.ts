import { App } from "./app"

const __PORTA:number = parseInt(process.env.PORT as string) || 8080;

new App().server.listen(__PORTA , ()=>{

    console.log(`servidor rodando na porta: ${__PORTA}`);

});