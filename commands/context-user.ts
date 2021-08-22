/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ApplicationCommandtype, Command } from '../lib/interfaces/command';
import { InteractionCallbackType } from '../lib/interfaces/discord/interaction';
const context_user : Command = {
    name: 'Context Menu for User.',
    command_name: 'context_user',
    information: {
        type: ApplicationCommandtype.USER,
        name: 'context_user'
    },
    handle: async (interaction) => {
        const data = interaction.data!;
        const user = data.resolved!.users![data.target_id!];
        return {
            type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                embeds: [
                    {
                        author: {
                            name: `${user.username}#${user.discriminator}`,
                            icon_url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=128`
                        },
                        description: `Public Flags: ${user.public_flags}`
                    }
                ],
                flags: 64 // EPHEMERAL
            }
        };
    }
}
export default context_user;