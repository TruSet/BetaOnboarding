import {DateTime} from 'luxon'

export default {
  launchDate: DateTime.fromObject({
    year: 2018,
    month: 10,
    day: 1,
    hour: 0,
    zone: 'America/New_York'
  }).toLocaleString(DateTime.DATE_MED),
  rewardAmount: '$2,000',
}
