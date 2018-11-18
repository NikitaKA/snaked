export const DRAWTEXT_ALIGN_CENTER = 'center';

export function drawText(ctx, field, data) {
  const padding = data.padding || 0;

  let width = 0;
  let height = 0;

  data.lines.forEach(line => {
    ctx.font = line.font;

    line.width = ctx.measureText(line.text).width;

    if (line.width > width) {
      width = line.width;
    }

    height += line.height;
  });

  ctx.fillStyle = data.bgcolor;
  ctx.globalAlpha = data.bgAlpha || 1;

  switch (data.align) {
    case DRAWTEXT_ALIGN_CENTER:
      ctx.save();
      ctx.translate(0, (field.height - height - padding * 2) / 2);

      ctx.fillRect(field.width / 2 - width / 2 - padding, 0, width + 2 * padding, height + 2 * padding);

      ctx.globalAlpha = data.alpha || 1;

      let heightOffset = padding;

      data.lines.forEach(line => {
        ctx.textBaseline = line.baseline || 'middle';
        ctx.fillStyle = line.color || 'black';

        ctx.font = line.font;
        ctx.fillText(line.text, field.width / 2 - line.width / 2, heightOffset + line.height / 2);

        heightOffset += line.height;
      });

      ctx.restore();

      break;
  }
}
