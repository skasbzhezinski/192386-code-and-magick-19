'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + COLUMN_GAP, 260);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(150, 50, 40, 190);

  ctx.fillStyle = '#000';
  ctx.fillText('Иван', CLOUD_X + COLUMN_GAP * 2 + COLUMN_WIDTH, 260);
  ctx.fillStyle = 'rgba(200, 50, 0, 1)';
  ctx.fillRect(240, 100, 40, 140);

  ctx.fillStyle = '#000';
  ctx.fillText('Марина', CLOUD_X + COLUMN_GAP * 3 + COLUMN_WIDTH * 2, 260);
  ctx.fillStyle = 'rgba(155, 100, 0, 1)';
  ctx.fillRect(330, 150, 40, 90);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', CLOUD_X + COLUMN_GAP * 4 + COLUMN_WIDTH * 3, 260);
  ctx.fillStyle = 'rgba(55, 150, 0, 1)';
  ctx.fillRect(410, 200, 40, 40);
};
