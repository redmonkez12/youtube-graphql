import { Loader2 } from "lucide-react";

export function Loader() {
    return (
        <div className='grid place-items-center min-h-screen'><Loader2 className='animate-spin' /></div>
    );
}