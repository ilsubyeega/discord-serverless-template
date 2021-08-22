import { Command, ApplicationCommandOptionType, ApplicationCommandtype, } from '../lib/interfaces/command';
import { InteractionCallbackType, InteractionResponse } from '../lib/interfaces/discord/interaction';
import { ButtonStyle } from '../lib/interfaces/discord/components';
const button: Command = {
    name: 'Test a button',
    command_name: 'button',
    information: {
        type: ApplicationCommandtype.CHAT_INPUT,
        name: 'button',
        description: 'Test a button.',
        options: [
            {
                type: ApplicationCommandOptionType.STRING,
                name: "argument",
                description: "Show your argument string from test button.",
            }
        ]
    },
    handle: async (interaction) => {
        let value;
        if (interaction.data?.options?.[0].name == 'argument')
            value = interaction.data?.options?.[0].value;
        return {
            type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Example button command",
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                style: ButtonStyle.Primary,
                                label: value || "Great success!",
                                custom_id: "success_button"
                            }
                        ]
                    }
                ],
                flags: 64 // EPHEMERAL
            }
        } as InteractionResponse; // TODO: Fix this
    }
}
export default button;