import axios from 'axios';

export const fetchGistByUsername = async (username) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/gists`,
    );
    return data;
  };
export const fetchGistById = async (gistId) => {
  const { data } = await axios.get(
    `https://api.github.com/gists/${gistId}`,
  );
  return data;
};
