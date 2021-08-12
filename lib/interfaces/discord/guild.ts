import { User } from './user'
import { Snowflake } from './snowflake'
import { PartialEmoji } from './components'
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
export interface GuildChannel {
    id: Snowflake;
    type: GuildChannelType;
    guild_id: Snowflake;
    position: number;
    permission_overwrites?: GuildOverwriteObject[];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: Snowflake;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string;
    owner_id?: Snowflake;
    application_id?: Snowflake;
    parent_id?: Snowflake;
    last_pin_timestamp?: string;
    rtc_region?: string;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: ThreadMetadata;
    member?: ThreadMember; // TODO: is this array?
    default_auto_archive_duration?: number;
    permissions?: string;
}
export interface GuildOverwriteObject {
    id: Snowflake;
    type: number;
    allow: string;
    deny: string;
}
export enum GuildChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_NEWS = 5,
    GUILD_STORE = 6,
    GUILD_NEWS_THREAD = 10,
    GUILD_PUBLIC_THREAD = 11,
    GUILD_PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13
}
export interface GuildRole {
    id: Snowflake;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: GuildRoleTag;
}
export interface GuildRoleTag {
    bot_id?: Snowflake;
    integration_id?: Snowflake;
    // premium_subscriber : ?
}

export interface ThreadMetadata {
    archived: boolean;
    auto_archive_duration: number;
    archive_timestamp: string;
    locked?: boolean;
}
export interface ThreadMember {
    id?: Snowflake;
    user_id?: Snowflake;
    join_timestamp: string;
    flags: number;
}
export interface GuildChannelMention {
    id: Snowflake;
    guild_id: Snowflake;
    type: GuildChannelType;
    name: string;
}
