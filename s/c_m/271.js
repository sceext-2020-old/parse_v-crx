// Generated by CoffeeScript 1.12.3
(function() {
  var I, log, m271,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  log = require('../log');

  I = require('./I');

  m271 = (function(superClass) {
    extend(m271, superClass);

    function m271() {
      return m271.__super__.constructor.apply(this, arguments);
    }

    m271.prototype.init = function() {
      this.site = '271';
      this._p = window.flash;
      return log.c('c_m/271: init done. ');
    };

    m271.prototype.get_info = function() {
      var o, pi, vi;
      o = m271.__super__.get_info.call(this);
      vi = this._video_info();
      pi = this._player_info();
      o.title_video = vi.vn;
      o.title_sub = vi.subt;
      o.size = pi.width + "x" + pi.height;
      o.max_time_s = pi.totalDuration / 1e3;
      return o;
    };

    m271.prototype.get_time = function() {
      var pi;
      pi = this._player_info();
      return pi.currentTime / 1e3;
    };

    m271.prototype.set_time = function(time_s) {
      return this._player_seek(time_s);
    };

    m271.prototype.pause = function() {
      return this._player_pause();
    };

    m271.prototype._video_info = function() {
      return JSON.parse(this._p['getQiyiVideoInfo']());
    };

    m271.prototype._player_info = function() {
      return JSON.parse(this._p['getQiyiPlayerInfo']());
    };

    m271.prototype._player_log = function() {
      return this._p['getQiyiPlayerLog']();
    };

    m271.prototype._player_seek = function(time_s) {
      return this._p['seekQiyiVideo'](time_s);
    };

    m271.prototype._player_pause = function() {
      return this._p['pauseQiyiVideo']();
    };

    return m271;

  })(I);

  module.exports = m271;

}).call(this);

//# sourceMappingURL=271.js.map