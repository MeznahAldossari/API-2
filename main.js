let url = "https://http.cat/";
const resCodes = [
  100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 208, 214, 226, 300,
  301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
  424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502,
  503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
];
console.log();
async function images() {
  //   let fetching = await fetch(url);
  //   let data = await fetching.json();

  for (let index = 0; index < resCodes.length; index++) {
    // div = document.createElement("div");
    img = document.createElement("img");
    mainDiv = document.getElementById("div1");
    // div.setAttribute("class", "div2");
    img.src = `https://http.cat/${resCodes[index]}`;
    img.style.width = "20vw";
    img.style.height = "50vh";
    // div.append(img);
    mainDiv.append(img);
  }
}

images();
