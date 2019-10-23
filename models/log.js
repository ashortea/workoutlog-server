module.exports =(sequelize, Datatypes) => {
    const Log = sequelize.define('log', {
        description:{
            type: Datatypes.STRING,
            allowNull: false
        },
        definition:{
            type: Datatypes.STRING,
            allowNull: false
        },
        result:{
            type: Datatypes.STRING,
            allowNull: false

        },
        owner:{
            type: Datatypes.INTEGER,
            allowNull: false
        }
    })
    return Log;
}