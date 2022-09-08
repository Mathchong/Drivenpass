import { users } from '@prisma/client';

export type userCreator = Omit<users, "id">