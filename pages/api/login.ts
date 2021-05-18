import { LOGIN_API } from "../../config";

export default (req, res) => {
    const code = req.query.code;

    fetch(`${LOGIN_API}${code ? `?code=${code}` : ""}`, {
        headers: {
            Authorization: `Bearer ${req.headers["authorization"]}`,
            REDIRECT_URI: req.headers["redirect_uri"],
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            res.json({ data });
        })
        .catch(() => res.json({ data: null }));
};
