# Logging Middleware

This task implements a reusable logging middleware using Node.js and Axios.

The logger sends log messages to the provided logging API using a Bearer token for authentication.

Function Used:

Log(stack, level, package, message)

The function accepts the stack type, log level, package name, and message, then sends the log data to the logging service.

Example:

Log(
"backend",
"info",
"middleware",
"logger initialized successfully"
);

Technologies Used:

* Node.js
* Axios

The implementation was tested successfully and logs were created through the provided API.
