import { z } from 'zod';

import { UserLevel } from '../../../types/api/trait';

export const UserLevelSchema = z.nativeEnum(UserLevel);
