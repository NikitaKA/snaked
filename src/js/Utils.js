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
      ctx.fillRect(
        field.width / 2 - width / 2 - padding,
        field.height / 2 - height / 2 - padding,
        width + 2 * padding,
        height + 2 * padding
      );

      ctx.globalAlpha = data.alpha || 1;

      data.lines.forEach((line, i) => {
        ctx.textBaseline = line.baseline || 'middle';
        ctx.fillStyle = line.color || 'black';

        // TODO: implement text align
        const top = field.height / 2 - (data.lines.length - 1 - i) * line.height + line.height / data.lines.length;

        ctx.font = line.font;
        ctx.fillText(line.text, field.width / 2 - line.width / 2, top);
      });

      break;
  }
}
