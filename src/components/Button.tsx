
import { ReactNode } from "react";
import {clsx} from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps{
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps){
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx(
            'py-4 bg-cian-500 rounded font-semibold text-back',
            )}
        >
            {children}
        </Comp>
    )
}