import { Snowflake } from "./snowflake";

export interface User {
  id: Snowflake;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
};
export interface Member {
  user?: User;
  nick?: string;
  roles: Snowflake[];
  joined_at: string;
  premium_since: string;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
}