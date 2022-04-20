export interface ISnatch
{
  setMasking(): Snatch;

  setValidating(): Snatch;
}

type TOptions = {};

export class Snatch implements ISnatch
{
  private _input: HTMLInputElement;

  constructor(input: HTMLInputElement, options: TOptions)
  {
    this._input = input;
  }

  setMasking(): Snatch
  {


    return this;
  }

  setValidating(): Snatch
  {
    return this;
  }
}