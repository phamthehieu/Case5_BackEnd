import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    idComment: number;
    @Column()
    idPosts: number;
    @Column()
    idUser: number;
    @Column()
    content: string;
    @Column()
    time: string;

}