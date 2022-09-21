const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    let count = 0;
    const IXX = await promiseTheaterIXX();
    IXX.forEach((e) => {
      if (e.hasil === emotion) count += 1;
    });
    const VGC = await promiseTheaterVGC();
    VGC.forEach((e) => {
      if (e.hasil === emotion) count += 1;
    });
    return count;
  } catch (error) {
    return error
  }
};

module.exports = {
  promiseOutput,
};
