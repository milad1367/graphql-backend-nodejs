
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Comment {
    id?: number;
    name?: string;
    content?: string;
}

export class Post {
    id?: number;
    name?: string;
    comments?: Comment[];
    image?: string;
    content?: string;
}

export abstract class IQuery {
    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract post(id: string): Post | Promise<Post>;
}
