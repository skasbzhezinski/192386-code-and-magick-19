'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + COLUMN_GAP, 260);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(/* 150 */CLOUD_X + COLUMN_GAP, 50, COLUMN_WIDTH, 190);

  ctx.fillStyle = '#000';
  ctx.fillText('Иван', CLOUD_X + COLUMN_GAP * 2 + COLUMN_WIDTH, 260);
  ctx.fillStyle = 'rgba(200, 50, 0, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP * 2 + COLUMN_WIDTH, 100, COLUMN_WIDTH, 140);

  ctx.fillStyle = '#000';
  ctx.fillText('Марина', CLOUD_X + COLUMN_GAP * 3 + COLUMN_WIDTH * 2, 260);
  ctx.fillStyle = 'rgba(155, 100, 0, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP * 3 + COLUMN_WIDTH * 2, 150, COLUMN_WIDTH, 90);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', CLOUD_X + COLUMN_GAP * 4 + COLUMN_WIDTH * 3, 260);
  ctx.fillStyle = 'rgba(55, 150, 0, 1)';
  ctx.fillRect(CLOUD_X + COLUMN_GAP * 4 + COLUMN_WIDTH * 3, 200, COLUMN_WIDTH, 40);
};
