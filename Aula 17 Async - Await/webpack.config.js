const path = require('path')

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        //sourceMapFilename:'bundle.js.map'   
    },
    devServer: {
        
        //port: 3000,
        static: { 
            directory: path.resolve(__dirname, './public'),            
        }
        
    }
  
} 