import { notes } from '@prisma/client';

export type notesCreation = Omit<notes, "id">