//ミニテストチャプター２
const G = document.getElementById('g');
const H = document.getElementById('h');
const I = document.getElementById('i');
const J = document.getElementById('j');
const K = document.getElementById('k');


function test2() {
    alert("ミニテストを実施します。やり直したいときはページを再読み込みして下さい。");

    //Q1
    let answer = prompt("Q1.CSSはWebサイトを装飾する言語である。YesかNoで答えて下さい。");
    if (answer == "Yes" || answer == "yes") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    G.textContent = answer;

    //Q2
    answer = prompt("Q2.CSSをclass名で紐付ける時には、何を入れる？");
    if (answer == "ドット" || answer == "." || answer == "どっと") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    H.textContent = answer;

    //Q3
    answer = prompt("Q2.CSSをid名で紐付ける時には、何を入れる？");
    if (answer == "シャープ" || answer == "#" || answer == "しゃーぷ") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    I.textContent = answer;

    //Q4
    answer = prompt("Q2.要素の外側の余白を何という？");
    if (answer == "マージン" || answer == "まーじん" || answer == "margin") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    J.textContent = answer;

    //Q5
    answer = prompt("Q2.要素の内側の余白を何という？");
    if (answer == "パディング" || answer == "ぱでぃんぐ" || answer == "padding") {
        alert("正解!");
    } else {
        alert("不正解...");
    }
    K.textContent = answer;

    alert("お疲れ様でした！");
}
test2();