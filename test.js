//ミニテスト　チャプター1
const A = document.getElementById('a');
const B = document.getElementById('b');
const C = document.getElementById('c');
const D = document.getElementById('d');
const E = document.getElementById('e');
const F = document.getElementById('f');

function test() {
    alert("ミニテストを実施します。やり直したいときはページを再読み込みして下さい。");

    //Q1
    let input = prompt("Q1.HTMLはWebサイトを構成するマークアップ言語である。YesかNoで答えて下さい。");
    if (input == "Yes" || input == "yes"　|| input == "イエス" || input == "いえす") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    A.textContent = input;
    
    //Q2
    input = prompt("Q2.コードは全て半角で打つ。(文字列を除く)YesかNoで答えて下さい。");
    if (input == "Yes" || input == "yes"　|| input == "イエス" || input == "いえす") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    B.textContent = input;

    //Q3
    input = prompt("Q3.HTMLで組み合わせて使われるコードで、不等号で囲まれているものの名称は？");
    if (input == "タグ" || input == "たぐ") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    C.textContent = input;

    //Q4
    input = prompt("Q4.クラス属性を書いて下さい。");
    if (input == "class" || input == ".class") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    D.textContent = input;

    //Q5
    input = prompt("Q5.次の見出し(大きさは一番大きい)を出力するコードを書いて下さい。 出力→こんにちは");
    if (input == "<h1>こんにちは</h1>") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    E.textContent = input;

    //Q6
    input = prompt("Q6.ドキュタイプ宣言を書いて下さい。");
    if (input == "<!DOCTYPE html>") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    F.textContent = input;

    alert("お疲れ様でした！");

}
test();
