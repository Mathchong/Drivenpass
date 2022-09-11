import client from "../app/database";

import { notesCreation } from "../types/notes";

export default class NotesRepository {

    async registerNote(note: notesCreation) {
        await client.notes.create({ data: note });
    }

    async findById(id: number) {
        return await client.notes.findUnique({
            where: { id }
        });
    }

    async getAll(userId: number) {
        return await client.notes.findMany({
            where: { userId }
        })
    }

    async findByTitleAndUserId(userId: number, title: string) {
        return await client.notes.findFirst({
            where: {
                title,
                userId
            }
        })
    }

    async deleteNote(id: number) {
        await client.notes.delete({
            where: { id }
        })
    }
}