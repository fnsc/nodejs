const http = require("http");
const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);

    const url = request.url;
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
