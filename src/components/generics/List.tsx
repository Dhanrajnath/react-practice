export type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends { id: number, firstName: string, lastName: string }>({ items, onClick }: ListProps<T>) => {
    // export const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.firstName}
                    </div>
                )
            })}
        </div>
    )
}

