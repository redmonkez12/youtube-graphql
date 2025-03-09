import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Toaster } from "@/components/ui/sonner"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <div className="p-4 min-h-screen">
                <Outlet />
                <Toaster />
            </div>
        </React.Fragment>
    )
}
