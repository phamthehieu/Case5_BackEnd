import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    idPost: number;
    @Column({type: 'text'})
    content: string;
    @Column({type: 'text'})
    image: string;
    @Column()
    idUser: number;
    @Column()
    idFriend: number;
    @Column({default: 'public',
        enum: ['public', 'private','friend']})
    role: string;
    @Column()
    time: string
}