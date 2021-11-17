const onSubmit = (data) => {
    data.email = user?.email;
    data.name = user?.displayName;
    data.description = service?.description;
    data.status = "pending";
    fetch("addOrders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => console.log(result));
    console.log(data);
};
