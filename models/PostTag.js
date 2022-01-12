const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class PostTag extends Model {}

PostTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'post',
              key: 'id'
            },
            onDelete: 'cascade'
          },
          tag_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'tag',
              key: 'id'
            },
            allowNull: false,
            onDelete: 'cascade'
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_tag',
    }
)

module.exports = PostTag