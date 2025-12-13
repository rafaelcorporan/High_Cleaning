"use client"

import { I18nProvider } from "@/lib/i18n-context"
import { useEffect } from "react"

// Session validation - redirects to login if no valid session
function SessionGuard({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const SESSION_KEY = 'hc_cal_access';
        try {
            const session = localStorage.getItem(SESSION_KEY);
            if (!session) {
                window.location.href = '/cal/';
                return;
            }
            const data = JSON.parse(session);
            if (Date.now() >= data.expiry) {
                localStorage.removeItem(SESSION_KEY);
                window.location.href = '/cal/';
            }
        } catch {
            window.location.href = '/cal/';
        }
    }, []);

    return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionGuard>
            <I18nProvider>
                {children}
            </I18nProvider>
        </SessionGuard>
    )
}
