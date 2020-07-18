const fileSystem = require("fs");

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write(
            `<html>
            <head>
                <title>Form</title>
            </head>
            <body>
                <form action='/message' method='POST'>
                    <input type='text' name='message'>
                    <button type='submit'>Send</button>
                </form>
            </body>
            </html>`
        );
        return response.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];

        request.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return request.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];

            fileSystem.writeFile(
                "message.txt",
                `DUMMY text from section 3 => ${message}`,
                (errors) => {
                    response.statusCode = 302;
                    response.setHeader("Location", "/");
                    return response.end();
                }
            );
        });
    }

    response.setHeader("Content-Type", "text/html");
    response.write(
        `<html>
        <head>
            <title>My first page</title>
        </head>
        <body>
            <h1>My first page</h1>
        </body>
        </html>`
    );
    response.end();
};

// module.exports.handler = requestHandler;
module.exports = requestHandler;
