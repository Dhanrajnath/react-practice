export type RandomNumberType = {
    value: number
}

export type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

export type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

export type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

export type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero }:
    RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'Negative'}{' '}
            {isZero && 'Zero'}
        </div>
    )
}