import { Snowflake } from "./snowflake";

export interface Component {
    // Valid for all types
    type: number;
    // Valid for Buttons, Select Menus
    custom_id?: string;
    disabled?: boolean;
    // Valid for Buttons below
    style?: number;
    label?: string;
    emoji?: PartialEmoji;
    url?: string;
    // Valid for Select Menus
    options?: SelectOption[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    // Valid for Action Rows
    components?: Component[] | Button[] | SelectMenu[]; // button and selectmenus are from component interface, so allow this.
}
export enum ComponentTypes {
    ACTION_ROWS = 1,
    BUTTON = 2,
    SELECT_MENU = 3
}
export interface Button {
// Non-link buttons must have a custom_id, and cannot have a url
// Link buttons must have a url, and cannot have a custom_id
// Link buttons do not send an interaction to your app when clicked
    type: 2;
    style: ButtonStyle;
    label?: string;
    emoji?: PartialEmoji;
    custom_id?: string;
    url?: string;
    disabled?: boolean;
}
export enum ButtonStyle {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Link = 5
}
export interface SelectMenu {
    type: number;
    custom_id: string;
    options: SelectOption[];
    placeholder?: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}
export interface SelectOption {
    label: string;
    value: string;
    description?: string;
    emoji: PartialEmoji;
    default: boolean;
}
export interface PartialEmoji {
    id: Snowflake;
    name?: string;
    animated?: boolean;
}