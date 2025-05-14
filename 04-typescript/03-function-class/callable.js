// インターフェースで定義
{
    var add = function (n, m) {
        return n + m;
    };
    var subtract = function (n, m) { return n - m; };
    console.log(add(1, 2), // 3
    subtract(7, 2));
}
// インラインで定義
{
    var add = function (n, m) {
        return n + m;
    };
    var subtract = function (n, m) { return n - m; };
    console.log(add(1, 2), // 3
    subtract(7, 2));
}
// インラインでアロー構文によって定義
{
    var add = function (n, m) {
        return n + m;
    };
    var subtract = function (n, m) { return n - m; };
    console.log(add(1, 2), // 3
    subtract(7, 2));
}
