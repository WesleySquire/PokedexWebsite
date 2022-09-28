const Pokedex = document.getElementById("Pokedex");

const fetchPokemon = () => {
  const promises = [];
  for (let id = 152; id <= 160; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 16; id <= 18; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 21; id <= 22; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 163; id <= 164; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 19; id <= 20; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 161; id <= 162; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 172; id <= 172; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 25; id <= 26; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10; id <= 15; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 165; id <= 168; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 74; id <= 76; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 41; id <= 42; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 169; id <= 169; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 173; id <= 173; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 35; id <= 36; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 174; id <= 174; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 39; id <= 40; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 175; id <= 176; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 27; id <= 28; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 23; id <= 24; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 206; id <= 206; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 179; id <= 181; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 194; id <= 195; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 92; id <= 94; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 201; id <= 201; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 95; id <= 95; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 208; id <= 208; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 69; id <= 71; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 187; id <= 189; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 46; id <= 47; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 60; id <= 62; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 186; id <= 186; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 129; id <= 130; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 118; id <= 119; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 79; id <= 80; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 199; id <= 199; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 43; id <= 45; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 182; id <= 182; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 96; id <= 97; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 63; id <= 65; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 132; id <= 132; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 204; id <= 205; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 29; id <= 34; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 193; id <= 193; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 469; id <= 469; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 191; id <= 192; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 102; id <= 103; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 185; id <= 185; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 202; id <= 202; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 48; id <= 49; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 123; id <= 123; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 212; id <= 212; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 127; id <= 127; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 214; id <= 214; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 109; id <= 110; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 88; id <= 89; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 81; id <= 82; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 100; id <= 101; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 190; id <= 190; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 424; id <= 424; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 209; id <= 210; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 37; id <= 38; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 58; id <= 59; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 234; id <= 234; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 183; id <= 184; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 50; id <= 51; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 56; id <= 57; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 52; id <= 55; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 66; id <= 68; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 236; id <= 236; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 106; id <= 107; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 237; id <= 237; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 203; id <= 203; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 128; id <= 128; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 241; id <= 241; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 240; id <= 240; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 126; id <= 126; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 238; id <= 238; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 124; id <= 124; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 239; id <= 239; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 125; id <= 125; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 122; id <= 122; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 235; id <= 235; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 83; id <= 83; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 177; id <= 178; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 211; id <= 211; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 72; id <= 73; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 98; id <= 99; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 213; id <= 213; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 120; id <= 121; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 90; id <= 91; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 222; id <= 224; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 170; id <= 171; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 86; id <= 87; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 108; id <= 108; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 463; id <= 463; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 114; id <= 114; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 465; id <= 465; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 133; id <= 136; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 196; id <= 196; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 197; id <= 197; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 116; id <= 117; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 230; id <= 230; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 207; id <= 207; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 225; id <= 225; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 220; id <= 221; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 473; id <= 473; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 216; id <= 217; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 231; id <= 232; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 226; id <= 227; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 84; id <= 85; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 77; id <= 78; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 104; id <= 105; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 115; id <= 115; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 111; id <= 112; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 198; id <= 198; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 228; id <= 229; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 218; id <= 219; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 215; id <= 215; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 200; id <= 200; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 137; id <= 137; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 233; id <= 233; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 113; id <= 113; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 242; id <= 242; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 121; id <= 121; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 138; id <= 143; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 1; id <= 9; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 144; id <= 146; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 243; id <= 245; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 147; id <= 149; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 246; id <= 250; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 150; id <= 151; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 251; id <= 251; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    const Pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      back_image: data.sprites["back_default"],
      imageshiny: data.sprites["front_shiny"],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    displayPokemon(Pokemon);
  });
};

const displayPokemon = (Pokemon) => {
  console.log(Pokemon);

  const pokemonHTMLString = Pokemon.map(
    (pokemon) => `
      <li class="card" onclick="selectPokemon(${pokemon.id})">
      <br />  
      <img class="card-image" src="${pokemon.image}" />
        <h2 class="card-title"> ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
      </li>
      `
  ).join("");
  Pokedex.innerHTML = pokemonHTMLString;
};

const selectPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  displayPopup(pokemon);
};

const displayPopup = (pokemon) => {
  const type = pokemon.types.map((type) => type.type.name).join(", ");
  const image = pokemon.sprites["front_default"];
  const imageshiny = pokemon.sprites["front_shiny"];

  const htmlString = `
  <div class="popup">
    <div class="card">
        <button id="CloseBtn" onclick="closePopup()">Close</button>
        <img class="card-image" src="${image}" /> 
        <img class="shiny-image" src="${imageshiny}"  />
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${type}</p>
        <p>Height: ${pokemon.height}0cm | Weight: ${pokemon.weight}00g </p>  
    </div>
  </div> 
  `;

  Pokedex.innerHTML = htmlString + Pokedex.innerHTML;
};

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};

fetchPokemon();
