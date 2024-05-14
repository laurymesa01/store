import { Pipe, PipeTransform } from '@angular/core';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string | undefined {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);
  }

}
