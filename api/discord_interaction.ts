import { VercelRequest, VercelResponse } from '@vercel/node';
import { handle_auth } from './../lib/handle_auth';
import { handle_interaction } from './../lib/handle_interaction';

export default async function (req: VercelRequest, res: VercelResponse) : Promise<VercelResponse> {
    try {
        const auth = await handle_auth({
            headers: req.headers,
            method: req.method ?? "NONE",
            body: req.body
        });
        if (!auth.is_success) {
            return res.status(503).json({
                error: auth.errormsg
            });
        }
        if (auth.interaction == null) throw Error("auth.interaction object is null.");
        const result = await handle_interaction(auth.interaction);
        
        return res.status(200).json(result);
    } catch (e) {
        console.log("Error in discord_interaction", e);
        return res.status(501).json({ error: e });
    }

}