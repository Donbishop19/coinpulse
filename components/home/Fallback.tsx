'use client';

import React from 'react';
import DataTable from '@/components/DataTable';

const skeletonAnimation = 'animate-pulse bg-dark-400';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className={`header-image ${skeletonAnimation}`} />
        <div className="info">
          <div className={`header-line-sm ${skeletonAnimation}`} />
          <div className={`header-line-lg ${skeletonAnimation}`} />
        </div>
      </div>
      <div className="chart">
        <div className={`chart-skeleton ${skeletonAnimation}`} />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const skeletonRows: Array<{ id: string }> = Array.from({ length: 6 }, (_, i) => ({
    id: `skeleton-${i}`,
  }));

  const columns: DataTableColumn<{ id: string }>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className={`name-image ${skeletonAnimation} rounded-full`} />
          <div className={`name-line ${skeletonAnimation}`} />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => <div className={`h-4 w-12 ${skeletonAnimation}`} />,
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className={`h-4 w-20 ${skeletonAnimation}`} />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div id="trending-coins">
        <DataTable
          data={skeletonRows}
          columns={columns}
          rowKey={(_, index) => `skeleton-${index}`}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
