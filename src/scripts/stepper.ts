/**
 * Tiny step timeline. Inside `root`, any element with data-at="N" gets .is-on once step >= N,
 * and data-only="N" gets .is-on only while step === N. Returns controls.
 */
export function createStepper(root: HTMLElement, { max = 14, interval = 650 } = {}) {
  let step = 0, timer = 0;
  const paint = () => {
    root.dataset.step = String(step);
    root.querySelectorAll<HTMLElement>('[data-at]').forEach((el) => el.classList.toggle('is-on', step >= Number(el.dataset.at)));
    root.querySelectorAll<HTMLElement>('[data-only]').forEach((el) => el.classList.toggle('is-on', step === Number(el.dataset.only)));
  };
  return {
    get step() { return step; },
    set(n: number) { step = n; paint(); },
    reset() { step = 0; paint(); },
    play() { this.stop(); timer = window.setInterval(() => { if (step < max) { step++; paint(); } }, interval); },
    stop() { clearInterval(timer); },
    paint,
  };
}
