const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formInput = form.elements.query.value;
  const config = { params: { q: formInput } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  addShows(res.data);
  form.elements.query.value = "";
});

const addShows = (show) => {
  for (let results of show) {
    if (results.show.image) {
      const img = document.createElement("IMG");
      img.src = results.show.image.medium;
      document.body.append(img);
    }
  }
};
