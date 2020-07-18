const http = require("http");
const fileSystem = require("fs");

const server = http.createServer((request, response) => {
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
        fileSystem.writeFileSync("message.txt", "DUMMY text from section 3");
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
    }
    /**
     * Exits the request event loop.
     */
    // process.exit();

    /**
     * Send response block;
     */
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
});

server.listen(3000);
