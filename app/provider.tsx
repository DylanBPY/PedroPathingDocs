'use client';
import {RootProvider} from 'fumadocs-ui/provider';
import SearchDialog from '@/components/search';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

export function Provider({children}: { children: ReactNode }) {
    return (
        <>
            <Banner variant="rainbow" id="ivy-release">
                <span className="prose">
                    <Link className="link prose" href="https://doi.org/10.5281/zenodo.20725318">
                        View the Pedro Pathing White Paper
                    </Link>
                </span>
            </Banner>
            <RootProvider theme={{defaultTheme: 'dark'}} search={{SearchDialog}}>{children}</RootProvider>
        </>
    )

}