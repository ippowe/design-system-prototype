// date/src/index.ts
import { format as dateFnsFormat } from "date-fns";

const DEFAULT_FORMAT = "yyyy-MM-dd HH:mm";
export const format = (date = new Date(), formatString?: string) => dateFnsFormat(date, formatString ?? DEFAULT_FORMAT);
