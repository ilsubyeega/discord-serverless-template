import { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyKey } from 'discord-interactions';

export async function handle_auth(req: VercelRequest, res: VercelResponse): Promise<Boolean> {

    if (req.method != 'POST') {
        res.status(405).json({
            error: 'Wrong method, should be post.'
        });
        return false;
    }

    // Discord Interaction Validation
    try {
        const is_valid_request = verifyKey(
            JSON.stringify(req.body),
            (req.headers["x-signature-ed25519"] || " ") as string,
            (req.headers["x-signature-timestamp"] || " ") as string,
            process.env.DISCORD_PUBLIC_KEY || " "
        );
        if (!is_valid_request) {
            res.status(401).json({ error: 'Invalid request signature.' });
            return false;
        }

    } catch (e) {
        res.status(503).json({
            error: 'Error while validating discord interaction auth.'
        });
        return false;
    }

    return true;
}