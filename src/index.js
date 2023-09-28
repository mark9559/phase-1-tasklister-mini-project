document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const taskDescription = event.target.querySelector("#new-task-description").value;
      console.log("Task Description:", taskDescription);

    });

});
