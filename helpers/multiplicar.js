
const fs = require('fs');
var colors = require('colors');

 const crearArchivo = async( base = 5 , listar = false , hasta = 10) => {

    try {
        
       
      
        let salida = "";
        let consola = "";
      
        for (let index = 1; index <= hasta; index++) {
          salida += `${base} X ${index} = ${base * index}\n`;
          consola += `${base} ${ 'X'.green } ${index} ${ '='.green } ${base * index}\n`;
        }
      
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        if (listar) {

            console.log(colors.cyan("=================="));
            console.log(`  Tabla del ${base}`);
            console.log(colors.cyan("=================="));
            console.log( consola );
            
        }

        return (`Archivo Tabla-${base}.txt creado.`);

    } catch (err) {
        throw err;
    }


};

module.exports = {
    crearArchivo
};


