// 三重県南部のコード番号
const mieNanbuCode = 240000; // 三重県南部のコード番号を指定

// テンプレートリテラルでconst urlに代入します。
// エンドポイント
const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${mieNanbuCode}.json`;

fetch(url)
  .then((response) => {
    if (response.status !== 200) {
      console.log("問題がありました。Status Code:" + response.status);
      return;
    }
    return response.json();
  })
  .then((data) => {
    // 特定のキーの値を取得
    const waveData = data[0].timeSeries[0].areas[0].waves[1]; // 階層構造に基づいて波のデータを取得
    console.log(data[1]);
    console.log(waveData);

    // 数字を抽出する方法
    const waveNumbersStr = waveData.replace(/[^0-9]/g, ""); // 非数字文字を削除
    const waveNumbers = waveNumbersStr.split("").map(Number); // 各文字を数値に変換して配列にする

    console.log(waveNumbers);

    // 必要なデータを取得
    const requiredValues = {
      waves: waveNumbers,
    };
    console.log(requiredValues);
  })
  .catch((err) => {
    console.log("Fetch Error:", err);
  });
