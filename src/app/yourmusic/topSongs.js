// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQCaNRw8Pl2FlLdnET1QMM0rUnuBUQfQBfEibnKdJpzInml8EnXuzM_BLYlM-uei5DQkO7IvmOwbquDoCCrReRX1mB5lTL4EBx1l6uDNds9ueQ_P_vaF1QDYSKakPNgFiBQ727dH688w45b-r3NQ28b8odKQm5-XK2NqRBApDNLuWHADRzrjZcqv7x4TUacc_wHuvdgLXSe_J6Wi_PApxdFpJKvVBtWyJfoUcSPNB6-s6QPewZU_bufTHtMNeuFDWE6ABlj6sF4";
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
  ).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  )
);
