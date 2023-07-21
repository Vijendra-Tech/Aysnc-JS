async function main() {
  // it is converting implicit Promise.resolve(90)
  const z = await 90;

  console.log(z);
}

main();
