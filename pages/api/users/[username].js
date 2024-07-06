// const users = async (req, res) => {

// 	const { username } = req.query;

// 	const response = await fetch('https://api.github.com/users/' + username, {
// 		headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
// 	});
// 	const data = await response.json();

// 	return res.status(200).json(data);
// };

// export default users;


// pages/api/users/[username].js

// import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    });

    if (response.status === 404) {
      return res.status(404).json({ error: 'User not found' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
