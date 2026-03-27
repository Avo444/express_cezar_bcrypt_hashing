const hashForm = document.getElementById("hashForm");
const hashContent = document.getElementById("hashContent");
const notificationContainer = document.getElementById("notificationContainer");
hashForm?.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        const form = new FormData(e.target);
        const body = Object.fromEntries(form.entries());
        console.log(body);
        if (!body.hash || !body.password) {
            throw new Error("Please fill all fields!");
        }
        const response = await fetch("http://localhost:3000/api/hash", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        hashContent.append(createItem(data));

        showNotification("Hash is added!", "success");
        e.target.reset();
    } catch (err) {
        showNotification(err, "error");
    }
});

function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.classList.add("notification", "show", type);
    notification.textContent = message;
    notificationContainer.append(notification);

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
    setTimeout(() => {
        notification.remove();
    }, 3200);
}

function createItem(item) {
    const div = document.createElement("div");
    div.classList.add("todo__item", "gradient-border", "flex-between");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent =
        item.password.length > 15
            ? item.password.slice(0, 15) + "..."
            : item.password;

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent =
        item.hashedPassword.length > 15
            ? item.hashedPassword.slice(0, 15) + "..."
            : item.hashedPassword;

    const btn = document.createElement("p");
    btn.classList.add("btn");
    btn.textContent = item.hash;

    div.append(title, text, btn);
    return div;
}
