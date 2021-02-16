import { format, parseISO } from 'date-fns';

const formatDate = (date: any): string =>
  format(parseISO(`${date}`), 'dd/MM/yyyy');
export default formatDate;
