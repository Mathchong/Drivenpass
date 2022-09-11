import { notesCreation } from "../types/notes";
import NotesRepository from "../repositories/notesRepository";

const notes = new NotesRepository();

export default class NotesServices {
    async create(note: notesCreation) {
        
        const alreadyExists = await notes.findByTitleAndUserId(note.userId, note.title)
        if (alreadyExists) throw { status: 409, message: "Note already exists" }

        await notes.registerNote(note)
    }

    async getAll(userId: number) {
        let notesFromUser = await notes.getAll(userId)

        return notesFromUser
    }


    async getById(noteId: number, userId: number) {

        const note = await notes.findById(noteId)
        if (!note) throw { status: 404, message: "Note not found" }
        if (note.userId !== userId) throw { status: 401, message: "Unauthorized" }

        return note
    }

    async delete(userId: number, noteId: number) {

        const note = await notes.findById(noteId)
        if (!note) throw { status: 404, message: "Note not found" }
        if (note.userId !== userId) throw { status: 401, message: "Unauthorized" }
        await notes.deleteNote(noteId)
    }
}

