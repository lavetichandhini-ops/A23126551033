const axios = require("axios");

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsYXZldGljaGFuZGhpbmkuMjMuY3NkQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjE5NDkzOCwiaWF0IjoxNzgyMTk0MDM4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjNkZGE3M2UtNGZiNS00MjdmLWFkY2EtMmVhMDZkMjc2MGJiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibGF2ZXRpIGNoYW5kaGluaSIsInN1YiI6ImU3MmYyYTI0LTZjZTktNGZlMy1iNzQzLTY5ZDlkZTliZmM1YSJ9LCJlbWFpbCI6ImxhdmV0aWNoYW5kaGluaS4yMy5jc2RAYW5pdHMuZWR1LmluIiwibmFtZSI6ImxhdmV0aSBjaGFuZGhpbmkiLCJyb2xsTm8iOiJhMjMxMjY1NTEwMzMiLCJhY2Nlc3NDb2RlIjoiTVRxeGFyIiwiY2xpZW50SUQiOiJlNzJmMmEyNC02Y2U5LTRmZTMtYjc0My02OWQ5ZGU5YmZjNWEiLCJjbGllbnRTZWNyZXQiOiJ1clV3YWN4bk1HU2ZieXBLIn0.rXVPToeoK_fyvcXSWobrBJTfKDbM87aubXfrvF7rOUE"
                }
            }
        );

        console.log(response.data);
    } catch (error) {
        console.error("Logging failed:", error.message);
    }
}

module.exports = Log;
Log(
    "backend",
    "info",
    "middleware",
    "logger initialized successfully"
);