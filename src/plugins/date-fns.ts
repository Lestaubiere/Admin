import { format as dateFnsFormat } from 'date-fns';
import { fr } from 'date-fns/locale';

export const format = (date: number | Date, formatStr: string = 'PP') => {
  return dateFnsFormat(date, formatStr, {
    locale: fr,
  });
};
