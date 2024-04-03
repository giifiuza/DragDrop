import { Key } from "react";

export type Id = Key | null | undefined  ;

export type Column = {
    id: Id;
    title:string

}

export type Task = {
    id: Id,
    columnId: Id,
    title: string,
    // description: string,
    // status:string,
    // date: Date
}