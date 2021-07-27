// This interaction structure only handles custom_id at this moment.
import { Interaction, InteractionResponse } from './discord/interaction';
export interface MessageInteraction {
    custom_id: string; // This property will be found by the filter and execute the handler.
    handle: (interaction: Interaction) => Promise<InteractionResponse>;
}