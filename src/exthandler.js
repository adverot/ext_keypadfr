const ExtHandler = {

    // 当扩展加载
    onLoad(app, target) {},

    // 当扩展卸载
    onUnload(app) {
        // TODO
    },

    // 当设备连接
    onConnect(app, device) {
        // TODO
    },

    // 当设备断连
    onDisconnect(app, device) {
        // TODO
    },

    // 当点击停止按钮
    onStopAll(app, device) {
        // TODO
    },

    // 当准备切换到上传模式
    beforeChangeUploadMode(app, device) {
        // TODO
        return true;
    },

    // 当准备切换到调试模式
    beforeChangeDebugMode(app, device) {
        // TODO
        return true;
    },

    // 当已切换到上传模式
    afterChangeUploadMode(app, device) {
        // TODO
        return true;
    },

    // 当已切换到调试模式
    afterChangeDebugMode(app, device) {
        // TODO
        return true;
    },

    // 当选中设备
    onSelect(app, device) {
        // TODO
    },

    // 当离开设备
    onUnselect(app, device) {
        // TODO
    },

    // 当上传代码
    beforeCodeUpload(app, device) {
        // TODO
    },

    // 当上传代码结束
    afterCodeUpload(app, device) {
        // TODO
    },

    // 当收到字节流
    onRead(app, device) {
        // TODO
    }
}

export default ExtHandler;