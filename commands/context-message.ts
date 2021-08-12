import { ApplicationCommandtype, Command } from '../lib/interfaces/command';
import { InteractionCallbackType } from '../lib/interfaces/discord/interaction';
const context_message : Command = {
    name: 'Context Menu for Message.',
    command_name: 'context_message',
    information: {
        type: ApplicationCommandtype.MESSAGE,
        name: 'context_message'
    },
    handle: async (interaction) => {
        console.log(interaction)
        const data = interaction.data!;
        const message = data.resolved!.messages![data.target_id!];
        return {
            type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                embeds: [
                    {
                        title: "Message Information (Content)",
                        description: `${message.content}`
                    }
                ],
                flags: 64 // EPHEMERAL
            }
        };
    }
}
export default context_message;