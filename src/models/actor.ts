import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from '@sequelize/core';
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Table,
} from '@sequelize/core/decorators-legacy';

@Table({
  tableName: 'actor',
  timestamps: false,
})
export class Actor extends Model<
  InferAttributes<Actor>,
  InferCreationAttributes<Actor>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare actor_id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare first_name: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare last_name: string;

  @Attribute(DataTypes.DATE)
  @NotNull
  declare last_update: Date;
}
