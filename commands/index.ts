import { Command } from "./../lib/interfaces/command";



import context_user from './context-user';
import context_message from './context-message';
import ping from './ping';
import github from './github';
import button from './button';
export const Commands : Array<Command> = [context_user, context_message, ping, github, button];