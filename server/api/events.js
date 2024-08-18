import { defineEventHandler } from 'h3';
import { events } from '~/events.config.ts';

export default defineEventHandler(async (event) => {
  let eventsList= [];
  for (const eventDay of events) {
    for (const eventObject of eventDay.events) {

      const startDate = new Date(eventDay.day);
      const startSplit = eventObject.start.split(':');
      startDate.setHours(parseInt(startSplit[0])-1, parseInt(startSplit[1]));

      let endDate = null;
      if (eventObject.end) {
        endDate = new Date(eventDay.day);
        const endSplit = eventObject.end.split(':');
        endDate.setHours(parseInt(endSplit[0])-1, parseInt(endSplit[1]));
      }

      const newEvent = {
        id: eventObject.id,
        day: eventDay.day,
        name: eventObject.name,
        start: startDate,
        content: eventObject.content,
      }
      if (endDate) {
        newEvent['end'] = endDate;
      }
      eventsList.push(newEvent);
    }

    eventsList = eventsList.sort((a, b) => {
      return a.start - b.start;
    });
  }
  return eventsList;
})
