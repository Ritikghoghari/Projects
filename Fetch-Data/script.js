async function getData() {
  const data = await fetch("https://dummyjson.com/users");
  const records = await data.json();

  let tab = "";
  records.users.forEach(function (user) {
    tab += `<tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.gender}</td>
        <td>${user.birthDate}</td>
    </tr>`;
  });

  document.getElementById("tbody").innerHTML = tab;
}
