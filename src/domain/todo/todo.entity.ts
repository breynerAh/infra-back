import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'todo',
})
export class Todo {
  /**
   * id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * name
   */
  @Column({ type: 'varchar', nullable: false })
  name: string;

  /**
   * email
   */
  @Column({ type: 'varchar', nullable: false })
  email: string;

  /**
   * createDate
   */
  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;

  /**
   * updateDate
   */
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;

  /**
   * deleteDate
   */
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleteDate: Date | null;
}
