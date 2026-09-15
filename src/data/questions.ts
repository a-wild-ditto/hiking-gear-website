/*
 * Build My Kit questions. Shared by the recommender page and the live first
 * step previewed on the homepage, so both always render the same component.
 */
export type Question = {
  key: string;
  title: string;
  hint: string;
  options: [value: string, label: string, detail?: string][];
};

export const questions: Question[] = [
  {
    key: 'location',
    title: 'Where are you hiking?',
    hint: 'Location shapes how much weather margin your shelter and sleep system need.',
    options: [
      ['nsw', 'NSW / Blue Mountains', 'Varied, often moderate'],
      ['vic', 'Victorian High Country', 'Alpine, changeable'],
      ['tasmania', 'Tasmania', 'Exposed, cold snaps'],
      ['queensland', 'Queensland', 'Warm, humid'],
      ['other', 'Other / not sure'],
    ],
  },
  {
    key: 'season',
    title: 'When are you going?',
    hint: 'Three season means spring, summer and autumn, with cool nights possible.',
    options: [
      ['three-season', 'Three season', 'Spring to autumn, cool nights likely'],
      ['winter', 'Winter', 'Cold nights, frost'],
    ],
  },
  {
    key: 'people',
    title: 'How many people will share the tent?',
    hint: 'Sharing a tent lets you split the weight between two packs.',
    options: [
      ['solo', 'Just me'],
      ['two', 'Two people'],
    ],
  },
  {
    key: 'budget',
    title: 'What is your budget for the core gear?',
    hint: 'Core gear is shelter, sleep system, pack and cooking. Clothing is separate.',
    options: [
      ['under-600', 'Under $600'],
      ['600-900', '$600 to $900'],
      ['900-1300', '$900 to $1,300'],
      ['1300+', '$1,300 or more'],
    ],
  },
  {
    key: 'priority',
    title: 'What matters most to you?',
    hint: 'Every kit is a trade-off. Pick the one you would least like to give up.',
    options: [
      ['lowest-cost', 'Lowest cost', 'Spend only where it counts'],
      ['comfort', 'Comfort', 'Warmer, roomier, easier sleep'],
      ['lightweight', 'Lower weight', 'Lighter pack on the trail'],
    ],
  },
  {
    key: 'experience',
    title: 'How much overnight experience do you have?',
    hint: 'There is no wrong answer. It just changes how forgiving the gear should be.',
    options: [
      ['first', 'This is my first overnight'],
      ['few', 'A few trips'],
      ['experienced', 'Plenty'],
    ],
  },
];
