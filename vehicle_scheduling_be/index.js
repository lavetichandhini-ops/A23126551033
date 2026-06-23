const axios = require("axios");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsYXZldGljaGFuZGhpbmkuMjMuY3NkQGFuaXRzLmVkdS5pbiIsImV4cCI6MTc4MjE5NDkzOCwiaWF0IjoxNzgyMTk0MDM4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjNkZGE3M2UtNGZiNS00MjdmLWFkY2EtMmVhMDZkMjc2MGJiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibGF2ZXRpIGNoYW5kaGluaSIsInN1YiI6ImU3MmYyYTI0LTZjZTktNGZlMy1iNzQzLTY5ZDlkZTliZmM1YSJ9LCJlbWFpbCI6ImxhdmV0aWNoYW5kaGluaS4yMy5jc2RAYW5pdHMuZWR1LmluIiwibmFtZSI6ImxhdmV0aSBjaGFuZGhpbmkiLCJyb2xsTm8iOiJhMjMxMjY1NTEwMzMiLCJhY2Nlc3NDb2RlIjoiTVRxeGFyIiwiY2xpZW50SUQiOiJlNzJmMmEyNC02Y2U5LTRmZTMtYjc0My02OWQ5ZGU5YmZjNWEiLCJjbGllbnRTZWNyZXQiOiJ1clV3YWN4bk1HU2ZieXBLIn0.rXVPToeoK_fyvcXSWobrBJTfKDbM87aubXfrvF7rOUE";

async function getData() {
    try {
        const depots = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("DEPOTS");
        console.log(depots.data);

        const vehicles = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("VEHICLES");
        console.log(vehicles.data);
        const tasks = vehicles.data.vehicles;

for (const depot of depots.data.depots) {
    const maxImpact = knapsack(
        tasks,
        depot.MechanicHours
    );

    console.log(
        `Depot ${depot.ID} -> Maximum Impact = ${maxImpact}`
    );
}

    } catch (error) {
        console.log(error.message);
    }
}
function knapsack(tasks, capacity) {
    const n = tasks.length;

    const dp = Array(n + 1)
        .fill()
        .map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let w = 0; w <= capacity; w++) {
            if (duration <= w) {
                dp[i][w] = Math.max(
                    impact + dp[i - 1][w - duration],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}
getData();
