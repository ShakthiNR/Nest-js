import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users { 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 100 })
    name: string;
    
    @Column({ type: 'int' })
    age: number;
    
    @Column({ type: 'enum', enum: ['M', 'F', 'O'] })
    gender: string;
}