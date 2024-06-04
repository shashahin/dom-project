const AddNewButton = document.querySelector("#add-new");

function log(user) {
  console.log(user);
  document.querySelector("#selected").innerHTML = JSON.stringify(
    user,
    undefined,
    4
  );
}

function print(user) {
  console.log("print.....", user);
}

let users = [
  {
    name: "John",
    email: "shahin@gmail.com",
  },
  {
    name: "Jane",
    email: "sefat@gamil.com",
  },
  {
    name: "Doe",
    email: "jondoe@gmail.com",
  },
];

AddNewButton.addEventListener("click", () => {
  const cardsContainer = document.querySelector("#cards");
  cardsContainer.innerHTML = ""; // Clear previous cards
  users.forEach((user) => {
    cardsContainer.innerHTML += makeCard(user);
  });

  // Bind events after adding cards to DOM
  document.querySelectorAll(".learn-more-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const user = JSON.parse(event.target.dataset.user);
      log(user);
    });
  });

  document.querySelectorAll(".print-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const user = JSON.parse(event.target.dataset.user);
      print(user);
    });
  });
});

function makeCard(user) {
  return `
    <article style="width: 30rem; border: 1px solid; margin: 2rem; padding: 8px; border-radius:8px ;">
      <h1 style="text-transform: uppercase">${user.name}</h1>
      <p>${user.email}</p>
      <button class="learn-more-btn" data-user='${JSON.stringify(
        user
      )}' type="button">Learn more</button>
      <button class="print-btn" data-user='${JSON.stringify(
        user
      )}' type="button">Print</button>
    </article>
  `;
}
