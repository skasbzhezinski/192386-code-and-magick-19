'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var BOTTOM_GAP = 20;
var FONT_SIZE = 16;
var sectionWidth = COLUMN_GAP + COLUMN_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, 36);
  ctx.fillText('Список результатов:', CLOUD_X + 20, 57);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i += 1) {
    var randomNum = Math.round(Math.random() * 100);
    var columnColor = 'hsl(240, ' + randomNum + '%, 50%)';
    var columnHeight = times[i] / maxTime * BAR_HEIGHT;

    if (names[i] === 'Вы') {
      columnColor = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + COLUMN_GAP + sectionWidth * i, CLOUD_HEIGHT + CLOUD_Y - columnHeight - FONT_SIZE - BOTTOM_GAP - 10);
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + sectionWidth * i, CLOUD_HEIGHT + CLOUD_Y - BOTTOM_GAP);
    ctx.fillStyle = columnColor;
    ctx.fillRect(CLOUD_X + COLUMN_GAP + sectionWidth * i, CLOUD_HEIGHT + CLOUD_Y - columnHeight - FONT_SIZE - BOTTOM_GAP, COLUMN_WIDTH, columnHeight);
  }
};
