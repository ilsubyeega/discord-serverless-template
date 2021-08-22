import { MessageInteraction } from './../lib/interfaces/interaction';
import { InteractionCallbackType } from '../lib/interfaces/discord/interaction';
const success_button : MessageInteraction = {
    custom_id: "success_button",
    handle: async () => {
        return {
            type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Great success with button interaction!",
                flags: 64
            } 
        }
    }

}
export default success_button;