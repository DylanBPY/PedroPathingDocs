'use client';
import {RootProvider} from 'fumadocs-ui/provider';
// your custom dialog
import SearchDialog from '@/components/search';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

export function Provider({children}: { children: ReactNode }) {
    return (
        <>
            <Banner variant="rainbow" id="branding-change">
                Our branding has changed!&nbsp;
                <span className="prose">
                    <Link className="link prose" href="/docs/pathing/branding">
                        Learn more
                    </Link>
                </span>
            </Banner>
            <RootProvider search={{SearchDialog}}>{children}</RootProvider>
        </>
    )

}