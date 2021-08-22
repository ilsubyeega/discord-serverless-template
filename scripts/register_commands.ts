/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
import axios from 'axios';
import { Commands } from '../commands/index';

dotenv.config();

const headers = {
    "Content-Types": "application/json",
    "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN!}`
}

console.log(`Registering ${Commands.length} commands..`);

Commands.forEach(command => {
    console.log(JSON.stringify(command.information));
    axios
        .post(
            `https://discord.com/api/v8/applications/${process.env.DISCORD_APPLICATION_ID!}/commands`,
            command.information,
            {
                headers: headers,
            }
        )
        .then((res) => {
            console.log(`${command.name} Registered with code: ${res.status}`);
        })
        .catch((err) => {
            console.log(command.name + " Failed to register with code: ", err?.response?.status);
            console.log(err?.response?.data?.message);
        });
});