// p27 constの性質
const constStr = "コンスト定数は再代入不可";
// a = "再代入不可";
console.log(constStr);
const list = ["React", "Vue", "Anular"];
list[0] = "Riot"; // 変更は可能
console.log(list);

// p.29 テンプレート文字列
const fullname = "Taro Suzuki";
const msg = `Hello, ${fullname}
How are you today?`;
console.log(msg);
const msg2 = `こんにちは、${fullname}
調子はどう？`;
console.log(msg2);

// p.30 数値セパレーター
const value = 123_456_789;
console.log(value);

// アロー関数
function circle(radius) {
  return radius ** 2 * Math.PI;
}
console.log(circle(5));
const circle2 = (radius) => {
  return radius ** 2 * Math.PI; // アロー関数
};
console.log(circle2(5));
const circle3 = (radius) => radius ** 2 * Math.PI; // 省略記法
console.log(circle3(5));

// p.32 オブジェクトリテラルの簡易構文
const title = "速習React";
const price = 500;
const book = { title, price };
const book2 = { title: title, price: price };
console.log(book);
console.log(book2);

const member = {
  name: "佐藤理央",
  greet: function () {
    console.log(`こんにちは、${this.name}さん！`);
  },
};
const member2 = {
  name: "佐藤理央",
  greet() {
    console.log(`こんにちは、${this.name}さん！`);
  },
};
member.greet();
member2.greet();

const member3 = {
  name: "山田太郎",
  greet() {
    console.log(`こんにちは！${this.name}君`);
  },
};
member3.greet();

// 算出プロパティ
let i = 0;
const member4 = {
  [`attr${++i}`]: "佐藤理央",
  [`attr${++i}`]: "女性",
  [`attr${++i}`]: "18歳",
};
console.log(member4);

let j = 0;
const ids = {
  [`id${++j}`]: "001",
  [`id${++j}`]: "002",
  [`id${++j}`]: "003",
};
console.log(ids);

// p.33 分割代入
const list2 = [10, 20, 30];
const [x, y, z] = list2;
console.log(x, y, z);

const [a, b] = list2;
console.log(a, b);

const [l, m, n, o] = list2;
console.log(l, m, n, o);

const [p, , r] = list2;
console.log(p, r);

const [one, ...rest] = list2;
console.log(one, rest);
console.log(rest[0]);

// オブジェクトの場合
const member5 = {
  name: "山田太郎",
  sex: "男性",
  age: 20,
};
const { name, sex, age = 0, memo = "---" } = member5;
console.log(name, sex, age, memo);

const { sex: gender } = member5; // 別名
console.log(gender);
const { name: name2, ...rest2 } = member5; // 「...」演算子
console.log(name2, rest2);

const member6 = {
  name2: "山田太郎",
  address: {
    prefecture: "静岡県",
    city: "藤枝市",
  },
};
const {
  address,
  address: { city },
} = member6;
console.log(address, city);

// 変数宣言と変数代入を分ける際は、()が必要
let name3, sex3, memo3;
({ name: name3, sex: sex3, memo: memo3 = "---" } = member5);
console.log(name3, sex3, memo3);

// p.36 引数の規定値構文
function getTrapezoidArea(upper = 1, lower = 1, height = 1) {
  return ((upper + lower) * height) / 2;
}
console.log(getTrapezoidArea(10, 5, 3));
console.log(getTrapezoidArea(10, 5));
console.log(getTrapezoidArea(10));

// 可変長引数の関数
function sum(...nums) {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
console.log(sum(10, 25, 2));
console.log(sum(7, 13, 25, 6, 100));

// スプレッド構文による引数の展開
console.log(sum([10, 25, 2])); // 意図した結果にならない
console.log(sum(...[10, 25, 2])); // スプレッド構文

// 分割代入によるオブジェクト引数の分解
function greet({ name, age }) {
  console.log(`こんにちは、私は${name}、${age}歳です。`);
}
function greet2(obj) {
  return console.log(`こんにちは、私は${obj.name}、${obj.age}歳です。`);
}
const my = { name: "佐藤理央", sex: "female", age: 18 };
greet(my);
greet2(my);

// p.39 「?.」Optional Chaining 演算子
const str = null;
// const str = "あいう";
console.log(str?.substring(1)); // ?.演算子がレシーバーの空値を判定してundefinedを返す

// 「??」 Null合体演算子
let value2 = null;
console.log(value2 ?? "規定値"); // ??演算子は最初にnullかundifinedにならなかったものを返します。

// 「??=」 Null合体演算子の複合代入演算子版
let value3 = null;
value3 ??= "規定値"; // value3  = value3 ?? "規定値";の省略構文
console.log(value3);

// p.42 モジュールの利用
import { Article, getTriangle } from "./App.js";
console.log(getTriangle(10, 5));
const article = new Article();
console.log(article.getAppTitle());

import * as app from "./App.js"; // モジュール全体をまとめてインポート
console.log(app.getTriangle(10, 5));
const article2 = new app.Article();
console.log(article2.getAppTitle());

// 規定のエクスポート export default
import Util from "./Util.js"; // {}なしでok
console.log(Util.getCircleArea(10));

// p.46 動的インポート
import("./App.js").then((app) => {
  console.log(app.getTriangle(10, 5));
  const article = new app.Article();
  console.log(article.getAppTitle());
});
