export default class WindowHelper {
  constructor() {
    this.onResize()
    this.initEvents()
  }

  public initEvents() {
    window.addEventListener('resize', this.onResize)
  }

  public removeEvents() {
    window.removeEventListener('resize', this.onResize)
  }

  protected onResize() {
    document.documentElement.style.setProperty(
      '--window-inner-height',
      `${window.innerHeight}px`
    )
  }
}
