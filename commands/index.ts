import { Command } from "./../lib/interfaces/command";



import ping from './ping';
import github from './github';
export const Commands : Array<Command> = [ping, github];