async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test()
  return await result
}

function test() {
  new Promise(function()  {
    const full_name = userList.family_name + " " + userList.first_name;
    userList["full_name"] = full_name;
  });
  return Promise.then(() => {
    setTimeout(() => {
      return userList;
    }, 3000)
  });
}

