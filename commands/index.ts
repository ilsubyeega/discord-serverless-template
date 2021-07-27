import { Command } from "./../lib/interfaces/command";



import ping from './ping';
import github from './github';
import button from './button';
export const Commands : Array<Command> = [ping, github, button];