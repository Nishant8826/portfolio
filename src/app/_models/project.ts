import { Tag } from "./tag";

export interface project {
    id: number,
    name: string,
    summary: string,
    description: string,
    projectLink: string,
    liveLink: string,
    pictures: string[],
    tags: Tag[]
}