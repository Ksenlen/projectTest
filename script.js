"use strict";

let newData;

const getData = (url) => {
    return fetch(url).then((response) => response.json());
};

const sendData = (url, data) => {
    return fetch(url, {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            //"Content-type": "multipart/form-data",
        },
    }).then((response) => response.json());
};

getData("db.json").then((data) => {
    newData = data;
    console.log(newData);
});


sendData("https://jsonplaceholder.typicode.com/posts", JSON.stringify(newData))
    .then((newData) => console.log(newData))
    .catch((error) => console.log(error));

