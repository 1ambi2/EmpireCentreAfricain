import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Pour parser les requêtes JSON
const port = 3000;

app.post("/set-end-url", (req, res) => {
  const { newURL } = req.body;
  if (newURL) {
    setEndURL(newURL);
    res.status(200).send("URL updated successfully");
  } else {
    res.status(400).send("Invalid URL");
  }
});

app.get("/proxy", async (req, res) => {
  const endURL = req.query.endURL || "";
  const apiUrl = "https://publicapi.nationsglory.fr/" + endURL;
  const bearerToken =
    "NGAPI_Tnlcbrrl1N50YxAkNmPFfjl(ANBelWsV4e7267d4d816cf353932b759f3fcda39";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});

module.exports = app