import { Interaction, InteractionCallbackType, InteractionResponse } from "./interfaces/discord/interaction";
import {
    InteractionType,
} from 'discord-interactions';
import { Commands } from './../commands/';
import { Interactions } from './../interactions/';

export async function handle_interaction(interaction: Interaction): Promise<InteractionResponse> {
    switch (interaction.type) {
        case InteractionType.PING:
            return {
                type: InteractionCallbackType.PONG
            }
        
        case InteractionType.APPLICATION_COMMAND: {
            const command_name = interaction.data?.name;
            if (command_name == null) throw 'Comamnd name is null.';

            const search = Commands
                .filter(a => a.command_name == command_name);

            if (search == null || search.length == 0) throw `Command ${command_name} not found.`;

            return await search[0].handle(interaction);
        }

        case InteractionType.MESSAGE_COMPONENT: {
            const custom_id = interaction.data?.custom_id;
            if (custom_id == null) throw 'This should be not null.';

            const search = Interactions
                .filter(a => a.custom_id == custom_id);

            if (search == null || search.length == 0) throw `Custom id ${custom_id} not found.`;

            return await search[0].handle(interaction);
        }
        
        default:
            throw `Wrong interaction type ${interaction.type}`
    }
}