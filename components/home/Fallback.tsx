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

export const CategoriesFallback = () => {
  const skeletonRows: Array<{ id: string }> = Array.from({ length: 10 }, (_, i) => ({
    id: `skeleton-${i}`,
  }));

  const columns: DataTableColumn<{ id: string }>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => <div className={`category-skeleton ${skeletonAnimation}`} />,
    },
    {
      header: 'Top Gainers',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex gap-1">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={`coin-skeleton ${skeletonAnimation}`} />
          ))}
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => <div className={`value-skeleton-sm ${skeletonAnimation}`} />,
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => <div className={`value-skeleton-md ${skeletonAnimation}`} />,
    },
    {
      header: '24H Volume',
      cellClassName: 'volume-cell',
      cell: () => <div className={`value-skeleton-lg ${skeletonAnimation}`} />,
    },
  ];

  return (
    <div id="categories-fallback">
      <h4>Top Categories</h4>
      <DataTable
        columns={columns}
        data={skeletonRows}
        rowKey={(_, index) => index}
        tableClassName="mt-3"
      />
    </div>
  );
};
