import dotenv from 'dotenv';
import axios from 'axios';
import { CommandInformation } from '../lib/interfaces/command';

dotenv.config();

const headers = {
    "Content-Types": "application/json",
    "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN!}`
}
console.log(headers)
async function req() {
    const listreq = await axios.get(`https://discord.com/api/v9/applications/${process.env.DISCORD_APPLICATION_ID!}/commands`, {
        headers: headers
    });
    if (listreq.status != 200) throw `Error while fetching command list.`;
    const list: CommandInformation[] = listreq.data;
    for (const command of list) {
        const r = await axios.delete(`https://discord.com/api/v9/applications/${process.env.DISCORD_APPLICATION_ID!}/commands/${command.id!}`, {
            headers: headers
        });
        if (r.status == 204) {
            console.log(`Successfully deleted ${command.name} command.`);
        } else {
            1
            console.log(`Failed to delete ${command.name} command.`, r.status);
        }
    }
}
req().then(a => console.log("Done"))
    .catch(a => console.error(a));