import React from 'react';
import { fetcher } from '@/lib/coingecko.actions';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';

const CoinOverview = async () => {
  let coin: CoinDetailsData | null = null;

  try {
    coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
      dex_pair_format: 'symbol',
    });
  } catch (error) {
    console.error('[CoinOverview] Failed to fetch Bitcoin data:', error);
    // TODO: Report to telemetry service
    return (
      <div id="coin-overview">
        <div className="header pt-2">
          <div className="info">
            <p>Error loading Bitcoin overview</p>
            <p className="text-sm text-red-500">Unable to fetch data. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!coin) {
    return (
      <div id="coin-overview">
        <div className="header pt-2">
          <div className="info">
            <p>No data available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
        <div className="info">
          <p>
            {coin.name} / {coin.symbol.toUpperCase()}
          </p>
          <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinOverview;
