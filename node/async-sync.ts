type Data = {
  nama: string;
  user: string;
  height: number;
};
const data: Data[] = [
  {
    nama: "alif",
    user: "alif",
    height: 165,
  },
  {
    nama: "muryp",
    user: "muryp",
    height: 165,
  },
];

const getData = (id: number, cb: Function): void => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const out = id === 1 ? data[0] : data[1];
    cb(out);
  }, time);
};

console.log("mulai async");

// async
const tes1 = getData(1, (e: Data) => {
  console.log(e);
});
const tes2 = getData(2, (e: Data) => {
  console.log(e);
});
console.log("end");

console.log("mulai sync");
// sync
function sleep(milliseconds:number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
sleep(3000)
console.log(data[0])
sleep(3000)
console.log(data[1])

console.log("end");
