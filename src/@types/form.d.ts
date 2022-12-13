import {
  DeepMap,
  FieldArray,
  FieldArrayPath,
  FieldValues,
  Message,
  MultipleFieldErrors,
  Ref,
} from 'react-hook-form'

export interface FieldError {
  type: string
  ref?: Ref
  types?: MultipleFieldErrors
  message?: Message
}

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>

export type FieldArrayWithId<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = 'id',
> = FieldArray<TFieldValues, TFieldArrayName> & Record<TKeyName, string>
