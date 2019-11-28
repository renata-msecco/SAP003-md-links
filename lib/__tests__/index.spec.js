const mdLinks = require('../index.js');
const arr = [
    {text: "Markdown", href:"https://pt.wikipedia.org/wiki/Markdown"},
    {text: "Node.js", href:"https://nodejs.org/"},
    {text: "md-links", href:"https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg"}
]

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("shoul return 3 links", (done) => {
    mdLinks ("./lib/__tests__/README.md").then(result =>{
        expect(result).toEqual(arr);
        done()
    })
  });
  
});

