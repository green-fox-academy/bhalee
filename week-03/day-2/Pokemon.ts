'use strict';
export class Pokemon {
  _name: string;
  _type: string;
  _effectiveAgainst: string;

  constructor(name: string, type: string, effectiveAgainst: string) {
      this._name = name;
      this._type = type;
      this._effectiveAgainst = effectiveAgainst;
  }

  isEffectiveAgainst(pokemon: Pokemon): boolean {
      return this._effectiveAgainst === pokemon._type;
  }
}