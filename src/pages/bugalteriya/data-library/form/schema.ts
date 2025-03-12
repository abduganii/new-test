import { z } from "zod";

import { requiredStringField } from "@/utils/schemaHelper";

export const CropSchema = z.object({
  name: requiredStringField(),
  
});

export type CropFormType = z.infer<typeof CropSchema>;
