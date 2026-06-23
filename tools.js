// ==================== 工具条数据（JSON 数组驱动） ====================
// 增删改链接只需编辑此数组，双击 index.html 即可生效。
// type: "link" = 弹窗链接 / "action" = JS 函数按钮
const TOOLS_DATA = [
    {
        "type": "action",
        "name": "歌单列表",
        "action": "showPlaylist"
    }, 
    {
        "type": "link",
        "name": "figlet",
        "url": "https://pcrock99.github.io/d1/d/html/figlet-tool.html",
        "title": "figlet",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "html预览",
        "url": "https://pcrock99.github.io/d1/d/html/cs.html",
        "title": "html预览",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "json修复",
        "url": "https://pcrock99.github.io/d1/d/html/json.html",
        "title": "html预览",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "在线仓鼠",
        "url": "https://hammyhome.com/",
        "title": "在线仓鼠",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "AI人脸",
        "url": "https://thispersondoesnotexist.com/",
        "title": "AI人脸生成器",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "舔狗日记",
        "url": "https://we.dog/",
        "title": "舔狗日记",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "云段子",
        "url": "https://www.yduanzi.com/",
        "title": "云段子",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "狗屁不通",
        "url": "https://suulnnka.github.io/BullshitGenerator/",
        "title": "狗屁不通文章生成器",
        "target": "_blank"
    },
    {
        "type": "link",
        "name": "1907电影",
        "url": "https://im1907.top/?jx=",
        "title": "1907",
        "target": "_blank"
    }
];

// ==================== 生成工具条 HTML ====================
function generateToolsHTML() {
    return TOOLS_DATA.map(function(item) {
        if (item.type === "action" && item.action === "showPlaylist") {
            return '<a id="showPlaylistBtn" style="cursor: pointer;">' + item.name + '</a>';
        }
        return '<a class="popup-link" href="' + item.url + '" data-title="' + item.title + '" target="' + item.target + '">' + item.name + '</a>';
    }).join('\n        ');
}
