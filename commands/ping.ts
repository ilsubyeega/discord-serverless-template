import { ApplicationCommandtype, Command } from './../lib/interfaces/command';
import { InteractionCallbackType } from '../lib/interfaces/discord/interaction';
const ping : Command = {
    name: 'Ping!',
    command_name: 'ping',
    information: {
        type: ApplicationCommandtype.CHAT_INPUT,
        name: 'ping',
        description: 'Ping, Pong!',
    },
    handle: async () => {
        return {
            type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Pong!",
                flags: 64 // EPHEMERAL
            }
        };
    }
}
export default ping;