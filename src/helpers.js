const generateBar = () => {
  let random = () => Math.floor(Math.random() * 2);
  const bar = [];
  for (let i = 0; i < 3; i++) {
    if (bar.includes(1)) {
      bar.push(0);
    } else bar.push(random());
  }
  return bar;
};

const generatePaddingBars = (nr) => {
  const sheet = [];
  for (let i = 0; i < nr; i++) {
    sheet.push([0, 0, 0]);
  }
  return sheet;
};
export const generateSheet = (nr) => {
  const sheet = [];
  sheet.push(...generatePaddingBars(10));

  for (let i = 0; i < nr; i++) {
    sheet.push(generateBar());
  }
  return sheet;
};

export const samples = [
  {
    targetKey: 'Q',
    name: 'snare r2m',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/88[kb]real-01BB1-snare-R2M.wav.mp3',
  },
  {
    targetKey: 'W',
    name: 'snare r4m',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/98[kb]real-01BB1-snare-R4M.wav.mp3',
  },
  {
    targetKey: 'E',
    name: 'snare r2a-r',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/137[kb]real-01RR-snare-R2A-R.wav.mp3',
  },
  {
    targetKey: 'A',
    name: 'THCM',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/529[kb]real-01TP19THCM.wav.mp3',
  },
  {
    targetKey: 'S',
    name: 'HiHat A-R',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/98[kb]real-02L4.UF-HiHat-A-R.wav.mp3',
  },
  {
    targetKey: 'D',
    name: 'HiHat M',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/85[kb]real-02R3.UF-HiHat-M.wav.mp3',
  },
  {
    targetKey: 'Z',
    name: 'Kick F1',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/176[kb]real-kick-F001.wav.mp3',
  },
  {
    targetKey: 'X',
    name: 'Kick F3',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/176[kb]real-kick-F003.wav.mp3',
  },
  {
    targetKey: 'C',
    name: 'Kick F9',
    url:
      'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/A%20Real%20Freakin%20Drum%20Kit/95[kb]real-kick-F009.wav.mp3',
  },
];
