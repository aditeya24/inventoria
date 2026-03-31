import { Card, CardContent } from "@/components/ui/card";

type ItemStatsProps = {
    availableQuantity: number;
    totalQuantity: number;
    location?: string;
    description?: string;
};

export function ItemStats({
    availableQuantity,
    totalQuantity,
    location,
    description,
}: ItemStatsProps) {
    return (
        <Card>
            <CardContent className="p-4 space-y-4">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available</span>
                    <span className="font-medium">
                        {availableQuantity} / {totalQuantity}
                    </span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{location ?? "—"}</span>
                </div>

                <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">Description</p>
                    <p className="text-sm">{description ?? "No description provided."}</p>
                </div>
            </CardContent>
        </Card>
    );
}
