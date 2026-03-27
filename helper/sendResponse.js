const sendResponse = (
    res,
    data,
    statusCode = 200,
    extension = "application/json",
) => {
    res.set({
        "Content-Type": extension,
    });
    res.status(statusCode);
    extension === "application/json" ? res.json(data) : res.send(data);
};

module.exports = sendResponse;
