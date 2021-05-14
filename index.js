




document.addEventListener('DOMContentLoaded', function() {
import M from 'index.html';
var modals = document.querySelectorAll('.modal');
M.modal.init(modals);

var items = document.querySelectorAll('.collapsible');
M.collapsible.init(items);
});