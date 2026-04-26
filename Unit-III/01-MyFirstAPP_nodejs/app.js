// 1. Importamos las herramientas que acabamos de descargar de NPM
const figlet = require('figlet');
const chalk = require('chalk');

// 2. Usamos la herramienta 'figlet' para crear tipografía ASCII
figlet('Diseno Digital', function(error, textoDibujado) {
    if (error) {
        console.log('Hubo un error al dibujar la tipografía.');
        return;
    }

    // 3. Usamos 'chalk' para pintar ese texto de color Cian y hacerlo negrita
    console.log(chalk.cyan.bold(textoDibujado));
    
    // Un mensaje extra para demostrar que dominan la consola
    console.log(chalk.yellow('¡Hola desde mi computadora, sin necesidad \
        de usar el navegador!'));
    console.log(chalk.bgRed.white(' NPM es mi nueva App Store '));
});