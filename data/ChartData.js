const exposurePieData = [
  {
    id: '1',
    label: 'USD Coin',
    value: 22,
    fillColor: '#7543E3',
    textColor: '#E5DBFA',
  },
  {
    id: '2',
    label: 'Proton',
    value: 34,
    fillColor: '#F64D6E',
    textColor: '#FDDDE3',
  },
  {
    id: '3',
    label: 'Metal',
    value: 9,
    fillColor: '#3B82F6',
    textColor: '#DDE9FD',
  },
  {
    id: '4',
    label: 'Bitcoin',
    value: 11,
    fillColor: '#F7931A',
    textColor: '#FEEFDD',
  },
  {
    id: '5',
    label: 'Other',
    value: 24,
    fillColor: '#BFDBFE',
    textColor: '#2563EB',
  },
]

const assetsPieData = [
  {
    id: '1',
    label: 'Liquid',
    value: 22,
    fillColor: '#BFDBFE',
    textColor: '#2563EB',
  },
  {
    id: '2',
    label: 'Borrowed',
    value: 34,
    fillColor: '#93C5FD',
    textColor: '#2563EB',
  },
  {
    id: '3',
    label: 'Staked',
    value: 9,
    fillColor: '#60A5FA',
    textColor: '#EEF2FF',
  },
  {
    id: '4',
    label: 'Farming',
    value: 11,
    fillColor: '#2563EB',
    textColor: '#DBEAFE',
  },
  {
    id: '5',
    label: 'NFT Trading',
    value: 24,
    fillColor: '#1D4ED8',
    textColor: '#E0E7FF',
  },
]

const lineData = [
  {
    id: 'Stables',
    color: '#3B82F6',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Jan',
        y: 1000,
      },
      {
        x: 'Feb',
        y: 1200,
      },
      {
        x: 'Mar',
        y: 2400,
      },
      {
        x: 'Apr',
        y: 1400,
      },
      {
        x: 'May',
        y: 3800,
      },
      {
        x: 'Jun',
        y: 3000,
      },
      {
        x: 'Jul',
        y: 3000,
      },
    ],
  },
  {
    id: 'XPR',
    color: '#6c6ff5',
    // areaColor: '#6366F120',
    data: [
      {
        x: 'Jan',
        y: 1400,
      },
      {
        x: 'Feb',
        y: 2000,
      },
      {
        x: 'Mar',
        y: 2700,
      },
      {
        x: 'Apr',
        y: 2900,
      },
      {
        x: 'May',
        y: 3000,
      },
      {
        x: 'Jun',
        y: 3000,
      },
      {
        x: 'Jul',
        y: 1000,
      },
    ],
  },
  {
    id: 'Luna',
    color: '#F3C257',
    // areaColor: '#FFBC2D12',
    data: [
      {
        x: 'Jan',
        y: 2400,
      },
      {
        x: 'Feb',
        y: 2210,
      },
      {
        x: 'Mar',
        y: 2290,
      },
      {
        x: 'Apr',
        y: 2000,
      },
      {
        x: 'May',
        y: 3700,
      },
      {
        x: 'Jun',
        y: 3000,
      },
      {
        x: 'Jul',
        y: 200,
      },
    ],
  },
]

const exposureLineData = [
  {
    id: 'Other',
    color: '#6366F1',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1000,
      },
      {
        x: 'Tue',
        y: 1100,
      },
      {
        x: 'Wed',
        y: 1400,
      },
      {
        x: 'Thu',
        y: 1100,
      },
      {
        x: 'Fri',
        y: 1700,
      },
      {
        x: 'Sat',
        y: 1000,
      },
      {
        x: 'Sun',
        y: 1400,
      },
    ],
  },
  {
    id: 'BTC',
    color: '#F7931A',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1200,
      },
      {
        x: 'Tue',
        y: 1500,
      },
      {
        x: 'Wed',
        y: 1600,
      },
      {
        x: 'Thu',
        y: 1200,
      },
      {
        x: 'Fri',
        y: 1700,
      },
      {
        x: 'Sat',
        y: 1400,
      },
      {
        x: 'Sun',
        y: 2000,
      },
    ],
  },

  {
    id: 'MTL',
    color: '#3B82F6',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1400,
      },
      {
        x: 'Tue',
        y: 1500,
      },
      {
        x: 'Wed',
        y: 1400,
      },
      {
        x: 'Thu',
        y: 1900,
      },
      {
        x: 'Fri',
        y: 1300,
      },
      {
        x: 'Sat',
        y: 2400,
      },
      {
        x: 'Sun',
        y: 2800,
      },
    ],
  },

  {
    id: 'XPR',
    color: '#F64D6E',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1300,
      },
      {
        x: 'Tue',
        y: 1500,
      },
      {
        x: 'Wed',
        y: 2400,
      },
      {
        x: 'Thu',
        y: 2000,
      },
      {
        x: 'Fri',
        y: 3000,
      },
      {
        x: 'Sat',
        y: 3000,
      },
      {
        x: 'Sun',
        y: 3000,
      },
    ],
  },

  {
    id: 'USDC',
    color: '#7543E3',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1400,
      },
      {
        x: 'Tue',
        y: 1200,
      },
      {
        x: 'Wed',
        y: 2400,
      },
      {
        x: 'Thu',
        y: 2300,
      },
      {
        x: 'Fri',
        y: 3400,
      },
      {
        x: 'Sat',
        y: 3000,
      },
      {
        x: 'Sun',
        y: 2000,
      },
    ],
  },
]

const assetsLineData = [
  {
    id: 'NFT Trading',
    color: '#1D4ED8',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1000,
      },
      {
        x: 'Tue',
        y: 1100,
      },
      {
        x: 'Wed',
        y: 1400,
      },
      {
        x: 'Thu',
        y: 1100,
      },
      {
        x: 'Fri',
        y: 1700,
      },
      {
        x: 'Sat',
        y: 1000,
      },
      {
        x: 'Sun',
        y: 1400,
      },
    ],
  },
  {
    id: 'Farming',
    color: '#2563EB',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1200,
      },
      {
        x: 'Tue',
        y: 1500,
      },
      {
        x: 'Wed',
        y: 1600,
      },
      {
        x: 'Thu',
        y: 1200,
      },
      {
        x: 'Fri',
        y: 1700,
      },
      {
        x: 'Sat',
        y: 1400,
      },
      {
        x: 'Sun',
        y: 2000,
      },
    ],
  },

  {
    id: 'Staked',
    color: '#3B82F6',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1400,
      },
      {
        x: 'Tue',
        y: 1500,
      },
      {
        x: 'Wed',
        y: 1400,
      },
      {
        x: 'Thu',
        y: 1900,
      },
      {
        x: 'Fri',
        y: 1300,
      },
      {
        x: 'Sat',
        y: 2400,
      },
      {
        x: 'Sun',
        y: 2800,
      },
    ],
  },

  {
    id: 'Borrowed',
    color: '#47a2f8',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1300,
      },
      {
        x: 'Tue',
        y: 1500,
      },
      {
        x: 'Wed',
        y: 2400,
      },
      {
        x: 'Thu',
        y: 2000,
      },
      {
        x: 'Fri',
        y: 3000,
      },
      {
        x: 'Sat',
        y: 3000,
      },
      {
        x: 'Sun',
        y: 3000,
      },
    ],
  },

  {
    id: 'Liquid',
    color: '#58a9ff',
    // areaColor: '#93C5FD30',
    data: [
      {
        x: 'Mon',
        y: 1400,
      },
      {
        x: 'Tue',
        y: 1200,
      },
      {
        x: 'Wed',
        y: 2400,
      },
      {
        x: 'Thu',
        y: 2300,
      },
      {
        x: 'Fri',
        y: 3400,
      },
      {
        x: 'Sat',
        y: 3000,
      },
      {
        x: 'Sun',
        y: 2000,
      },
    ],
  },
]

export default {
  exposurePieData,
  assetsPieData,
  lineData,
  exposureLineData,
  assetsLineData,
}
