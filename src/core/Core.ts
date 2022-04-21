import {v4} from "uuid";

export interface ISnatch
{
  setMasking(): Snatch;
  setValidating(): Snatch;
}

type TOptions = {};

export class Snatch implements ISnatch
{
  private _input: HTMLInputElement;
  private isMasking: boolean = false;
  private isValidating: boolean = false;
  public id: string = v4();

  constructor(input: HTMLInputElement, options?: TOptions)
  {
    this._input = input;
  }

  setMasking(): Snatch
  {
    if (this.isMasking) {
      return this;
    }


    this.isMasking = true;
    return this;
  }

  setValidating(): Snatch
  {
    if (this.isValidating) {
      return this;
    }

    this.isValidating = true;
    return this;
  }
}

export class SnatchCore
{
  static currentObserver: MutationObserver;

  public static observePage(): void
  {
    this.currentObserver = new MutationObserver(SnatchCore.observerPageHandler);
    this.currentObserver.observe(
      document.body,
      {
        attributes: true,
        subtree: true,
        childList: true,
      }
    );
  }

  private static observerPageHandler(): void
  {
    const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="tel"]');

    if (allInputs.length) {
      for (let i = 0; i < allInputs.length; i++) {
        const currentInput = allInputs[i];

        if (currentInput.hasOwnProperty('snatch')) {
          return;
        }

        currentInput.snatch = new Snatch(currentInput);
      }
    }
  }
}