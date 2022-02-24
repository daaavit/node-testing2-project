const common  ={
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {directory: 'empty for now'},
    seeds: { directory: 'empty for now'},
}

modeule.exports = {
    development: {
        ...common,
        connection: {
            filemane: 'empty for now'
        },
    },

    testing: {
        ...common,
        connection: {
            filename: 'empty fro now'
        },
    },
    production: {
        
    }


}


