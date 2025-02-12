import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

type CartaProps = {
    title: string, 
    footer?: string,
    children: ReactNode
}

export default function Carta({title, footer , children }: CartaProps) {
    return (
        <Card className="w-2/4">
            <CardHeader>
                <CardTitle className="font-bold uppercase text-center"> {title} </CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <p> { footer} </p>
            </CardFooter>
        </Card>
    )
}