var contentEditable = false;

function enable(tabId, enable) {
    var icon = enable ? '-active' : '';
    var title = enable ? 'disable' : 'enable';

    chrome.action.setIcon({
        path: {
            '19': 'images/button-19' + icon + '.png',
            '38': 'images/button-38' + icon + '.png'
        },
        tabId: tabId
    });

    chrome.action.setTitle({
        title: chrome.i18n.getMessage(title),
        tabId: tabId
    });


    chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: true},
        files: [enable ? "enable.js" : "disable.js"],
    });

    contentEditable = enable;
}


chrome.action.onClicked.addListener((tab) => {
        enable(tab.id, !contentEditable);
    }
)
