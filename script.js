document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert(
        "Thank you for your order! Please send payment via Cash App ($Luvleex3), Zelle (lpenn725@gmail.com), or Apple Cash (917-215-5525). Be sure to include your name and email."
      );
    });
  });
});
