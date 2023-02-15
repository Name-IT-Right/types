export type NameItRightDatabase = Record<string, NameItRightService>;

export type NameItRightService = {
  properties: NameItRightProperties
};

export type NameItRightProperties = Record<string, NameItRightProperty>;

export type NameItRightProperty = {
  validation: {
    errors: Rule[],
    warnings: Rule[]
  }
}

export type Rule = {
  id: string,
  errorMessage: string;
  regex: string;
}
