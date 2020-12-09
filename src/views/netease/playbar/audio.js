export default class Audio {
  constructor(element) {
    this.element = element;
  }
  play() {
    this.element.play();
  }
  pause() {
    this.element.pause();
  }
}
