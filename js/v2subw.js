
function setServerHost(host){
    localStorage.setItem("host", host)
}

function getServerHost(successCb, failCb){
    if (localStorage.getItem("host")) {
        let host  = localStorage.getItem("host");
        if (successCb) {
            successCb(host)
        }
        return localStorage.getItem("host")
    }
    if (failCb) {
        failCb()
    }
    console.log("无法找到 server host")
    return "127.0.0.1:8886"
}

function getApiUrl(){

}

const apiStart = "/api/v1";

// 获取系统运行情况
function apiGetSystemMsg(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/conn/status",
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.data)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}

// 获取系统运行配置
function apiGetSystemConfig(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/conf/list",
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.msg)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}

// 获取系统运行配置
const configKeyHPort = "config_hPort";
const configKeySPort = "config_sPort";
const configKeyLConn = "config_lConn";

function setGetSystemConfig(key, value, callback) {
    let url = "";
    let paramName = "";
    if (key === configKeyHPort) {
        url = "/v2sub/conf/hport/set";
        paramName = "port"
    } else if (key === configKeySPort) {
        url = "/v2sub/conf/sport/set";
        paramName = "port"
    } else if (key === configKeyLConn) {
        url = "/v2sub/conf/lconn/set";
        paramName = "enable"
    }
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + url + "?" + paramName + "=" + value,
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.msg)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}


function apiConnStart(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/conn/start",
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.msg)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}

function apiConnStop(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/conn/stop",
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.msg)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}

// 获取系统订阅配置
function apiGetSubsList(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/subs/list",
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.msg)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}


// 获取系统服务配置
function apiGetServerList(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/ser/list",
                method: AJAX_METHOD.GET,
                success: function (json){
                    json = JSON.parse(json)
                    if (json.code === "1000") {
                        // console.log(json)
                        callback(json.msg)
                    } else {
                        handleErrorJson(json)
                    }
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}

// 获取系统服务配置
function apiGetV2rayLog(callback) {
    getServerHost(function (host){
            AJAX({
                url: host + apiStart + "/v2sub/conn/log",
                method: AJAX_METHOD.GET,
                success: function (log){
                    callback(log)
                }
            })
        },
        function (){
            console.log("无法获取服务器地址")
        }
    )
}


function log(...msg){
    console.log(msg)
}

function handleErrorJson(json) {
    alert("请求错误: " + json.code)
}

const AJAX_METHOD = {
    POST : "POST",
    GET: "GET",
};
/*
新的 AJAX 方法
    ajaxPostData 里面含有一下内容
        url : 参数
        header: header 信息
        method: 方法，字符串 "POST", "GET", "DELETE",或者直接 AJAX_METHOD.POST 这样
        json: 数据体，一个 json 数据体，以 JSON 格式发送请求
        form: 一个二位数组，带上各种参数, 优先级上面，json 的优先级比 form 的优先级要高, 当 json 和 form 都没有的时候，不发送数据，直接请求

            [
                ["userName", "aaa"],
                ["password", "pw12346"]
            ]

        success: function(resp) 一个回调函数，成功之后执行

            回调的参数是 Request 的返回，ResponseText

        fail: function(status) 一个回调函数，xhr.status !== 200 时候执行，

            回调的参数是 status 状态码

        always：function() 一个回调函数，无论 success 或者 fail，都将会被执行
 */
function AJAX(ajaxPostData) {
    let method = ajaxPostData.method;
    let url = ajaxPostData.url;
    if (url === undefined){
        console.log("AJAX 方法没有设置 url");
        return
    }

    if (method === undefined){
        // console.log("AJAX 方法没有设置 method");
        method = AJAX_METHOD.GET;
    }

    let xhr = new XMLHttpRequest();

    // url format
    let urlStart = ""
    if (url.indexOf("https://") === 0) {
        urlStart = "https://"
    } else if (url.indexOf("http://") === 0) {
        urlStart = "http://"
    }
    if (url !== "") {
        url = url.replace(urlStart, "")
    }
    url = url.split("//").join('/')
    url = urlStart + url;

    xhr.open(method, url, true);

    // 存放 header
    if(ajaxPostData.header !== undefined){
        for(let key in ajaxPostData.header){
            xhr.setRequestHeader(key, ajaxPostData.header[key])
        }
    }

    // 存放数据
    if (ajaxPostData.json !== undefined){
        xhr.setRequestHeader('Content-type', 'application/json;charset-UTF-8');
        xhr.send(JSON.stringify(ajaxPostData.json));
    } else if (ajaxPostData.form !== undefined) {
        let params = ajaxPostData.form;
        if (params !== null) {
            if (method === AJAX_METHOD.GET ){
                console.log("非 POST 方法无法提交 FromData 参数");
                return
            }
            let formData = new FormData();
            for (let i = 0; i < params.length; i++) {
                formData.append(params[i][0], params[i][1])
            }
            xhr.send(formData);
        } else {
            xhr.send();
        }
    }else {
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (ajaxPostData.success !== undefined){
                    ajaxPostData.success(xhr.responseText)
                }
                if (ajaxPostData.always !== undefined){
                    ajaxPostData.always()
                }
            } else {
                if (ajaxPostData.fail !== undefined){
                    ajaxPostData.fail(xhr.status)
                }
                if (ajaxPostData.always !== undefined){
                    ajaxPostData.always()
                }
            }
        }
    }
}
