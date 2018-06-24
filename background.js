var contentEditable = false;

function enable(tabId, enable) {
    var icon = enable ? '-active' : '';
    var title = enable ? 'disable' : 'enable';

    chrome.pageAction.setIcon({
        path: {
            '19': 'images/button-19' + icon + '.png',
            '38': 'images/button-38' + icon + '.png'
        },
        tabId: tabId
    });

    chrome.pageAction.setTitle({
        title: chrome.i18n.getMessage(title),
        tabId: tabId
    });

    chrome.tabs.executeScript(tabId, {
        code: 'document.body.setAttribute("contenteditable", "' + enable + '")'
    });

    contentEditable = enable;
}

chrome.tabs.onUpdated.addListener(function(tab) {
    chrome.pageAction.show(tab);
});

chrome.pageAction.onClicked.addListener(function(tab) {
    enable(tab.id, !contentEditable);
});
