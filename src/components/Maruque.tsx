import { banglaNumber, toBnUnit } from '@/lib/utils';
import React from 'react';
import MarqueeText from 'react-marquee-text';

interface IProduct {
    id: number
    slug: string
    nameBn: string
    category: string
    categoryNameBn: string
    categoryIcon: string
    unit: string
    image: string
    today: number
    yesterday: number
    lastWeek: number
    lastMonth: number
    change: Change
    markets: []
}

interface Change {
    dir: string
    pct: number
}


const MaruquePage = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const headLine: IProduct[] = await res.json();
    return (
        <div className="border-b-gray-200 border-t-gray-200 border-b-2 border-t-2 mt-5">
            <MarqueeText className="py-2" direction="right" duration={30}>
                {headLine.map((p) => {
                    const isUp = p.change.dir === 'up' && p.change.pct != 0;
                    return (
                        <span key={p.id} className="mx-3 flex items-center gap-2 text-sm font-bold">
                            {p.image} {p.nameBn} {banglaNumber(p.today)} টাকা/{toBnUnit(p.unit)} <span className={isUp ? 'text-green-600' : 'text-red-600'}>
                                {isUp ? `▼ ${p.change.pct}%` : `▲ ${p.change.pct}%`}
                            </span>
                        </span> 
                    )
                })}
            </MarqueeText>
        </div>
    );
};

export default MaruquePage;