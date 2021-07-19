import { User } from './user'
import { Snowflake } from './snowflake'
export interface GuildMember {
    user: User;
    nick?: string;
    roles: Snowflake[];
    joined_at: string;
    premium_since?: string;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
};