export class DayContainer {
  constructor(date) {
    this.date = date;
    this.meditations = [];
  }
}
export class MeditationContainer {
  constructor(type, duration, textAreas) {
    this.type = type;
    this.duration = duration;
    this.textAreas = textAreas;
  }
}
export class TextAreaContainer {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
export const BASIC_MEDITATION = new MeditationContainer(
  '',
  0,
  [
    new TextAreaContainer('How did your meditation feel?', ''),
    new TextAreaContainer('What kind of thoughts came to mind?', ''),
    new TextAreaContainer('What might you do differently next time you practice '
            + 'this same meditation technique - posture, mudra, length?', ''),
  ],
);
