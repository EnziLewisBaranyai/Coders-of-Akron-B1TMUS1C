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

const topTracksIds = [
  "62d6YXEYxmMWAuLpw1EysL",
  "1OnBWJDvgYKP6Nt6qssYCg",
  "3sf3KFdluuaEjP9hCXKm9I",
  "2dGwqFiBz00GSFSV7GWXzX",
  "5JycxhApZmzbA4xSwvqh6k",
];

async function getRecommendations() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (
    await fetchWebApi(
      `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(",")}`,
      "GET"
    )
  ).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  )
);
