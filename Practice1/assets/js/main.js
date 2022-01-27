var modal = document.getElementById("myModal");

function erorrMes(input, text) {
  let erorr = document.createElement("div");
  erorr.classList.add("thisIsRemoveable");
  erorr.innerText = text;
  input.parentElement.appendChild(erorr);
}

function invalidation(value, name, element) {
  switch (name) {
    case "firstName":
      if (!value) {
        erorrMes(element, "اسم رو یادت رفت!");
        return false;
      }
      if (value.length < 4) {
        erorrMes(element, "کمه!");
        return false;
      }
      return true;
    case "lastName":
      if (!value) {
        erorrMes(element, "فامیلیت رو یادت رفت!");
        return false;
      }
      if (value.length < 4) {
        erorrMes(element, "کمه!");
        return false;
      }
      return true;

    default:
      return true;
  }
}

function handelSubmit(e) {
  let flag = true;

  const target = e.target;
  e.preventDefault();
  const items = {};
  document.querySelectorAll(".thisIsRemoveable").forEach((el) => el.remove());
  for (let i of target) {
    items[i.name] = i.value;
    if (!invalidation(i.value, i.name, i)) {
      flag = false;
      i.classList.add("valid");
    } else {
      i.classList.remove("valid");
    }
  }

  if (flag) {
    redirect();
  }
}

function redirect() {
  modal.style.display = "block";
  setTimeout(function () {
    window.location.href = "thanking.html";
  }, 8000);
}
