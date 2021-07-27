import { MessageInteraction } from '../lib/interfaces/interaction';

// This interaction structure only handles custom_id at this moment.
import success_button from './successbutton';

export const Interactions : Array<MessageInteraction> = [success_button];