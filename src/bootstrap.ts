import {Snatch, SnatchCore} from "./core/Core.ts";

const SnatchObject: object = Object.create({
  Create: Snatch,
  observePage: SnatchCore.observePage,

  __core: {
    SnatchCore,
    Snatch
  },
});

export function bootstrap(): void
{
  window.Snatch = SnatchObject;
}

declare global {
  interface Window { Snatch: any; }
  interface HTMLInputElement {
    snatch: Snatch;
  }
}