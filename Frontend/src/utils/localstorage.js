function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
}

function removedata() {
  localStorage.removeItem("userid");
  // localStorage.removeItem("loginid");
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function removeItem() {
  localStorage.removeItem("loginid");
}

export { removedata, loadData, saveData, removeItem };
