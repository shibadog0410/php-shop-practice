const KEY = "AIzaSyBKAunCO4pT3G1vIu3RRpr1_-PKttm8XAM";
let url = "https://www.googleapis.com/youtube/v3/search?";
url += "type=video";
url += "&part=snippet";
url += "&q=にじさんじ";
url += "&videoEmbeddable=true";
url += "&videoSyndicated=true";
url += "&maxResults=6";
url += "&key=" + KEY;

$(function() {
    console.log(url);
    $.ajax({
        url: url,
        dataType: "jsonp"
    })
        .done(function(data) {
            if (data.items) {
                setData(data);
            } else {
                alert("データ取得に失敗しました。");
            }
        })
        .fail(function(data) {
            alert("通信に失敗しました。");
        });

    function setData(data) {
        let result = "";
        let video = "";
        for (let i = 0; i < data.items.length; i++) {
            video = '<iframe src="https://www.youtube.com/embed/';
            video += data.items[i].id.videoId;
            video += '" allowfullscreen></iframe>';
            result += '<div class="video">' + video + "</div>";
        }

        $("#videoList").html(result);
    }
});
