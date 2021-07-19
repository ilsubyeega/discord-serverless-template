import { InteractionType } from 'discord-interactions';
import { GuildMember } from './guild';
import { Embed } from './embed'
import { Snowflake } from './snowflake'
import { ApplicationCommandOptionType } from './../command';
export interface Interaction {
    id: Snowflake;
    type: InteractionType;
    guild_id: Snowflake;
    channel_id: Snowflake;
    member: GuildMember;
    token: string;
    version: number;
    data?: ApplicationCommandInteractionData;
}
export interface InteractionResponse {
    type: InteractionCallbackType;
    data?: ApplicationCommandCallbackData;
}
export interface ApplicationCommandCallbackData {
    // TODO: Fix undefined property
    tts?: boolean;
    content?: string;
    embeds?: Embed[];
    allowed_mentions?: undefined;
    flags?: number;
    components?: undefined;
}
export interface ApplicationCommandInteractionData {
    id: Snowflake;
    name: string;
    resolved?: ApplicationCommandInteractionDataResolved;
    options?: ApplicationCommandInteractionDataOption[];
    custom_id: string;
    component_type: number;
}
export interface ApplicationCommandInteractionDataResolved {
    users?: Snowflake[];
    members?: Snowflake[];
    roles?: Snowflake[];
    channels?: Snowflake[];
}
export interface ApplicationCommandInteractionDataOption {
    name: string;
    type: ApplicationCommandOptionType;
    value?: null | string | number | boolean;
    options?: ApplicationCommandInteractionDataOption[];
}
export enum InteractionCallbackType {
    PONG = 1,
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5, // ACK an interaction and **edit** a response later, the user sees a loading state
    // Only valid for component-based interactions below enum values
    DEFERRED_UPDATE_MESSAGE = 6,
    UPDATE_MESSAGE = 7,
}