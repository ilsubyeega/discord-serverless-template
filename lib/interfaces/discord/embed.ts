export interface Embed {
    title?: string;
    type?: 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'link';
    description?: string;
    url?: string;
    timestamp?: string; // ISO8601 timestamp
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];
}

export interface EmbedThumbnail {
    url?: string;
    proxy_url?: string;
    height?: string;
    width?: string;
}

export interface EmbedVideo {
    url?: string;
    proxy_url?: string;
    height?: string;
    width?: string;
}

export interface EmbedImage {
    url?: string;
    proxy_url?: string;
    height?: string;
    width?: string;
}

export interface EmbedProvider {
    name?: string;
    url?: string;
}

export interface EmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface EmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string
}

export interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
}
