const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素の削除
const deletFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divの生成をする
  const div = document.createElement("div");
  // divのクラスネームにlist-rowを付与する
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  // liの表示にinputTextてHTMLから渡ってきたテキストを表示する
  li.innerText = text;

  // button（完了）の生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 完了ボタンが押され時、未完了リストから完了リストにタスクを移動させる処理
    // 完了リストから削除する処理
    deletFromIncompleteList(complateButton.parentNode);

    // 完了リストに追加する
    const addTarget = complateButton.parentNode;

    // todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻るボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteButton = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteButton);
      // テキストを取得
      const text = addTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグのこ要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deletFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
