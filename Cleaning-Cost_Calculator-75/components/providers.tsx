"use client"

import { I18nProvider } from "@/lib/i18n-context"
import { AccessGate } from "@/components/access-gate"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AccessGate>
            <I18nProvider>
                {children}
            </I18nProvider>
        </AccessGate>
    )
}
