import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BorrowPanelProps = {
    maxQuantity: number;
    onBorrow: (quantity: number) => void;
    onReturn: (quantity: number) => void;
};

export function BorrowPanel({ maxQuantity, onBorrow, onReturn }: BorrowPanelProps) {

    const [quantity, setQuantity] = useState(1);

    return (
        <Card>
            <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                        Quantity
                    </label>

                    <Input
                        type="number"
                        min={1}
                        max={maxQuantity}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </div>
            </CardContent>

            <CardFooter className="flex gap-2">

                <Button
                    className="flex-1"
                    onClick={() => onBorrow(quantity)}
                >
                    Borrow
                </Button>

                <Button
                    // variant="secondary"
                    className="flex-1"
                    onClick={() => onReturn(quantity)}
                >
                    Return
                </Button>

            </CardFooter>
        </Card>
    );
}
