const imagemin = require("imagemin-keep-folder");
const imageminPngquant = require("imagemin-pngquant");
const imageminWebp = require("imagemin-webp");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminSvgo = require("imagemin-svgo");

imagemin(["./src/assets/img/**/*"], {
  plugins: [imageminMozjpeg({ quality: 80 }), imageminPngquant(), imageminGifsicle(), imageminSvgo()],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, "../../public/assets/img/");
  },
})
  .then(() => {
    // public配下の画像ファイルをwebp変換
    imagemin(["./public/assets/img/**/*"], {
      use: [imageminWebp()],
    });
  })
  .then(() => {
    console.log("Images optimized!");
  });