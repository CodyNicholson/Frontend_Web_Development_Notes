# Playing Videos In Canvas

```js
<!DOCTYPE html>
<html>
<head>
	<title>Playing Videos In Canvas Test</title>
</head>
<body>
	<video id="v" controls loop src="video.mp4"></video>
	<canvas id="c"></canvas>
	<script type="text/javascript">
		var canvas = document.querySelector("canvas");
		var ctx = canvas.getContext("2d");

		document.addEventListener("DOMContentLoaded",function(){
			var v = document.querySelector("#v");
			var canvas = document.querySelector("#c");
			var ctx = canvas.getContext("2d");

			v.addEventListener("loadedmetadata",function(){
				canvas.width  = this.videoWidth;
				canvas.height = this.videoHeight;
			});

			var draw = function(){
				canvas.getContext("2d").drawImage(v,0,0);
				requestAnimationFrame(draw);
			}

			v.addEventListener("play", function(){
				if (v.paused || v.ended) return;
				draw();
			});
		});
	</script>
</body>
</html>
```

### requestAnimationFrame

We can only show a single frame of a video at a time, so how can we display a whole video?

We could solve our problem by calling our draw function with setInterval or setTimeout, but the better way is to use **requestAnimationFrame**

requestAnimationFrame only sends a request if the last frame is already finished drawing, or the window is actively being viewed

setInterval and setTimeOut execute no matter what, so if your drawing rakes a really long time to finish a single frame, and your interval is really small, it can cause your browser to slow down of crash.

When we add a call to requestImageFrame after the drawImage call, it makes sure that the canvas gets updated
