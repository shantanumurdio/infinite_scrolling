const container = document.getElementById("container");
const accessKey = "f0ox4OHMOQ1sgixwGqYcv8_mIaBldC-ISGAE9RQREyM";

const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=20`;

const fetchImage = () => {
  const image = fetch(url);
  image
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .then((data) => {
      console.log(data);
      data.map((ele) => {
        // console.log(ele.urls.small);
        const img = document.createElement("img");
        img.src = ele.urls.small;
        container.appendChild(img);
      });
    });
};

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});

fetchImage();