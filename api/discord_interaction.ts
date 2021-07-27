import { VercelRequest, VercelResponse } from '@vercel/node';
import {
    InteractionType,
    InteractionResponseType,
} from 'discord-interactions';
import { handle_auth } from './../lib/discord_auth';
import { Interaction } from './../lib/interfaces/discord/interaction';
import { Commands } from './../commands/';
import { Interactions } from './../interactions/';

const BYPASS_SECRET_KEY = process.env.BYPASS_SECRET_KEY || undefined;
export default async (req: VercelRequest, res: VercelResponse) => {
    try {
        if (BYPASS_SECRET_KEY == (req.headers["bypass_scret"] || " "))
            console.log("BYPASS")
        else if (!await handle_auth(req, res))
            return;
        const interaction = req.body as Interaction;
        if (!interaction) throw 'Wrong Form Body';

        switch (interaction.type) {

            case InteractionType.PING:
                res.status(200).json({
                    type: InteractionResponseType.PONG
                });
                return;

            case InteractionType.APPLICATION_COMMAND: {

                const command_name = interaction.data?.name;
                if (command_name == null) throw 'Comamnd name is null.';

                const search = Commands.filter(a => a.command_name == command_name);
                if (search == null || search.length == 0) throw `Command ${command_name} not found.`;
                
                const q = await search[0].handle(interaction);
                return res.status(200).json(q);

            }

            case InteractionType.MESSAGE_COMPONENT: {
                const custom_id = interaction.data?.custom_id;
                if (custom_id == null) throw 'This should be not null.';

                const search = Interactions.filter(a => a.custom_id == custom_id);
                if (search == null || search.length == 0) throw `Custom id ${custom_id} not found.`;

                const q = await search[0].handle(interaction);
                return res.status(200).json(q);
            }

            default:
                throw `Wrong interaction type ${interaction.type}`

        }
    } catch (e) {
        // TODO: Change this to yours.
        console.log("Error in discord_interaction", e);
        return res.status(501).json({error: e});
    }

}