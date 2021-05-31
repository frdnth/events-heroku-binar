const User = (instance, dataType) => {
  return instance.define('user', {
      id:{
          type: dataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
          type: dataType.STRING(100)
      },
      password:{
          type: dataType.STRING(100)
      },
      created_at:{
          type: dataType.DATE(30)
      },
      updated_at:{
          type: dataType.DATE(30)
      }
  },{
      tableName: 'user',
      underscored: true,
      timestamps: true,
  })
}

module.exports = User;