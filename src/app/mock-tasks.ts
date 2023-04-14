import {Task} from './Task'

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th',
    weekday:'csütörtök',
    time: '14:30',
    locationtext: 'Wesselényi utca',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting',
    day: 'May 6th',
    weekday:'péntek',
    time: '13:30',
    locationtext: 'főépület',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th ',
    weekday:'szombat',
    time: '10:40',
    locationtext: 'főépület',
    reminder: false,
  },
];