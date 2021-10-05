import { Exclude, Type } from "class-transformer";
import { IsDefined, IsInstance, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { People } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "FieldingOF"
})
export class FieldingOF {
  @PrimaryGeneratedColumn()
  @IsDefined()
  public id: number;

  @ManyToOne(() => People, people => people.fieldingOF)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("integer")
  @IsInt()
  public yearID: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public Glf: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public Gcf: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public Grf: number;
}