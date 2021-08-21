import * as express from 'express'
import { handle_auth } from './lib/handle_auth';
import { handle_interaction } from './lib/handle_interaction';
const app = express.default();

app.get('/', (req, res) => {
    res.send("Great Success!");
})
app.post('/discord_interaction', async (req, res) => {
    try {
        const auth = await handle_auth({
            headers: req.headers,
            method: req.method!,
            body: req.body
        });
        if (!auth.is_success) {
            return res.status(503).json({
                error: auth.errormsg
            });
        }

        const result = await handle_interaction(auth.interaction!);
        return res.status(200).json(result);
    } catch (e) {
        console.log("Error in discord_interaction", e);
        return res.status(501).json({ error: e });
    }
})

if (process.env.DETA_RUNTIME == null) {
    app.listen(5000, () => {
        console.log("Server is running on 5000.")
    })
};

module.exports = app;