export default class Question {
  static TYPES = Object.freeze({
    SINGLE: "Options: 단수선택",
    MULTIPLE: "Options: 복수선택",
    TEXT: "Options: 주관식"
  });

  static DEFAULTS = Object.freeze({
    text: "질문 내용",
    type: Question.TYPES.SINGLE,
    options: []
  });

  constructor(params = {}) {
    const { text, type, options, id } = { ...Question.DEFAULTS, ...params };
    this.text = text;
    this.type = type;
    this.options = options;
    this.id = id || Math.random();
  }

  get hasOptions() {
    return (
      this.type === Question.TYPES.SINGLE ||
      this.type === Question.TYPES.MULTIPLE
    );
  }

  get inputType() {
    if (this.type === Question.TYPES.SINGLE) return "radio";
    if (this.type === Question.TYPES.MULTIPLE) return "checkbox";
    throw new Error("This question does not have an input type.");
  }

  merge(patch) {
    return new Question({ ...this, ...patch });
  }
}
