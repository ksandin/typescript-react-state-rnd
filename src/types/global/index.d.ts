type Opaque<T, K> = T & { __TYPE__: K };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

type PickSub<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

type OmitSub<Base, Condition> = Omit<Base, AllowedNames<Base, Condition>>;
