type Props = {
    item: any;
    onBorrow: (id: string) => void;
}

export default function ItemCard({item, onBorrow}: Props) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.available_quantity}</p>

            <button 
                onClick={() => onBorrow(item.id)}
                disabled={item.available_quantity === 0}
            >
                Borrow
            </button>
        </div>
    )
}