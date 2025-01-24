import { z } from 'zod';

import { AdminType } from '../../../types/api/trait';

export const AdminTypeSchema = z.nativeEnum(AdminType);