const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la aplicación//  
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida//
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida //
    },  
    module:{
         rules:[
            {
                test: /\ .css$/, //Regex para identificar archivos CSS//   
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos css//

            },
            {
                test: /\ .js$/, //Refez para identificar archivos JS 
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use:{
                    loader: 'babel-loader', //Loader para pasar JS moderno a JS mas antiguo          
                    options:{
                        presents: ['@babel/presents-env'],
                
                    },
                },
            },
         ],
    },
    devtool:'source-map', //Generar source para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta principal
        compress: true, //Habilitar la comprension gzip
        port: 9000, //Puerto del servidor del desarrollo
    
    }, 
};
