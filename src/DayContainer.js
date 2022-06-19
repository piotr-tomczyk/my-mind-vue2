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