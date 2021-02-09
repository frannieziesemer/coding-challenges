function birthdayCakeCandles(candles) {
    const sortedCandles = candles.sort((a, b) => a - b);
    for(let i = 0; i < sortedCandles.length; i++) {
      if (sortedCandles[i+1] === sortedCandles[i]) {
      const duplicates = sortedCandles.filter(item => item === sortedCandles[i]);
      return duplicates.length;
    }
    }

}

birthdayCakeCandles([3, 4, 2, 3]);