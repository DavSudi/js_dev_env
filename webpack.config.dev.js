import path from 'path';

export default{
    debug: true,
    devtool:'inline-source-map',
    noInfo: false,
    entry:[
        path.resolve(___dirname,'src/index')
    ],
    target:'web',
    output:{
        path : path.resolve(___dirname,'src'),
        publicPath: '/',
        filename : 'bundle.js'
    },
    plugin:[],
    module:{
        loaders:[
            {test:/\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test:/\.css$/, loaders: ['style','css']}
        ]
    }


}
