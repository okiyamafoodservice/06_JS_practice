## 00_JS_Practice

2024 前期[JavaScript 演習]リポジトリ

## オブジェクトとクラス

- 4 月 22 日(月曜日)

```js
class InstantNoodle {
  // 静的プロパティ
  static TYPE = "インスタントラーメン";

  // 静的メソッド
  static making() {
    return `<p>${InstantNoodle.TYPE}は、鍋で作ります。</p>`;
  }

  // オブジェクトプロパティ
  constructor(ramen, taste) {
    this.name = ramen;
    this.soup = taste;
  }

  descript() {
    return `<p>${this.name}は${this.soup}味です</p>`;
  }
}

document.body.insertAdjacentHTML("beforeend", InstantNoodle.making());
console.log(InstantNoodle.TYPE);

//   サブクラス
class Maker extends InstantNoodle {
  // InstantNoodleクラスは引数が2だったが、Makerでは3つ
  constructor(ramen, taste, company) {
    // superclassから継承
    super(ramen, taste);
    this.maker = company;
  }
  makerDescript() {
    return `<p>販売元は、${this.maker}です。</p>`;
  }

  // オーバーライド(上書き)
  descript() {
    return `<p>${this.name}は${this.maker}です。</p>`;
  }
}

import { ChiikawaMovie } from "./export.js";

import { contents } from "./object.js";

// import {モジュール名} from "読み込むjsファイル"

//   サブクラスのインスタンス化
const maker = new Maker("マルちゃん製麺", "醤油", "東洋水産");

document.body.insertAdjacentHTML("beforeend", maker.makerDescript());
document.body.insertAdjacentHTML("beforeend", maker.descript());
```

- 4 月 15 日(月曜日)

```js
const demaeicchou = {
  name: "出前一丁",
  soup: "醤油",
  preview: function () {
    const area = document.querySelector("#result");
    area.innerHTML = `${this.name}は、${this.soup}ラーメンです。`;
  },
};
demaeicchou.preview();

demaeicchou.soup = "とんこつ";

demaeicchou.preview = function () {
  const area = document.querySelector("#result");
  area.innerHTML = `${this.name}は、${this.soup}ラーメンではありません。`;
};

delete demaeicchou.name;

demaeicchou.preview();

class InstantNoodle {
  //メソッドの再実行をする場合
  static TYPE = "インスタントラーメン";
  static making() {
    return `<p>${InstantNoodle.TYPE}は鍋で作ります。</p>`;
  }
  ______________ここまでが必要;

  constructor(ramen, taste) {
    this.name = ramen;
    this.soup = taste;
  }

  descript() {
    return `<p>${this.name}は${this.soup}味です</p>`;
  }
}

document.body.insertAdjacentHTML("beforeend", InstantNoodle.making());
console.log(InstantNoodle.TYPE);

const saltRamen = new InstantNoodle("サッポロ一番塩", "塩");
const demaeicchou2 = new InstantNoodle("出前一丁", "醤油");

console.log(saltRamen);
console.log(`${saltRamen.name}は${saltRamen.soup}味`);

console.log(demaeicchou2);
console.log(`${demaeicchou2.name}は${demaeicchou2.soup}味`);

console.log(saltRamen.descript(), demaeicchou2.descript());
メソッドを使って呼び出す;
document.body.insertAdjacentHTML("beforeend", saltRamen.descript());
document.body.insertAdjacentHTML("beforeend", demaeicchou2.descript());

const ramens = [];
ramens.push(new InstantNoodle("サッポロ一番塩", "塩"));
ramens.push(new InstantNoodle("出前一丁", "醤油"));

console.log(ramens);

ramens.forEach((ramen) => {
  //lengthを描かなくても、要素の数だけ回る
  document.body.insertAdjacentHTML("beforeend", ramen.descript());
});
```
