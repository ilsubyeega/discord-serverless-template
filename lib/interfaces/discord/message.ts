import { MessageInteraction } from "../interaction";
import { Component, PartialEmoji } from "./components";
import { Embed } from "./embed";
import { GuildChannel, GuildChannelMention, GuildMember, GuildRole } from "./guild";
import { Snowflake } from "./snowflake";
import { User } from "./user";

export interface Message {
    id: Snowflake;
    channel_id: Snowflake;
    guild_id?: Snowflake;
    author: User;
    member?: GuildMember;
    content: string;
    timestamp: string;
    edited_timestamp?: string;
    tts: boolean;
    mention_everyone: boolean;
    mentions: User[]; // TODO: partial member filed.
    mention_roles: GuildRole[];
    mention_channels?: GuildChannelMention[];
    attachments: Attachment[];
    embeds: Embed[];
    reactions?: Reaction;
    nonce?: string | number;
    pinned: boolean;
    webhook_id?: Snowflake;
    type: number;
    activity: MessageActivity;
    //application?: 
    application_id?: Snowflake;
    message_reference?: MessageReference;
    flags?: number;
    referenced_message?: Message;
    interaction?: MessageInteraction;
    thread?: GuildChannel[];
    components?: Component[];
    sticker_items?: StickerItem[];
}
export interface MessageActivity {
    type: number;
    party_id: string;
}
export interface Attachment {
    id: Snowflake;
    filename: string;
    content_type?: string;
    size: number;
    url: string;
    proxy_url: string;
    height?: number;
    width?: number;
}
export interface Reaction {
    count: number;
    me: boolean;
    emoji: PartialEmoji;
}
export interface MessageReference {
    message_id?: Snowflake;
    channel_id?: Snowflake;
    guild_id?: Snowflake;
    fail_if_not_exists?: boolean;
}
export interface StickerItem {
    id: Snowflake;
    name: string;
    format_type: StickerFormat
}
export enum StickerFormat {
    PNG = 1,
    APNG = 2,
    LOTTIE = 3
}
export interface Sticker {
    id: Snowflake;
    pack_id: Snowflake;
    name: string;
    description?: string;
    tags: string;
    asset: string;
    type: StickerType;
    format_type: StickerFormat;
    available?: boolean;
    guild_id?: Snowflake;
    user?: User;
    sort_value?: number;
}
export enum StickerType {
    STANDARD = 1,
    GUILD = 2
}