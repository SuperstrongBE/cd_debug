const Liquidity = ({
  settingsSlang,
  nativeSymbol,
  nativeCurrency,
  totalValue,
}) => {
  return (
    <div className="SidebarLiquidityHeader relative z-10 flex flex-col justify-between divide-y divide-slate-50/5 bg-slate-50/5 text-sm text-slate-50 dark:text-slate-300">
      <div className="flex justify-between px-3 py-2 uppercase ">
        <div>{settingsSlang ? 'Scratch' : 'Liquidity'}</div>
        <div>
          {nativeSymbol}
          {totalValue}
        </div>
      </div>
      <p className="px-3 py-2 text-center opacity-50">Not real data</p>
      {/* Header Settings. Would like to use it in the futur. */}
      {/* <div className="text-xs text-slate-50/50">
        <div className="flex justify-between gap-5 px-2 py-1">
          <LiquidityDropdown
            label="Assets"
            items={[
              `Over ${nativeSymbol}10`,
              `Over ${nativeSymbol}25`,
              `Over ${nativeSymbol}50`,
            ]}
          />
          <LiquidityDropdown
            label="Currency"
            items={[nativeCurrency, 'EUR', 'NZD']}
          />
        </div>
      </div> */}
    </div>
  )
}

export default Liquidity
