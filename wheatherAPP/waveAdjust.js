document
  .getElementById("waveHeightInput")
  .addEventListener("input", function () {
    const maxWaveHeight = parseInt(this.value);
    let wavePhase = 0;

    const animateWave = () => {
      const waveHeight = maxWaveHeight * Math.sin(wavePhase); // サイン波で高さを計算
      const newPathData = `M0,150 Q120,${150 + waveHeight} 240,150 Q360,${
        150 - waveHeight
      } 480,150 Q600,${150 + waveHeight} 720,150 Q840,${
        150 - waveHeight
      } 960,150 T1920,150 V300 H0 Z`;
      document.getElementById("wavePath").setAttribute("d", newPathData);

      wavePhase += 0.05; // 波の位相を進める
      requestAnimationFrame(animateWave); // 次のフレームでアニメーションを続ける
    };

    requestAnimationFrame(animateWave); // アニメーション開始
  });
