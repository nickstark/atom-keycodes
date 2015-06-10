
var KEYS = {
    'backspace': '8',
    'tab': '9',
    'enter': '13',
    'shift': '16',
    'ctrl': '17',
    'alt': '18',
    'pause/break': '19',
    'caps lock': '20',
    'esc': '27',
    'space': '32',
    'page-up': '33',
    'page-down': '34',
    'end': '35',
    'home': '36',
    'left-arrow': '37',
    'up-arrow': '38',
    'right-arrow': '39',
    'down-arrow': '40',
    'insert': '45',
    'delete': '46',
    'windows': '91',
    'command': '91',
    'right-click': '93',
    'numpad-*': '106',
    'numpad-+': '107',
    'numpad-minus': '109',
    'numpad-.': '110',
    'numpad-/': '111',
    ';': '186',
    '=': '187',
    ',': '188',
    'minus': '189',
    '.': '190',
    '/': '191',
    '`': '192',
    '[': '219',
    '\\': '220',
    ']': '221',
    "'": '222',
    'shift': '16',
    'option': '18',
};

var CompositeDisposable = require('atom').CompositeDisposable;

module.exports = {
    activate: function(state) {
        var keycodes = this;
        Object.keys(KEYS).forEach(function(key) {
            var subs = new CompositeDisposable();

            subs.add(
                atom.commands.add('atom-workspace', 'keycode: ' + key, this.insertKeyCode.bind(this, key))
            );
        }, this);
    },

    insertKeyCode: function(key) {
        var editor = atom.workspace.getActiveTextEditor();
        if (!editor) return;

        editor.insertText(KEYS[key]);
    }
};
