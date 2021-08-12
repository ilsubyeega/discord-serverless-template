import { ApplicationCommandtype, Command } from './../lib/interfaces/command';
import { InteractionCallbackType } from '../lib/interfaces/discord/interaction';
const github : Command = {
    name: 'Displays the github address.',
    command_name: 'github',
    information: {
        type: ApplicationCommandtype.CHAT_INPUT,
        name: 'github',
        description: 'Displays the github address.',
    },
    handle: async (interaction) => {
        return {
            type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                embeds: [
                    {
                        description: "[Click Here](https://github.com/ilsubyeega/discord-slash-vercel-template) to check the source of this bot!"
                    }
                ],
                flags: 64 // EPHEMERAL
            }
        };
    }
}
export default github;