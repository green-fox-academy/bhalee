'use strict';
export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _borned: string;
  protected _petAble: boolean;
  abstract getName(): string;
  abstract breed(): string;
  abstract eat(): string;
}
