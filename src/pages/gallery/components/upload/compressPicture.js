async function compressPicture(picture) {
  const MAX_SIZE = 400; // 压缩尺寸

  const canvas = document.getElementById('canvas');
  let ctx = null;
  // 处理浏览器不支持 canvas 的情况
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
  } else {
    return false;
  }

  const img = new Image();

  // 读取图片并转换成 base64 格式
  const fr = new FileReader();
  fr.readAsDataURL(picture);
  fr.addEventListener('load', function() {
    img.src = fr.result;
  });

  // 图片加载完成后进行压缩
  img.onload = function() {
    const { width, height } = this;
    if (width < MAX_SIZE || height < MAX_SIZE) {
      // 图片尺寸太小不压缩
      return picture;
    }
    // 计算压缩比
    const ww = MAX_SIZE / width;
    const hh = MAX_SIZE / height;
    const rate = ww < hh ? ww : hh;

    canvas.width = width * rate;
    canvas.height = height * rate;
    ctx.drawImage(this, 0, 0, width * rate, height * rate);
  };

  // 转换成二进制文件
  function getBlob() {
    return new Promise(function(resolve) {
      canvas.toBlob(function(blob) {
        resolve(blob);
      });
    });
  }

  const thumb = await getBlob();
  console.log(thumb);
  return thumb;
}

export default compressPicture;
