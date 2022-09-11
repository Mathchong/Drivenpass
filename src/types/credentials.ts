import { credentials } from '@prisma/client';

export type credentialsCreator = Omit<credentials, "id">