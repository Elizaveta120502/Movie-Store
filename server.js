import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const API_KEY = process.env.TMDB_API_READ_ACCESS_TOKEN;
console.log("API KEY:", process.env.TMDB_API_READ_ACCESS_TOKEN);

// app.get("/api/movies", async (req, res) => {
//     const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
//         params: { api_key: API_KEY, ...req.query },
//     });
//     res.json(response.data);
// });

// app.get("/api/movies", async (req, res) => {
//     try {
//         const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
//             params: { ...req.query }, // query-параметры от клиента
//             headers: {
//                 Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
//             },
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error("TMDB API Error:", error.response?.status, error.response?.data);
//         res.status(error.response?.status || 500).json({ message: "TMDB API error", error: error.response?.data });
//     }
// });

// app.get("/api/movies", async (req, res) => {
//     try {
//         const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
//             params: {
//                 api_key: process.env.TMDB_API_KEY,
//                 ...req.query,
//             },
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error("TMDB API Error:", error.response?.status, error.response?.data);
//         res.status(error.response?.status || 500).json({ message: "TMDB API error", error: error.response?.data });
//     }
// });

app.get("/api/movies", async (req, res) => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/discover/movie",
            {
                params: { ...req.query },
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});




app.listen(4000, () => console.log("Server running on port 4000"));
