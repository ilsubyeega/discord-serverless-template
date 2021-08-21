import { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyKey } from 'discord-interactions';
import { IncomingHttpHeaders } from 'http';
import { Interaction } from './interfaces/discord/interaction';
const BYPASS_SECRET_KEY = process.env.BYPASS_SECRET_KEY || undefined;

export async function handle_auth(input: AuthInput): Promise<AuthOutput> {
    if (BYPASS_SECRET_KEY == (input.headers["bypass_scret"] || " ")) {
        console.log("BYPASS")
        return {
            is_success: true
        }
    }

    if (input.method != 'POST') {
        return {
            is_success: false,
            errormsg: "Method should be POST."
        }
    }

    // Discord Interaction Validation
    const body = typeof input.body == "string" ? input.body : JSON.stringify(input.body)
    
    try {
        const is_valid_request = verifyKey(
            body,
            (input.headers["x-signature-ed25519"] || " ") as string,
            (input.headers["x-signature-timestamp"] || " ") as string,
            process.env.DISCORD_PUBLIC_KEY || " "
        );
        if (!is_valid_request) {
            return {
                is_success: false,
                errormsg: "Invalid request signature."
            }
        }

    } catch (e) {
        return {
            is_success: false,
            errormsg: 'Error while validating discord interaction auth.'
        }
    }

    const interaction = JSON.parse(body) as Interaction;
    if (!interaction) return {
        is_success: false,
        errormsg: "Invalid form body"
    }
    return {
        is_success: true,
        interaction: interaction
    }
}
export interface AuthInput {
    headers: IncomingHttpHeaders;
    method: string;
    body: any;
}
export interface AuthOutput {
    is_success: boolean;
    errormsg?: string | undefined;
    interaction?: Interaction;
}

