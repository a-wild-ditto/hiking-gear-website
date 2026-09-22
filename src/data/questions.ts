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
    hint: 'Pick the season you are planning for. The Value kit suits most areas of Australia year-round.',
    options: [
      ['three-season', 'Spring to autumn', 'Most trips'],
      ['winter', 'Winter', 'Cooler nights'],
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
    hint: 'Core gear is shelter, sleep system and pack. Cooking and comfort add-ons are separate.',
    options: [
      ['under-300', 'Under A$300'],
      ['300-500', 'A$300 to A$500'],
      ['over-500', 'Over A$500'],
    ],
  },
  {
    key: 'priority',
    title: 'What matters most to you?',
    hint: 'Every kit is a trade-off. Pick the one you would least like to give up.',
    options: [
      ['lowest-cost', 'Lowest cost', 'Spend only where it counts'],
      ['comfort', 'Comfort', 'Roomier fit, simpler setup'],
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
