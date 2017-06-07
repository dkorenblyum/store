export default function(server, schema) {
  let generateCount = 10;
  // function generateImageUrl () {
  //   let randomNum = Math.floor(Math.random() * 10000) + 1;
  //   return `http://loremflickr.com/960/720?random=${randomNum}`;
  // };

  //create review with images
  let review = server.create('review', {
    id : 1
  });
  for (var i = 0; i < generateCount; i++) {
    server.create('image', { review,
      url: `http://loremflickr.com/960/720?random=${i}`
    });
  }
};