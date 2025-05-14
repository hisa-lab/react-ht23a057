// 関数宣言
{
    function add(n, m) {
        return n + m;
    }
    console.log(add(2, 4)); // 6
}
// 関数式
{
    var add_1 = function (n, m) {
        return n + m;
    };
    console.log(add_1(5, 7)); // 12
}
// アロー関数式
{
    var add_2 = function (n, m) { return n + m; };
    var hello = function () {
        console.log('Hello!');
    };
    console.log(add_2(8, 1)); // 9
    hello(); // Hello!
}
