const Pokedex = document.getElementById("Pokedex");

const fetchPokemon = () => {
  const promises = [];
  for (let id = 722; id <= 735; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10091; id <= 10092; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10; id <= 12; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 165; id <= 168; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 427; id <= 428; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 686; id <= 687; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 570; id <= 571; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 676; id <= 676; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 172; id <= 172; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 25; id <= 25; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10100; id <= 10100; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 736; id <= 738; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 438; id <= 438; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 185; id <= 185; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 440; id <= 440; id++) {
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
  for (let id = 446; id <= 446; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 143; id <= 143; id++) {
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
  for (let id = 278; id <= 279; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 63; id <= 65; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10107; id <= 10108; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 81; id <= 82; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 462; id <= 462; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10112; id <= 10113; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 439; id <= 439; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 122; id <= 122; id++) {
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
  for (let id = 58; id <= 59; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 96; id <= 97; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 296; id <= 297; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 235; id <= 235; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 739; id <= 740; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 92; id <= 94; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 425; id <= 426; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 198; id <= 198; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 430; id <= 430; id++) {
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
  for (let id = 714; id <= 715; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10105; id <= 10106; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 21; id <= 22; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 627; id <= 630; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 56; id <= 57; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 225; id <= 225; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 701; id <= 701; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 741; id <= 743; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 669; id <= 671; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 548; id <= 549; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 546; id <= 547; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 54; id <= 55; id++) {
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
  for (let id = 129; id <= 130; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 339; id <= 340; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 86; id <= 87; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 66; id <= 68; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 524; id <= 526; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 703; id <= 703; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 302; id <= 303; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 744; id <= 745; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 327; id <= 327; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 72; id <= 73; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 456; id <= 457; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 746; id <= 746; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 370; id <= 370; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 222; id <= 222; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 747; id <= 748; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 90; id <= 91; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 366; id <= 368; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 223; id <= 224; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 458; id <= 458; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 226; id <= 226; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 371; id <= 373; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 506; id <= 508; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 133; id <= 136; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 196; id <= 197; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 470; id <= 471; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 700; id <= 700; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 179; id <= 181; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 749; id <= 750; id++) {
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
  for (let id = 128; id <= 128; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 241; id <= 241; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 283; id <= 284; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 751; id <= 756; id++) {
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
  for (let id = 118; id <= 119; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 550; id <= 550; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 349; id <= 350; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 594; id <= 594; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 661; id <= 663; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 757; id <= 758; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 104; id <= 104; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10115; id <= 10115; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 115; id <= 115; id++) {
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
  for (let id = 467; id <= 467; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 636; id <= 637; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 759; id <= 764; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 127; id <= 127; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 163; id <= 164; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 352; id <= 352; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 765; id <= 766; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 704; id <= 706; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 351; id <= 351; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 767; id <= 768; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 120; id <= 121; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 769; id <= 770; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 138; id <= 141; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 345; id <= 348; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 408; id <= 411; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 566; id <= 567; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 564; id <= 565; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 696; id <= 699; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 246; id <= 248; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 708; id <= 709; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 177; id <= 178; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 299; id <= 299; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 476; id <= 476; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 771; id <= 771; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 170; id <= 171; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 772; id <= 773; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 803; id <= 804; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 718; id <= 718; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 568; id <= 569; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 572; id <= 573; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 204; id <= 205; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 227; id <= 227; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 132; id <= 132; id++) {
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
  for (let id = 605; id <= 606; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 774; id <= 774; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 374; id <= 376; id++) {
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
  for (let id = 474; id <= 474; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 674; id <= 675; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 775; id <= 775; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 324; id <= 324; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 776; id <= 776; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 228; id <= 229; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 702; id <= 702; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 777; id <= 777; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 309; id <= 310; id++) {
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
  for (let id = 466; id <= 466; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10109; id <= 10111; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 551; id <= 553; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 328; id <= 330; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 443; id <= 445; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 343; id <= 344; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 622; id <= 623; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 707; id <= 707; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 778; id <= 778; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 353; id <= 354; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 592; id <= 593; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 779; id <= 780; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 359; id <= 359; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 361; id <= 362; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 478; id <= 478; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 215; id <= 215; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 461; id <= 461; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10101; id <= 10104; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 582; id <= 584; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 559; id <= 560; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 624; id <= 625; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 209; id <= 210; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 422; id <= 423; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 369; id <= 369; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 781; id <= 781; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 318; id <= 319; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 690; id <= 693; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 320; id <= 321; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 131; id <= 131; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 357; id <= 357; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 102; id <= 102; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 10114; id <= 10114; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 341; id <= 342; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 619; id <= 620; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 782; id <= 784; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 587; id <= 587; id++) {
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
  for (let id = 214; id <= 214; id++) {
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
  for (let id = 667; id <= 668; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 200; id <= 200; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 429; id <= 429; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 621; id <= 621; id++) {
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
  for (let id = 447; id <= 448; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 147; id <= 149; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 142; id <= 142; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 785; id <= 793; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 805; id <= 806; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 794; id <= 802; id++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  for (let id = 807; id <= 807; id++) {
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
      <br  />  
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
