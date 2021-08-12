import { Interaction, InteractionResponse } from './discord/interaction';
import { Snowflake } from './discord/snowflake';


export interface Command {
    name: string;
    command_name: string;
    information: CommandInformation;
    handle: (interaction: Interaction) => Promise<InteractionResponse>
}

export interface CommandInformation {
    id?: Snowflake;
    type?: ApplicationCommandtype,
    application_id?: Snowflake,
    guild_id?: Snowflake,
    name: string,
    description?: string,
    options?: CommandOption[],
    default_permission?: boolean
}

export enum ApplicationCommandtype {
    CHAT_INPUT = 1,
    USER = 2,
    MESSAGE = 3
}

export interface CommandOption {
    type: ApplicationCommandOptionType,
    name: string,
    description: string,
    required?: false,
    choices?: CommandOptionChoice[],
    options?: CommandOption[]
}

export interface CommandOptionChoice {
    name: string,
    value: string | number
}

export enum ApplicationCommandOptionType {
    SUB_COMMAND	= 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9
}