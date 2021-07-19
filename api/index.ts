import { VercelRequest, VercelResponse } from '@vercel/node';
export default async (req: VercelRequest, res: VercelResponse) : Promise<VercelResponse> => {
	return res.status(200).send('Great Success!');
};