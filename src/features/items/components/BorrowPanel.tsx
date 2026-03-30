import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type BorrowPanelProps = {
    maxQuantity: number;
};

export function BorrowPanel({ maxQuantity }: BorrowPanelProps) {
    return (
        <Card>
            <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                        Borrow Quantity
                    </label>

                    <Input
                        type="number"
                        min={1}
                        max={maxQuantity}
                        placeholder="1"
                    />
                </div>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Button className="flex-1">Borrow</Button>

                <Button
                    variant="secondary"
                    disabled
                    className="flex-1"
                >
                    Return
                </Button>
            </CardFooter>
        </Card>
    );
}
