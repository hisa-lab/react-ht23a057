const users = [
    {
        name: 'Patty Rabbit',
        address: {
            town: 'Maple Town',
        },
    },
    {
        name: 'Rolley Cocker',
        address: {
            //town:'', 空文字追加
        },
    },
    null,
];
    
for (const u of users) {
    const user = u ?? { name: '(Somebody)' };
    const town = user?.address?.town ?? '(Somewhere)'; // 出力結果:Rolley Cocker lives in 、 ''は評価される
    //const town = user?.address?.town || '(Somewhere)';　出力結果:Rolley Cocker lives in (Somewhere)、''（falsyな値）は評価されない
    console.log(`${user.name} lives in ${town}`);
}