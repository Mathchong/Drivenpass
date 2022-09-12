import { cards } from '@prisma/client';

export type cardsCreator = Omit<cards, "id">